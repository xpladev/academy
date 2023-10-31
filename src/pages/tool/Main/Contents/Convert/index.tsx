import React, { useState } from "react";
import styles from "../../../index.module.css";
import clsx from "clsx";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import { UseFormSetValue, useForm } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress";
import {
  useConnectedWallet,
  useWallet,
} from "@xpla/wallet-provider";
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
import TxFailModal from "../TxFailModal";
import { timeout } from "@site/src/util/timeout";
import { USERINFO } from "../../..";
import getNumberFormat from "@site/src/util/getNumberFormat";

interface CONVERTFORM {
  amount: number | string;
}

const chainID = "cube_47-5";
const URL = "https://cube-lcd.xpla.dev";
const lcd = new LCDClient({ chainID, URL });

export default function Convert({
  userInfo,
  setUserInfo,
}: {
  userInfo: USERINFO;
  setUserInfo: React.Dispatch<React.SetStateAction<USERINFO>>;
}) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [dia2tkn, setDia2tkn] = useState<boolean>(true);

  const [requestResult, setRequestResult] = useState<string | null>(null);
  const [requestError, setRequestError] = useState<string | null>(null);
  const [txhash, setTxhash] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [estimateFee, setEstimateFee] = useState<string | null>(null);

  const form = useForm<CONVERTFORM>({ mode: "onChange" });
  const connectedWallet = useConnectedWallet();

  const { wallets } = useWallet();

  const { watch, setValue, handleSubmit } = form;
  const { ...values } = watch();

  const walletServerAddr = "https://gw-qa-gcl.c2xstation.net:40202/";
  const userAddress = wallets[0].xplaAddress;

  const onSubmit = async ({ ...submitValues }: CONVERTFORM) => {
    try {
      setLoading(true);
      const { amount } = submitValues;
      const addressinfo = await lcd.auth.accountInfo(userAddress);
      const pubkey = addressinfo.getPublicKey() as SimplePublicKey;

      const unsignedPost = {
        wallet: userAddress,
        amount,
        userPubKey: pubkey.key,
        userSeq: addressinfo.getSequenceNumber(),
      };

      const unsignedUrl = dia2tkn
        ? `${walletServerAddr}wallet/wallet-gamecurrency-to-coin-unsigned`
        : `${walletServerAddr}wallet/wallet-coin-to-gamecurrency-unsigned`;
      const unsignedRes = await axios.post(unsignedUrl, unsignedPost);
      const unsignedTx = unsignedRes.data.unsignedTx;

      if (unsignedTx === undefined) {
        throw new Error(unsignedRes.data.returnMsg);
      }
      const decodedTx = Tx.fromBuffer(Buffer.from(unsignedTx, "base64"));

      const { result: signedTx, success } = await timeout(
        connectedWallet.sign({
          msgs: decodedTx.body.messages,
          fee: decodedTx.auth_info.fee,
          signMode: SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
        }),
        20000,
        "Vault Connection time Expired or Vault Sign Error."
      );

      if (!success) {
        throw new Error("Vault Sign Error");
      }

      const userSignedTx = Buffer.from(signedTx.toBytes()).toString("base64");

      const convertPost: any = {
        wallet: userAddress,
        tid: unsignedRes.data.tid,
        userTx: userSignedTx,
      };

      const walletUrl = dia2tkn
        ? `${walletServerAddr}wallet/wallet-gamecurrency-to-coin`
        : `${walletServerAddr}wallet/wallet-coin-to-gamecurrency`;
      let res = await axios.post(walletUrl, convertPost);

      setTimeout(waitResult, 1000, res.data.txhash);
    } catch (error) {
      setLoading(false);
      setModalOpen(true);
      setRequestError(
        `${error instanceof Error ? error.message : String(error)}`
      );
    }
  };
  // 블록에 최종 저장된 기록을 조회한다.
  async function waitResult(txhash) {
    try {
      const txUrl = `${walletServerAddr}wallet/txinfo?txhash=${txhash}`;
      const txRes = await axios.get(txUrl);
      if (txRes.data.returnCode === "500") {
        setTimeout(waitResult, 1000, txhash);
      } else if (txRes.data.returnCode === "0") {
        setLoading(false);
        setModalOpen(true);
        setRequestResult(txRes.data.returnMsg);
        if (txRes.data.returnMsg === "success") {
          setTxhash(txhash);
          if (dia2tkn) {
            setUserInfo({
              diamond: userInfo.diamond - Number(values.amount),
              id: userInfo.id,
              clearStage: userInfo.clearStage,
              xplaBalance: new BigNumber(userInfo.xplaBalance)
                .minus(estimateFee)
                .toFixed(),
              tokenBalance: BigNumber.sum(
                userInfo.tokenBalance,
                Number(values.amount)
              ).toFixed(),
            });
          } else {
            setUserInfo({
              diamond: userInfo.diamond + Number(values.amount),
              id: userInfo.id,
              clearStage: userInfo.clearStage,
              xplaBalance: new BigNumber(userInfo.xplaBalance)
                .minus(estimateFee)
                .toFixed(),
              tokenBalance: new BigNumber(userInfo.tokenBalance)
                .minus(Number(values.amount))
                .toFixed(),
            });
          }
        }
      }
    } catch (error) {
      setLoading(false);
      setModalOpen(true);
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
      const recipient = wallets[0].xplaAddress;
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
      console.log(e);
      setEstimateFee("-");
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setRequestError(null);
    setRequestResult(null);
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center px-[100px] pt-[77px] pb-[79px] bg-[#EAF8FF] h-full max-w-[780px]"
      >
        <img src="/img/tool/Main/converttitle.svg" />
        <img
          className="mt-[15px] mb-[4px]"
          src="/img/tool/Main/starlight.svg"
        />
        <div className="text-center font-normal text-[20px] leading-[28px]">
          Experience a special exchange system <br />
          between tokens and in-game items.
          <br />
          Furthermore, acquire tokens needed to mint Paddle NFT!
        </div>
        <div className="mt-[27px] flex gap-[20px] relative w-full">
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
                />
              ) : (
                <img
                  className="w-[70px]"
                  src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-token.svg"
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
                />
              ) : (
                <img
                  className="w-[70px]"
                  src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-token.svg"
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
      <Modal open={modalOpen} onClose={handleModalClose}>
        <div
          className="pt-[40px] pb-[50px] px-[52px]"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 380,
            backgroundColor: "white",
            outlineStyle: "none",
            border: "1px solid #000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {requestResult && (
            <TxSucceedModal
              amount={values.amount.toString() || ""}
              estimateFee={estimateFee || ""}
              txhash={txhash}
              handleModalClose={handleModalClose}
              dia2tkn={dia2tkn}
            />
          )}

          {requestError && (
            <TxFailModal
              title={"CONVERT"}
              requestError={requestError}
              estimateFee={estimateFee || ""}
              txhash={txhash}
              handleModalClose={handleModalClose}
            />
          )}
        </div>
      </Modal>
    </>
  );
}

const ConvertInput = ({
  values,
  setValue,
  getTxFee,
}: {
  values: CONVERTFORM;
  setValue: UseFormSetValue<CONVERTFORM>;
  getTxFee: (amount: number) => Promise<void>;
}) => {
  return (
    <>
      <input
        placeholder="0"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        value={
          values.amount === undefined || values.amount === ""
            ? ""
            : getNumberFormat(values.amount?.toString() || "")
        }
        onChange={async (e) => {
          setValue("amount", Number(e.target.value.replace(",", "")));
          getTxFee(Number(e.target.value.replace(",", "")));
        }}
        maxLength={7}
        className={clsx(
          "mt-[44px] leading-[30px] font-normal text-center border-0 focus:outline-0 text-[30px] max-w-[280px]",
          styles.gameFont
        )}
      />
      <span className="font-normal text-[14px] leading-[14px] text-[#00B2FC] mt-[15px] mb-[22px]">
        * No decimal point allowed.
      </span>
    </>
  );
};
