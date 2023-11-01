import React, { useEffect, useState } from "react";
import clsx from "clsx";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
import { useForm } from "react-hook-form";
import CircularProgress from "@mui/material/CircularProgress";
import { useConnectedWallet, useWallet } from "@xpla/wallet-provider";
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
import LBTxSucceedModal from "./LBTxSucceedModal";
import TxFailModal from "../TxFailModal";
import { timeout } from "@site/src/util/timeout";
import useUserInfo from "@site/src/hooks/Zustand/useUserInfo";

import _ from "lodash";
import getNumberFormat from "@site/src/util/getNumberFormat";
import Ranking from "./Ranking";

const chainID = "cube_47-5";
const URL = "https://cube-lcd.xpla.dev";
const lcd = new LCDClient({ chainID, URL });

export interface RANKRESPONSE {
  returnCode: number;
  returnMsg: string;
  id: string;
  score: number;
  date: string; // Date 형식
  ranking: RANKINFO[];
  myRanking: RANKINFO[];
  isRecoding: number;
}

export interface RANKINFO {
  chain_ranking: number;
  id: string;
  chain_high_score: number;
}

export default function Leaderboard() {
  const { userInfo, setUserInfo } = useUserInfo();

  const [rankinglist, setRankinglist] = useState<RANKRESPONSE | null>();

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [requestResult, setRequestResult] = useState<string | null>(null);
  const [requestError, setRequestError] = useState<string | null>(null);
  const [txhash, setTxhash] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [estimateFee, setEstimateFee] = useState<string | null>(null);

  const connectedWallet = useConnectedWallet();

  const { wallets } = useWallet();
  const userAddress = wallets[0].xplaAddress;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVERURL}wallet/wallet-ranking-info`,
        {
          wallet: userAddress,
        }
      );
      return res.data;
    };

    fetchData().then((res) => {
      if (res.returnMsg === "success") {
        setRankinglist(res);
      }
    });
  }, []);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const addressinfo = await lcd.auth.accountInfo(userAddress);
      const pubkey = addressinfo.getPublicKey() as SimplePublicKey;

      const unsignedPost = {
        wallet: userAddress,
        userPubKey: pubkey.key,
        userSeq: addressinfo.getSequenceNumber(),
      };

      const unsignedUrl = `${process.env.REACT_APP_SERVERURL}wallet/wallet-score-record-unsigned`;

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

      const walletUrl = `${process.env.REACT_APP_SERVERURL}wallet/wallet-score-record`;
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
      const txUrl = `${process.env.REACT_APP_SERVERURL}wallet/txinfo?txhash=${txhash}`;
      const txRes = await axios.get(txUrl);
      if (txRes.data.returnCode === "500") {
        setTimeout(waitResult, 1000, txhash);
      } else if (txRes.data.returnCode === "0") {
        setLoading(false);
        setModalOpen(true);
        setRequestResult(txRes.data.returnMsg);
        if (txRes.data.returnMsg === "success") {
          await getTxFee();
          setTxhash(txhash);
          setUserInfo({
            diamond: userInfo.diamond,
            id: userInfo.id,
            clearStage: userInfo.clearStage,

            xplaBalance: new BigNumber(userInfo.xplaBalance)
              .minus(estimateFee)
              .toFixed(),
            tokenBalance: userInfo.tokenBalance,
          });

          // TODO :다시 정보 가져오기
          const fetchData = async () => {
            const res = await axios.post(
              `${process.env.REACT_APP_SERVERURL}wallet/wallet-ranking-info`,
              {
                wallet: userAddress,
              }
            );
            return res.data;
          };

          fetchData().then((res) => {
            if (res.returnMsg === "success") {
              setRankinglist(res);
            }
          });
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

  const handleModalClose = () => {
    setModalOpen(false);
    setRequestError(null);
    setRequestResult(null);
  };

  const getTxFee = async () => {
    try {
      const serverAdd = "xpla19hynun4fs33h3kd0lgtsuxhxatqzwseq7t9658";
      const record_contract =
        "xpla1nypl759f3h3s3xuelpv88t86kj6qmnd4qyjgnkl9zehgj69zvgms9n30px";
      const accInfo = await lcd.auth.accountInfo(serverAdd);
      const transferMsg = new MsgExecuteContract(serverAdd, record_contract, {
        save_data: {
          id: rankinglist?.id || "",
          user: userAddress,
          high_score: rankinglist?.score || 0,
          record_time: Number(
            new Date(rankinglist?.date || "")
              [Symbol.toPrimitive]("number")
              .toString()
              .slice(0, 10)
          ),
        },
      });

      const pubkey = accInfo.getPublicKey() as SimplePublicKey;

      const tx_api = new TxAPI(lcd);
      const simul_fee = await tx_api.estimateFee(
        [{ sequenceNumber: accInfo.getSequenceNumber(), publicKey: pubkey }],
        {
          msgs: [transferMsg],
          gasAdjustment: 1.4,
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

  useEffect(() => {
    getTxFee();
  }, [rankinglist]);

  return (
    <>
      <div
        className="flex flex-col items-center px-[18px] pt-[77px] pb-[20px] bg-[#EAF8FF] h-full"
      >
        <img src="/img/tool/Main/leaderboardtitle.svg" />
        <img
          className="mt-[15px] mb-[4px]"
          src="/img/tool/Main/starlight.svg"
        />
        <div className="text-center font-normal text-[20px] leading-[24px]">
          Check and record your best game score through 'MY BEST SCORE'!
          <br /> The recorded score can be compared with scores and <br />
          rankings from other users.
        </div>
        <div className="w-full h-full flex gap-[20px] mt-[30px]">
          <div className="w-full h-full flex flex-1 flex-col border-[1px] border-solid bg-white">
            <div className="w-full py-[10px] text-center text-white font-semibold text-[24px] bg-[#00B2FC] leading-[24px]">
              RANKING
            </div>
            <div className="flex flex-col h-full justify-between px-[20px] py-[10px]">
              <div className="font-medium text-[10px] text-[#00B2FC] leading-[13px] text-center">
                RANKING only shows the scores recoreded through '
                <span className="font-semibold text-[#FF640C]">
                  MY BEST SCORE
                </span>
                '.
                <br />
                Check the scores of the top 10 in the ecosystem
                <br />
                and strive to surpass their scores!
              </div>
              <div className="border-solid border-0 border-b-[1px] my-[10px] border-[#00B2FC]" />
              {rankinglist && <Ranking rankinglist={rankinglist} />}
              <div className="border-solid border-0 border-b-[1px] my-[10px] border-[#00B2FC]" />
              {rankinglist && rankinglist.myRanking.length > 0 ? (
                <div className="flex gap-[7px] h-[26px]">
                  <div
                    className={clsx(
                      "w-[26px] flex justify-center items-center text-[12px] leading-[14px] font-bold",
                      rankinglist.myRanking[0].chain_ranking === 1
                        ? "bg-[#FF3C24]"
                        : rankinglist.myRanking[0].chain_ranking === 2
                        ? "bg-[#FFE200]"
                        : rankinglist.myRanking[0].chain_ranking === 3
                        ? "bg-[#979797]"
                        : "bg-[#00B2FC]"
                    )}
                  >
                    {rankinglist.myRanking[0].chain_ranking || ""}
                  </div>
                  <div
                    className={clsx(
                      "flex flex-1 p-[6px] itmes-center justify-between leading-[12px] text-[10px] font-bold",
                      rankinglist.myRanking[0].chain_ranking === 1
                        ? "bg-[#FFDDD9]"
                        : rankinglist.myRanking[0].chain_ranking === 2
                        ? "bg-[#FFFACF]"
                        : rankinglist.myRanking[0].chain_ranking === 3
                        ? "bg-[#F5F4F4]"
                        : "bg-[#00B2FC]"
                    )}
                  >
                    <span>{rankinglist.myRanking[0].id || ""}</span>
                    <span>
                      {getNumberFormat(
                        rankinglist.myRanking[0].chain_high_score || "0"
                      )}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex gap-[7px] h-[26px]">
                  <div className="w-[26px] flex justify-center items-center text-[12px] leading-[14px] font-bold bg-[#F5F4F4] border-[2px] border-solid border-[#FF640C]">
                    -
                  </div>
                  <div className="flex flex-1 bg-[#F5F4F4] p-[6px] itmes-center text-start leading-[10px] text-[8px] font-semibold text-[#3F3F3F] border-[2px] border-solid border-[#FF640C]">
                    <span>
                      You haven't RECORDED your score using 'MY BEST SCORE'.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full h-full flex flex-1 flex-col border-[1px] border-solid bg-white">
            <div className="w-full py-[10px] text-center text-white font-semibold text-[24px] bg-[#FF640C] leading-[24px]">
              MY BEST SCORE
            </div>
            <div className="flex flex-col h-full px-[20px] py-[16px]">
              <div className="leading-[13px] text-[#FF640C] text-[10px] font-medium text-center">
                '<span className="font-semibold">MY BEST SCORE</span>' shows
                your highest score. Use the RECORD button to immortalize your
                score on the blockchain!
              </div>

              <div className="border-solid border-0 border-b-[1px] border-[#FF640C] mt-[17px]" />
              <div className="flex flex-1 flex-col relative justify-between mb-[19px] gap-[17px]">
                <div className="flex flex-col justify-between items-center mt-[22px]">
                  <div>
                    <div className="flex flex-col gap-[8px] items-center">
                      <span className="font-bold leading-[19px] text-[16px] text-[#FF640C]">
                        User ID
                      </span>
                      <span className="font-semibold text-[26px] leading-[31px]">
                        {userInfo?.id || ""}
                      </span>
                    </div>
                  </div>
                  <span>+</span>
                  <div>
                    <div className="flex flex-col gap-[8px] items-center">
                      <span className="font-bold leading-[19px] text-[16px] text-[#FF640C]">
                        SCORE
                      </span>
                      <span className="font-semibold text-[26px] leading-[31px]">
                        {rankinglist?.score?.toString() || "No score Yet"}
                      </span>
                    </div>
                  </div>
                  <span>+</span>
                  <div>
                    <div className="flex flex-col gap-[8px] items-center">
                      <span className="font-bold leading-[19px] text-[16px] text-[#FF640C]">
                        DATE
                      </span>
                      <span className="font-normal text-[20px] leading-[35px]">
                        {rankinglist?.date?.split("-").join(":") || "-"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#00B2FC33] p-[12px]">
                  <div className="flex justify-between border-solid border-0 border-b-[1px] ">
                    <span className="font-medium text-[16px] leading-[19px] text-[#3F3F3F]">
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
                {rankinglist?.isRecoding === 1 && (
                  <div className="absolute w-full h-full flex flex-col justify-center items-center opacity-80 bg-black">
                    <span className="text-white font-normal text-[24px] leading-[26px]">
                      ALREADY
                    </span>
                    <span className="text-[#FF640C] font-bold text-[28px] leading-[26px]">
                      "RECORDED"
                    </span>
                  </div>
                )}
              </div>
              <button
                type="submit"
                onClick={onSubmit}
                disabled={rankinglist?.isRecoding === 1}
                className={clsx(
                  "border-0 relative justify-center py-[17px] flex items-center text-white font-semibold text-[24px] leading-[30px] rounded-full",
                  rankinglist?.isRecoding === 1
                    ? "bg-[#3F3F3F]"
                    : "bg-[#FF640C] hover:cursor-pointer"
                )}
              >
                RECORD &nbsp;
                {loading && (
                  <CircularProgress size={18} style={{ color: "white" }} />
                )}
                <div className="absolute top-[7px] right-[7px] rounded-full bg-white aspect-square w-[51px] flex justify-center items-center">
                  <CallMadeOutlinedIcon
                    style={{ fill: "#3F3F3F", fontSize: 30 }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
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
            <LBTxSucceedModal
              id={rankinglist?.id || ""}
              score={rankinglist?.score?.toString() || ""}
              date={rankinglist?.date || ""}
              estimateFee={estimateFee || ""}
              txhash={txhash || ""}
              handleModalClose={handleModalClose}
            />
          )}

          {requestError && (
            <TxFailModal
              title={"LEADERBOARD"}
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
