import React, { memo, useState } from "react";
import styles from "../../../index.module.css";
import clsx from "clsx";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import { UseFormSetValue, useForm } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress";
import { useConnectedWallet, useWallet } from "@xpla/wallet-provider";
import {
  Coin,
  Fee,
  LCDClient,
  MsgExecuteContract,
  SimplePublicKey,
  TxAPI,
} from "@xpla/xpla.js";
import axios from "axios";
import BigNumber from "bignumber.js";
import { Modal } from "@mui/material";
import SwapTxSucceedModal from "./SwapTxSucceedModal";
import TxFailModal from "../Modal/TxFailModal";
import { timeout } from "@site/src/util/timeout";
import useUserAddress from "@site/src/hooks/Zustand/useUserAddress";
import useUserInfo from "@site/src/hooks/useQuery/useUserInfo";
import SwapDropdown from "./SwapDropdown";
import NumberInput from "@site/src/components/NumberInput";
import { useQueryClient } from "@tanstack/react-query";
import ModalWrap from "../Modal/ModalWrap";
import NowInConfirmationModal from "../Modal/NowInConfirmationModal";
import TxInProgressModal from "../Modal/TxInProgressModal";

interface SWAPFORM {
  tknAmount: number | string;
  xplaAmount: number | string;
}

type Simulation = {
  return_amount: string;
  spread_amount: string;
  commission_amount: string;
};

export const RATIOSTANDARD = {
  XPLA: 0,
  ACADEMYTKN: 1,
} as const;

type RATIOSTANDARD = (typeof RATIOSTANDARD)[keyof typeof RATIOSTANDARD];

const TXMODALTYPE = {
  NOTOPEN: 0,
  NOWINCONFIRMATION: 1,
  TXINPROGRESS: 2,
  TXSUCCESS: 3,
  TXFAIL: 4,
} as const;
type TXMODALTYPE = (typeof TXMODALTYPE)[keyof typeof TXMODALTYPE];

const chainID = "cube_47-5";
const URL = "https://cube-lcd.xpla.dev";
const lcd = new LCDClient({ chainID, URL });

