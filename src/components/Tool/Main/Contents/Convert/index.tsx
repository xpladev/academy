import React, { memo, useState } from "react";
import styles from "../../../index.module.css";
import clsx from "clsx";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import { useForm } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress";
import { useConnectedWallet } from "@xpla/wallet-provider";
import {
  LCDClient,
  MsgExecuteContract,
  SignMode,
  SimplePublicKey,
  Tx,
  TxAPI,
} from "@xpla/xpla.js";
import axios from "axios";
import BigNumber from "bignumber.js";
import { Modal } from "@mui/material";
import TxSucceedModal from "./ConvertTxSucceedModal";
import TxFailModal from "../Modal/TxFailModal";
import { timeout } from "@site/src/util/timeout";
import useUserAddress from "@site/src/hooks/Zustand/useUserAddress";
import useConvertUnsigned from "@site/src/hooks/useMutation/useConvertUnsigned";
import useConvertSigned from "@site/src/hooks/useMutation/useConvertSigned";
import ConvertInput from "./ConvertInput";
import ModalWrap from "../Modal/ModalWrap";
import { useQueryClient } from "@tanstack/react-query";
import TxInProgressModal from "../Modal/TxInProgressModal";
import NowInConfirmationModal from "../Modal/NowInConfirmationModal";

export interface CONVERTFORM {
  amount: number | string;
}

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

