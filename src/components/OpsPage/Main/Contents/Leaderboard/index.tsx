import React, { memo, useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import CallMadeOutlinedIcon from "@mui/icons-material/CallMadeOutlined";
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
import LBTxSucceedModal from "./LBTxSucceedModal";
import TxFailModal from "../Modal/TxFailModal";
import { timeout } from "@site/src/util/timeout";
import useUserAddress from "@site/src/hooks/Zustand/useUserAddress";
import useUserInfo from "@site/src/hooks/useQuery/useUserInfo";

import _ from "lodash";
import getNumberFormat from "@site/src/util/getNumberFormat";
import Ranking from "./Ranking";
import useRankingInfo from "../../../../../hooks/useQuery/useRankingInfo";
import ModalWrap from "../Modal/ModalWrap";
import useRecordUnsigned from "../../../../../hooks/useMutation/useRecordUnsigned";
import useRecordSigned from "../../../../../hooks/useMutation/useRecordSigned";
import { useQueryClient } from "@tanstack/react-query";
import TxInProgressModal from "../Modal/TxInProgressModal";
import NowInConfirmationModal from "../Modal/NowInConfirmationModal";

const chainID = "cube_47-5";
const URL = "https://cube-lcd.xpla.dev";
const lcd = new LCDClient({ chainID, URL });

const TXMODALTYPE = {
  NOTOPEN: 0,
  NOWINCONFIRMATION: 1,
  TXINPROGRESS: 2,
  TXSUCCESS: 3,
  TXFAIL: 4,
} as const;
type TXMODALTYPE = (typeof TXMODALTYPE)[keyof typeof TXMODALTYPE];

export interface RANKRESPONSE {
  returnCode: number;
  returnMsg: string;
  id: string;
  score: number;
  date: string;
  ranking: RANKINFO[];
  myRanking: RANKINFO[];
  isRecoding: number;
}

export interface RANKINFO {
  chain_ranking: number;
  id: string;
  chain_high_score: number;
}

const Leaderboard = () => {
  const { data: rankinglist } = useRankingInfo();

  const [modalOpen, setModalOpen] = useState<TXMODALTYPE>(TXMODALTYPE.NOTOPEN);

  const [requestError, setRequestError] = useState<string | null>(null);
  const [txhash, setTxhash] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [estimateFee, setEstimateFee] = useState<string | null>(null);

  const connectedWallet = useConnectedWallet();

  const { userAddress } = useUserAddress();
  const { data: userInfo } = useUserInfo();

  const { mutateAsync: recordUnsigned } = useRecordUnsigned();
  const { mutateAsync: recordSigned } = useRecordSigned();
  const queryClient = useQueryClient();

  const onSubmit = async () => {
    try {
      if (!connectedWallet) {
        throw new Error("602");
      }
      setLoading(true);
      setModalOpen(TXMODALTYPE.NOWINCONFIRMATION);

      const { fee, tid, unsignedTx } = await recordUnsigned();

      const decodedTx = Tx.fromBuffer(Buffer.from(unsignedTx, "base64"));

      setEstimateFee(
        new BigNumber(fee.replace("axpla", "")).dividedBy(10 ** 18).toFormat({
          decimalSeparator: ".",
          groupSeparator: ",",
          groupSize: 3,
        })
      );

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
      const { txhash: resTxhash } = await recordSigned({
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
        setLoading(false);
        setModalOpen(TXMODALTYPE.TXSUCCESS);

        await queryClient.invalidateQueries({
          queryKey: ["useUserInfo", userAddress],
        });
        await queryClient.invalidateQueries({
          queryKey: ["useRankingInfo", userAddress],
        });
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

  const handleModalClose = async () => {
    if (
      modalOpen !== TXMODALTYPE.NOWINCONFIRMATION &&
      modalOpen !== TXMODALTYPE.TXINPROGRESS
    ) {
      setModalOpen(TXMODALTYPE.NOTOPEN);
      setRequestError(null);
      setTxhash(null);
      await queryClient.invalidateQueries({
        queryKey: ["useUserInfo", userAddress],
      });
      await queryClient.invalidateQueries({
        queryKey: ["useRankingInfo", userAddress],
      });
    }
  };

  const getTxFee = useCallback(async () => {
    try {
      const serverAdd = "xpla19hynun4fs33h3kd0lgtsuxhxatqzwseq7t9658";
      const record_contract =
        "xpla1nypl759f3h3s3xuelpv88t86kj6qmnd4qyjgnkl9zehgj69zvgms9n30px";
      const accInfo = await lcd.auth.accountInfo(serverAdd);
      const transferMsg = new MsgExecuteContract(serverAdd, record_contract, {
        save_data: {
          user: userAddress,
          id: rankinglist?.id || "",
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
  }, [lcd, rankinglist, userAddress, setEstimateFee]);

  useEffect(() => {
    getTxFee();
  }, [rankinglist]);

  return (
    <>
      <div className="flex flex-col items-center px-[18px] pt-[77px] pb-[20px] bg-[#EAF8FF] h-full">
        <img
          src="/img/opspage/Main/Leaderboard/leaderboardtitle.svg"
          alt="leaderboardtitle"
          width="520px"
          height="60px"
        />
        <img
          className="mt-[15px] mb-[4px]"
          src="/img/opspage/Main/starlight.svg"
          alt="starlight"
          width="28px"
          height="28px"
        />
        <div className="text-center font-normal text-[20px] leading-[24px]">
          'MY BEST SCORE' lets you record
          <br />
          your top game score in INFINITE MODE!
          <br />
          Compare rankings and scores through the blockchain.
        </div>
        <div className="w-full h-full flex gap-[20px] mt-[30px]">
          <div className="w-full h-full flex flex-1 flex-col border-[1px] border-solid bg-white">
            <div className="w-full py-[10px] text-center text-white font-semibold text-[24px] bg-[#00B2FC] leading-[24px]">
              RANKING
            </div>
            <div className="flex flex-col h-full justify-between px-[20px] py-[10px]">
              <div className="font-medium text-[10px] text-[#00B2FC] leading-[13px] text-center">
                RANKING only shows the scores recoreded through '
                <span className="text-[#FF640C]">MY BEST SCORE</span>
                '.
                <br />
                Check the scores of the top 10 in the ecosystem
                <br />
                and strive to surpass their scores!
              </div>
              <div className="border-solid border-0 border-b-[1px] my-[10px] border-[#00B2FC]" />
              {rankinglist?.returnMsg === "success" && (
                <Ranking rankinglist={rankinglist} />
              )}
              <div className="border-solid border-0 border-b-[1px] my-[10px] border-[#00B2FC]" />
              {rankinglist?.returnMsg === "success" &&
              rankinglist.myRanking.length > 0 &&
              rankinglist.myRanking[0].chain_high_score !== -1 ? (
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
                Check the best scores you've achieved in INFINITE MODE.
                <br />
                Hit [RECORD] to mark your score on blockchain!
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
                        {(rankinglist?.returnMsg === "success" &&
                          rankinglist?.score?.toString()) ||
                          "No score Yet"}
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
                        {(rankinglist?.returnMsg === "success" &&
                          rankinglist?.date?.split("-").join(":")) ||
                          "-"}
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
                {rankinglist?.returnMsg === "success" &&
                  rankinglist?.score?.toString() === "0" && (
                    <div className="absolute w-full h-full flex flex-col justify-center items-center bg-[#000000CC]">
                      <span className="text-white font-normal text-[24px] leading-[26px]">
                        No
                      </span>
                      <span className="text-[#FF640C] font-bold text-[28px] leading-[26px]">
                        "DATA"
                      </span>
                    </div>
                  )}
                {rankinglist?.isRecoding === 1 && (
                  <div className="absolute w-full h-full flex flex-col justify-center items-center bg-[#000000CC]">
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
                disabled={
                  rankinglist?.isRecoding === 1 ||
                  (rankinglist?.returnMsg === "success" &&
                    rankinglist?.score?.toString() === "0")
                }
                className={clsx(
                  "border-0 relative justify-center py-[17px] flex items-center text-white font-semibold text-[24px] leading-[30px] rounded-full",
                  (rankinglist?.isRecoding === 1 ||  (rankinglist?.returnMsg === "success" &&
                  rankinglist?.score?.toString() === "0"))
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
      <Modal
        open={modalOpen !== TXMODALTYPE.NOTOPEN}
        onClose={handleModalClose}
      >
        <>
          {modalOpen === TXMODALTYPE.TXSUCCESS && (
            <ModalWrap>
              <LBTxSucceedModal
                id={rankinglist?.id || ""}
                score={rankinglist?.score?.toString() || ""}
                date={rankinglist?.date || ""}
                estimateFee={estimateFee || ""}
                txhash={txhash || ""}
                handleModalClose={handleModalClose}
              />
            </ModalWrap>
          )}

          {modalOpen === TXMODALTYPE.TXFAIL && (
            <ModalWrap>
              <TxFailModal
                title={"LEADERBOARD"}
                requestError={requestError || ""}
                estimateFee={estimateFee || ""}
                txhash={txhash || ""}
                handleModalClose={handleModalClose}
              />
            </ModalWrap>
          )}
          {modalOpen === TXMODALTYPE.NOWINCONFIRMATION && (
            <ModalWrap>
              <NowInConfirmationModal />
            </ModalWrap>
          )}

          {modalOpen === TXMODALTYPE.TXINPROGRESS && (
            <ModalWrap>
              <TxInProgressModal />
            </ModalWrap>
          )}
        </>
      </Modal>
    </>
  );
};

export default memo(Leaderboard);