const Swap = () => {
  const { userAddress } = useUserAddress();
  const { data: userInfo, status } = useUserInfo();

  const [modalOpen, setModalOpen] = useState<TXMODALTYPE>(TXMODALTYPE.NOTOPEN);
  const [tkn2xpla, setTkn2xpla] = useState<boolean>(true);
  const [ratioShow, setRatioShow] = useState<RATIOSTANDARD>(
    RATIOSTANDARD.ACADEMYTKN
  );

  const [requestError, setRequestError] = useState<string | null>(null);
  const [txhash, setTxhash] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [estimateFee, setEstimateFee] = useState<Fee | "-">("-");

  const form = useForm<SWAPFORM>({ mode: "onChange" });
  const connectedWallet = useConnectedWallet();

  const queryClient = useQueryClient();

  const { watch, setValue, handleSubmit, register, resetField } = form;
  const { ...values } = watch();

  const swapPoolAddr =
    "xpla1j9y04pcpjpzac7q803wpgt952hg66mplea3rdp95ne482n0ecthsm4xcm5";
  const cw20ContractAddr =
    "xpla1shxdwyus9u6tgvu6kl5tdgem4d4at9vhanq0hxyqnm4ly3wd8awqkwlcj3";

  const onSubmit = async ({ ...submitValues }: SWAPFORM) => {
    try {
      if (!connectedWallet) {
        throw new Error("602");
      }
      setLoading(true);
      setModalOpen(TXMODALTYPE.NOWINCONFIRMATION);
      const { tknAmount, xplaAmount } = submitValues;
      const swapMsg = new MsgExecuteContract(
        userAddress,
        tkn2xpla ? cw20ContractAddr : swapPoolAddr,
        tkn2xpla
          ? {
              send: {
                contract: swapPoolAddr,
                amount: new BigNumber(tknAmount)
                  .multipliedBy(10 ** 6)
                  .toFixed(),
                msg: "ew0KInN3YXAiOiB7fQ0KfQ==",
              },
            }
          : {
              swap: {
                offer_asset: {
                  info: {
                    native_token: {
                      denom: "axpla",
                    },
                  },
                  amount: new BigNumber(xplaAmount)
                    .multipliedBy(10 ** 18)
                    .toFixed(),
                },
              },
            },
        tkn2xpla
          ? undefined
          : [
              new Coin(
                "axpla",
                new BigNumber(xplaAmount).multipliedBy(10 ** 18).toFixed()
              ),
            ]
      );

      if (estimateFee === '-') {
        throw new Error("Fee is not calculated.");
      }
      
      const { result: postedTx, success } = await timeout(
        connectedWallet.post({
          msgs: [swapMsg],
          fee: estimateFee
        }),
        20000,
        "602"
      );
      if (!success) {
        throw new Error("603");
      }
      setModalOpen(TXMODALTYPE.TXINPROGRESS);

      setTxhash(postedTx.txhash);
      setTimeout(waitResult, 1000, postedTx.txhash);
    } catch (error) {
      setLoading(false);
      setModalOpen(TXMODALTYPE.TXFAIL);
      setRequestError(
        `${error instanceof Error ? error.message : String(error)}`
      );
    }
  };

  async function waitResult(resTxhash) {
    try {
      const txRes = await axios.get(
        `https://cube-lcd.xpla.dev/cosmos/tx/v1beta1/txs/${resTxhash}`
      );
      if (txRes.data.tx_response?.code === 0) {
        await queryClient.invalidateQueries({
          queryKey: ["useUserInfo", userAddress],
        });
        setLoading(false);
        setModalOpen(TXMODALTYPE.TXSUCCESS);
      } else {
        throw new Error("Blockchain write failure in Swap.");
      }
    } catch (error) {
      if (error.response.data?.code === 5) {
        setTimeout(waitResult, 1000, resTxhash);
      } else {
        setLoading(false);
        setModalOpen(TXMODALTYPE.TXFAIL);
        setRequestError(
          `${error instanceof Error ? error.message : String(error)}`
        );
      }
    }
  }

  const getSwapTxFee = async (
    amount: string | number,
    swapTkn2XPLA: boolean
  ) => {
    try {
      const swapMsg = new MsgExecuteContract(
        userAddress,
        swapTkn2XPLA ? cw20ContractAddr : swapPoolAddr,
        swapTkn2XPLA
          ? {
              send: {
                contract: swapPoolAddr,
                amount: new BigNumber(amount).multipliedBy(10 ** 6).toFixed(),
                msg: "ew0KInN3YXAiOiB7fQ0KfQ==",
              },
            }
          : {
              swap: {
                offer_asset: {
                  info: {
                    native_token: {
                      denom: "axpla",
                    },
                  },
                  amount: new BigNumber(amount)
                    .multipliedBy(10 ** 18)
                    .toFixed(),
                },
              },
            },
        swapTkn2XPLA
          ? undefined
          : [
              new Coin(
                "axpla",
                new BigNumber(amount).multipliedBy(10 ** 18).toFixed()
              ),
            ]
      );

      const accInfo = await lcd.auth.accountInfo(userAddress);
      const pubkey = accInfo.getPublicKey() as SimplePublicKey;

      const tx_api = new TxAPI(lcd);
      const simul_fee = await tx_api.estimateFee(
        [{ sequenceNumber: accInfo.getSequenceNumber(), publicKey: pubkey }],
        {
          msgs: [swapMsg],
          gasAdjustment: 1.1,
        }
      );

      setEstimateFee(simul_fee);
    } catch (e) {
      setEstimateFee("-");
    }
  };

  const handleModalClose = () => {
    if (
      modalOpen !== TXMODALTYPE.NOWINCONFIRMATION &&
      modalOpen !== TXMODALTYPE.TXINPROGRESS
    ) {
      setModalOpen(TXMODALTYPE.NOTOPEN);
      setRequestError(null);
      setEstimateFee('-');
      setTxhash(null);
      resetField("tknAmount");
      resetField("xplaAmount");
    }
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center px-[20px] pt-[77px] pb-[79px] bg-[#EAF8FF] h-full"
      >
        <img
          src="/img/opspage/Main/Swap/swaptitle.svg"
          alt="swaptitle"
          width="213px"
          height="60px"
        />
        <img
          className="mt-[15px] mb-[4px]"
          src="/img/opspage/Main/starlight.svg"
          alt="starlight"
          width="28px"
          height="28px"
        />
        <div className="text-center font-normal text-[20px] leading-[28px]">
          The most common De-fi system in the Web 3 ecosystem.
          <br /> Exchange your tokens for different types of
          <br /> tokens and explore various services!
        </div>
        <div className="mt-[27px] flex flex-col gap-[41px] relative w-full max-w-[528px]">
          <div className="border-[1px] border-solid flex flex-col">
            <div className="py-[13px] text-center text-white font-semibold text-[24px] bg-[#00B2FC] leading-[24px]">
              FROM
            </div>
            <div className="bg-white flex flex-1 flex items-center p-[20px] justify-between w-full">
              <SwapDropdown
                className=""
                isfrom={true}
                nowXPLASelected={!tkn2xpla}
                to={
                  tkn2xpla
                    ? "https://explorer.xpla.io/testnet/address/xpla1shxdwyus9u6tgvu6kl5tdgem4d4at9vhanq0hxyqnm4ly3wd8awqkwlcj3"
                    : "https://explorer.xpla.io/testnet/token/xpla"
                }
                label={tkn2xpla ? "ACADEMY-TKN" : "XPLA"}
                setTkn2xpla={setTkn2xpla}
                setRatioShow={setRatioShow}
                onClickFn={async () =>
                  await getSwapTxFee(
                    !tkn2xpla ? values.tknAmount : values.xplaAmount,
                    !tkn2xpla
                  )
                }
              />
              {tkn2xpla ? (
                <NumberInput
                  {...register("tknAmount", {
                    maxLength: 25,
                    onChange: async (e) => {
                      try {
                        const res = await lcd.wasm.contractQuery<Simulation>(
                          swapPoolAddr,
                          {
                            simulation: {
                              offer_asset: {
                                info: {
                                  token: {
                                    contract_addr:
                                      "xpla1shxdwyus9u6tgvu6kl5tdgem4d4at9vhanq0hxyqnm4ly3wd8awqkwlcj3",
                                  },
                                },
                                amount: new BigNumber(e.target.value)
                                  .multipliedBy(10 ** 6)
                                  .toFixed(),
                              },
                            },
                          }
                        );
                        setValue(
                          "xplaAmount",
                          new BigNumber(res.return_amount)
                            .dividedBy(10 ** 18)
                            .toFixed()
                        );
                        await getSwapTxFee(e.target.value, tkn2xpla);
                      } catch (e) {
                        setEstimateFee('-');
                        resetField("tknAmount");
                        resetField("xplaAmount");
                      }
                    },
                  })}
                />
              ) : (
                <NumberInput
                  {...register("xplaAmount", {
                    maxLength: 25,
                    onChange: async (e) => {
                      try {
                        const res = await lcd.wasm.contractQuery<Simulation>(
                          swapPoolAddr,
                          {
                            simulation: {
                              offer_asset: {
                                info: {
                                  native_token: {
                                    denom: "axpla",
                                  },
                                },
                                amount: new BigNumber(e.target.value)
                                  .multipliedBy(10 ** 18)
                                  .toFixed(),
                              },
                            },
                          }
                        );
                        setValue(
                          "tknAmount",
                          new BigNumber(res.return_amount)
                            .dividedBy(10 ** 6)
                            .toFixed()
                        );
                        await getSwapTxFee(e.target.value, tkn2xpla);
                      } catch (e) {
                        setEstimateFee('-');
                        resetField("tknAmount");
                        resetField("xplaAmount");
                      }
                    },
                  })}
                />
              )}
            </div>
          </div>
          <div className="border-[1px] border-solid flex flex-col">
            <div className="py-[13px] text-center text-white font-semibold text-[24px] bg-[#00B2FC] leading-[24px]">
              TO
            </div>
            <div className="bg-white flex flex-1 flex items-center p-[20px] justify-between w-full">
              <SwapDropdown
                isfrom={false}
                className=""
                nowXPLASelected={tkn2xpla}
                to={
                  !tkn2xpla
                    ? "https://explorer.xpla.io/testnet/address/xpla1shxdwyus9u6tgvu6kl5tdgem4d4at9vhanq0hxyqnm4ly3wd8awqkwlcj3"
                    : "https://explorer.xpla.io/testnet/token/xpla"
                }
                label={!tkn2xpla ? "ACADEMY-TKN" : "XPLA"}
                setTkn2xpla={setTkn2xpla}
                setRatioShow={setRatioShow}
                onClickFn={async () =>
                  await getSwapTxFee(
                    !tkn2xpla ? values.tknAmount : values.xplaAmount,
                    !tkn2xpla
                  )
                }
              />
              {!tkn2xpla ? (
                <NumberInput
                  {...register("tknAmount", {
                    maxLength: 25,
                    onChange: async (e) => {
                      try {
                        const res = await lcd.wasm.contractQuery<Simulation>(
                          swapPoolAddr,
                          {
                            simulation: {
                              offer_asset: {
                                info: {
                                  token: {
                                    contract_addr:
                                      "xpla1shxdwyus9u6tgvu6kl5tdgem4d4at9vhanq0hxyqnm4ly3wd8awqkwlcj3",
                                  },
                                },
                                amount: new BigNumber(e.target.value)
                                  .multipliedBy(10 ** 6)
                                  .toFixed(),
                              },
                            },
                          }
                        );
                        setValue(
                          "xplaAmount",
                          new BigNumber(res.return_amount)
                            .dividedBy(10 ** 18)
                            .toFixed()
                        );
                        await getSwapTxFee(
                          new BigNumber(res.return_amount)
                            .dividedBy(10 ** 18)
                            .toFixed(),
                          tkn2xpla
                        );
                      } catch (e) {
                        setEstimateFee('-');
                        resetField("tknAmount");
                        resetField("xplaAmount");
                      }
                    },
                  })}
                />
              ) : (
                <NumberInput
                  {...register("xplaAmount", {
                    maxLength: 25,
                    onChange: async (e) => {
                      try {
                        const res = await lcd.wasm.contractQuery<Simulation>(
                          swapPoolAddr,
                          {
                            simulation: {
                              offer_asset: {
                                info: {
                                  native_token: {
                                    denom: "axpla",
                                  },
                                },
                                amount: new BigNumber(e.target.value)
                                  .multipliedBy(10 ** 18)
                                  .toFixed(),
                              },
                            },
                          }
                        );
                        setValue(
                          "tknAmount",
                          new BigNumber(res.return_amount)
                            .dividedBy(10 ** 6)
                            .toFixed()
                        );
                        await getSwapTxFee(
                          new BigNumber(res.return_amount)
                            .dividedBy(10 ** 6)
                            .toFixed(),
                          tkn2xpla
                        );
                      } catch (e) {
                        setEstimateFee('-');
                        resetField("tknAmount");
                        resetField("xplaAmount");
                      }
                    },
                  })}
                />
              )}
            </div>
          </div>
          <div className="absolute left-[239px] top-[118px] flex justify-center items-center">
            <div
              onClick={async () => {
                await getSwapTxFee(
                  !tkn2xpla ? values.tknAmount : values.xplaAmount,
                  !tkn2xpla
                );
                setRatioShow(
                  tkn2xpla ? RATIOSTANDARD.XPLA : RATIOSTANDARD.ACADEMYTKN
                );
                setTkn2xpla(!tkn2xpla);
              }}
              className={clsx("hover:cursor-pointer", styles.swapChangeButton)}
            />
          </div>
        </div>
        <div className="mt-[18px] bg-[#00B2FC33] w-full px-[20px] py-[8px] max-w-[528px]">
          <div className="flex justify-between border-solid border-0 border-b-[1px] mb-[10px]">
            <span className="font-medium text-[16px] leading-[19px] text-[#3F3F3F]">
              Swap Rate
            </span>
            {estimateFee === "-" || !estimateFee ? (
              <span className="font-medium text-[16px] leading-[19px] text-black">
                -
              </span>
            ) : (
              <div className="flex gap-[15px] font-medium text-[16px] leading-[19px] text-black">
                <span>
                  1
                  <span className="font-bold">
                    {ratioShow === RATIOSTANDARD.ACADEMYTKN
                      ? "ACADEMY-TKN"
                      : "XPLA"}
                  </span>
                </span>
                <img
                  src="/img/opspage/Main/Swap/swapRateArrow.svg"
                  alt="swapRateArrow"
                  width="18px"
                  height="19px"
                  className="hover:cursor-pointer"
                  onClick={() =>
                    setRatioShow(
                      ratioShow === RATIOSTANDARD.ACADEMYTKN
                        ? RATIOSTANDARD.XPLA
                        : RATIOSTANDARD.ACADEMYTKN
                    )
                  }
                />
                <span>
                  {ratioShow === RATIOSTANDARD.ACADEMYTKN
                    ? new BigNumber(values.xplaAmount)
                        .dividedBy(values.tknAmount)
                        .toFormat(3, BigNumber.ROUND_DOWN, {
                          decimalSeparator: ".",
                          groupSeparator: ",",
                          groupSize: 3,
                        })
                    : new BigNumber(values.tknAmount)
                        .dividedBy(values.xplaAmount)
                        .toFormat(3, BigNumber.ROUND_DOWN, {
                          decimalSeparator: ".",
                          groupSeparator: ",",
                          groupSize: 3,
                        })}
                  <span className="font-bold">
                    {ratioShow !== RATIOSTANDARD.ACADEMYTKN
                      ? "ACADEMY-TKN"
                      : "XPLA"}
                  </span>
                </span>
              </div>
            )}
          </div>
          <div className="flex justify-between border-solid border-0 border-b-[1px]">
            <span className="font-medium text-[16px] leading-[19px] text-[#3F3F3F]">
              Estimated Fee
            </span>
            {estimateFee === "-" || !estimateFee ? (
              <span className="font-medium text-[16px] leading-[19px] text-black">
                -
              </span>
            ) : (
              <span className="font-medium text-[16px] leading-[19px] text-black">
                {new BigNumber(
                  estimateFee.amount.toString().replace("axpla", "")
                )
                  .dividedBy(10 ** 18)
                  .toFormat({
                    decimalSeparator: ".",
                    groupSeparator: ",",
                    groupSize: 3,
                  })}
                <span className="font-extrabold"> XPLA</span>
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={!estimateFee || estimateFee === "-"}
          className={clsx(
            "border-0 relative mt-[37px] px-[133px] py-[17px] flex items-center text-white font-semibold leading-[30px] rounded-full",
            !estimateFee
              ? "bg-[#3F3F3F]"
              : estimateFee === "-"
              ? styles.swapButtonOff
              : styles.swapButtonOn,
            estimateFee && estimateFee !== "-" && "hover:cursor-pointer",
            tkn2xpla &&
              BigNumber(values?.tknAmount).isGreaterThan(userInfo.token)
              ? "text-[16px]"
              : !tkn2xpla &&
                BigNumber(values?.xplaAmount).isGreaterThan(userInfo.xpla)
              ? "text-[16px]"
              : "text-[24px]"
          )}
        >
          {tkn2xpla &&
          BigNumber(values?.tknAmount).isGreaterThan(userInfo.token)
            ? "Insufficient ACADEMY-TKN Balance"
            : !tkn2xpla &&
              BigNumber(values?.xplaAmount).isGreaterThan(userInfo.xpla)
            ? "Insufficient XPLA Balance"
            : "SWAP"}
          {loading && <CircularProgress size={18} style={{ color: "white" }} />}
          <div className="absolute top-[7px] right-[7px] rounded-full bg-white aspect-square w-[51px] flex justify-center items-center">
            <CallMadeOutlinedIcon style={{ fill: "#3F3F3F", fontSize: 30 }} />
          </div>
        </button>
      </form>
      <Modal
        open={modalOpen !== TXMODALTYPE.NOTOPEN}
        onClose={handleModalClose}
      >
        <ModalWrap>
          {modalOpen === TXMODALTYPE.TXSUCCESS && (
            <SwapTxSucceedModal
              xplaAmount={values.xplaAmount}
              tknAmount={values.tknAmount}
              estimateFee={
                estimateFee !== '-'
                  ? new BigNumber(
                      estimateFee.amount.toString().replace("axpla", "")
                    )
                      .dividedBy(10 ** 18)
                      .toFormat({
                        decimalSeparator: ".",
                        groupSeparator: ",",
                        groupSize: 3,
                      })
                  : ""
              }
              txhash={txhash || ""}
              handleModalClose={handleModalClose}
              tkn2xpla={tkn2xpla}
            />
          )}

          {modalOpen === TXMODALTYPE.TXFAIL && (
            <TxFailModal
              title={"SWAP"}
              requestError={requestError}
              estimateFee={
                estimateFee !== '-'
                  ? new BigNumber(
                      estimateFee.amount.toString().replace("axpla", "")
                    )
                      .dividedBy(10 ** 18)
                      .toFormat({
                        decimalSeparator: ".",
                        groupSeparator: ",",
                        groupSize: 3,
                      })
                  : ""
              }
              txhash={txhash || ""}
              handleModalClose={handleModalClose}
            />
          )}
          {modalOpen === TXMODALTYPE.NOWINCONFIRMATION && (
            <NowInConfirmationModal />
          )}

          {modalOpen === TXMODALTYPE.TXINPROGRESS && <TxInProgressModal />}
        </ModalWrap>
      </Modal>
    </>
  );
};

export default memo(Swap);