const Convert = () => {
  const { userAddress } = useUserAddress();

  const [modalOpen, setModalOpen] = useState<TXMODALTYPE>(TXMODALTYPE.NOTOPEN);
  const [dia2tkn, setDia2tkn] = useState<boolean>(true);

  const [requestError, setRequestError] = useState<string | null>(null);
  const [txhash, setTxhash] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [estimateFee, setEstimateFee] = useState<string | null>(null);

  const connectedWallet = useConnectedWallet();

  const form = useForm<CONVERTFORM>({ mode: "onChange" });
  const { watch, setValue, handleSubmit, reset } = form;
  const { ...values } = watch();

  const { mutateAsync: convertUnsigned } = useConvertUnsigned(dia2tkn);
  const { mutateAsync: convertSigned } = useConvertSigned(dia2tkn);
  const queryClient = useQueryClient();

  const onSubmit = async ({ ...submitValues }: CONVERTFORM) => {
    try {
      if (!connectedWallet) {
        throw new Error("602");
      }
      setLoading(true);
      setModalOpen(TXMODALTYPE.NOWINCONFIRMATION);
      const { amount } = submitValues;
      const { tid, unsignedTx } = await convertUnsigned(amount);

      const decodedTx = Tx.fromBuffer(Buffer.from(unsignedTx, "base64"));

      const { result: signedTx, success } = await timeout(
        connectedWallet.sign({
          msgs: decodedTx.body.messages,
          fee: decodedTx.auth_info.fee,
          signMode: SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
        }),
        20000,
        "602"
      );

      if (!success) {
        throw new Error("603");
      }
      setModalOpen(TXMODALTYPE.TXINPROGRESS);
      const userSignedTx = Buffer.from(signedTx.toBytes()).toString("base64");
      const { txhash: resTxhash } = await convertSigned({
        tid,
        userTx: userSignedTx,
      });

      setTxhash(resTxhash);
      setTimeout(waitResult, 1000, resTxhash);
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
        `${process.env.REACT_APP_SERVERURL}wallet/txinfo?txhash=${resTxhash}`
      );
      if (txRes.data.returnCode === "500") {
        setTimeout(waitResult, 1000, resTxhash);
      } else if (txRes.data.returnCode === "0") {
        await queryClient.invalidateQueries({
          queryKey: ["useUserInfo", userAddress],
        });
        setLoading(false);
        setModalOpen(TXMODALTYPE.TXSUCCESS);
      } else {
        throw Error(txRes.data.returnMsg);
      }
    } catch (error) {
      setLoading(false);
      setModalOpen(TXMODALTYPE.TXFAIL);
      setRequestError(
        `${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  const getTxFee = async (amount: number) => {
    try {
      const serverAdd = "xpla16rckux27qz5rv4etjk0rdm675ct26v9w8uk286";
      const cw20_contract =
        "xpla1shxdwyus9u6tgvu6kl5tdgem4d4at9vhanq0hxyqnm4ly3wd8awqkwlcj3";
      const accInfo = await lcd.auth.accountInfo(serverAdd);
      const recipient = userAddress;
      const transferMsg = new MsgExecuteContract(serverAdd, cw20_contract, {
        transfer: {
          recipient,
          amount: String(amount) + "000000",
        },
      });
      const pubkey = accInfo.getPublicKey() as SimplePublicKey;

      const tx_api = new TxAPI(lcd);
      const simul_fee = await tx_api.estimateFee(
        [{ sequenceNumber: accInfo.getSequenceNumber(), publicKey: pubkey }],
        {
          msgs: [transferMsg],
          gasAdjustment: 1.5,
        }
      );

      setEstimateFee(
        new BigNumber(simul_fee.amount.toString().replace("axpla", ""))
          .dividedBy(10 ** 18)
          .toFormat({
            decimalSeparator: ".",
            groupSeparator: ",",
            groupSize: 3,
          })
      );
    } catch (e) {
      // console.log(e);
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
      setEstimateFee(null);
      reset();
    }
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center px-[20px] pt-[77px] pb-[79px] bg-[#EAF8FF] h-full max-w-[780px]"
      >
        <img
          src="/img/tool/Main/Convert/converttitle.svg"
          alt="converttitle"
          width="333px"
          height="60px"
        />
        <img
          className="mt-[15px] mb-[4px]"
          src="/img/tool/Main/starlight.svg"
          alt="starlight"
          width="28px"
          height="28px"
        />
        <div className="text-center font-normal text-[20px] leading-[28px]">
          Experience a special exchange system <br />
          between tokens and in-game items.
          <br />
          Furthermore, acquire tokens needed to mint Paddle NFT!
        </div>
        <div>

        <div className="mt-[27px] flex items-center justify-center gap-[20px] relative w-full">
          <div className="aspect-square border-[1px] border-solid flex flex-col">
            <div className="py-[13px] text-center text-white font-semibold text-[24px] bg-[#00B2FC] leading-[24px]">
              {dia2tkn ? "DIAMOND" : "ACADEMY-TKN"}
            </div>
            <div className="bg-white flex flex-1 flex-col items-center">
              <ConvertInput
                values={values}
                setValue={setValue}
                getTxFee={getTxFee}
              />
              {dia2tkn ? (
                <img
                  className="w-[70px]"
                  src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-diamond.svg"
                  alt="academy-diamond"
                  width="70px"
                  height="68px"
                />
              ) : (
                <img
                  className="w-[70px]"
                  src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-token.svg"
                  alt="academy-token"
                  width="70px"
                  height="68px"
                />
              )}
            </div>
          </div>
          <div className="aspect-square border-[1px] border-solid flex flex-col">
            <div className="py-[13px] text-center text-white font-semibold text-[24px] bg-[#00B2FC] leading-[24px]">
              {!dia2tkn ? "DIAMOND" : "ACADEMY-TKN"}
            </div>
            <div className="bg-white flex flex-1 flex-col items-center">
              <ConvertInput
                values={values}
                setValue={setValue}
                getTxFee={getTxFee}
              />
              {!dia2tkn ? (
                <img
                  className="w-[70px]"
                  src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-diamond.svg"
                  alt="academy-diamond"
                  width="70px"
                  height="68px"
                />
              ) : (
                <img
                  className="w-[70px]"
                  src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-token.svg"
                  alt="academy-token"
                  width="70px"
                  height="68px"
                />
              )}
            </div>
          </div>
          <div className="absolute left-[270px] h-full flex justify-center items-center">
            <div
              onClick={() => setDia2tkn(!dia2tkn)}
              className={clsx(
                "hover:cursor-pointer",
                styles.convertChangeButton
              )}
            />
          </div>
        </div>
        </div>

        <div className="mt-[18px] bg-[#00B2FC33] w-full max-w-[580px] px-[20px] py-[24px]">
          <div className="flex justify-between border-solid border-0 border-b-[1px]">
            <span className="font-bold text-[16px] leading-[19px] text-[#3F3F3F]">
              Estimated Fee
            </span>
            {estimateFee === "-" || !estimateFee ? (
              <span className="font-medium text-[16px] leading-[19px] text-black">
                -
              </span>
            ) : (
              <span className="font-medium text-[16px] leading-[19px] text-black">
                {estimateFee}
                <span className="font-extrabold"> XPLA</span>
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={!estimateFee || estimateFee === "-"}
          className={clsx(
            "border-0 relative mt-[37px] px-[133px] py-[17px] flex items-center text-white font-semibold text-[24px] leading-[30px] rounded-full",
            !estimateFee
              ? "bg-[#3F3F3F]"
              : estimateFee === "-"
              ? styles.convertButtonOff
              : styles.convertButtonOn,
            estimateFee && estimateFee !== "-" && "hover:cursor-pointer"
          )}
        >
          CONVERT &nbsp;
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
              <TxSucceedModal
                amount={values.amount.toString() || ""}
                estimateFee={estimateFee || ""}
                txhash={txhash || ""}
                handleModalClose={handleModalClose}
                dia2tkn={dia2tkn}
              />
          )}

          {modalOpen === TXMODALTYPE.TXFAIL && (
              <TxFailModal
                title={"CONVERT"}
                requestError={requestError || "Unknown Error"}
                estimateFee={estimateFee || ""}
                txhash={txhash || ""}
                handleModalClose={handleModalClose}
              />
          )}

          {modalOpen === TXMODALTYPE.NOWINCONFIRMATION && (
              <NowInConfirmationModal />
          )}

          {modalOpen === TXMODALTYPE.TXINPROGRESS && (
              <TxInProgressModal />
          )}
            </ModalWrap>

      </Modal>
    </>
  );
};

export default memo(Convert);
