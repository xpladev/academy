import BigNumber from "bignumber.js";
import clsx from "clsx";
import React from "react";
import styles from "../../../index.module.css";
import getNumberFormat from "@site/src/util/getNumberFormat";

export default function LBTxSucceedModal({
  id,
  score,
  date,
  estimateFee,
  txhash,
  handleModalClose,
}: {
  id: string;
  score: string;
  date: string;
  estimateFee: string;
  txhash: string;
  handleModalClose: () => void;
}) {
  return (
    <>
      <img src="/img/tool/Login/successEmoji.svg" />
      <span className="mt-[10px] text-black font-semibold text-[30px] leading-[35px]">
        RECORD&nbsp;
        <span className="text-[#04DD33]">Succeed!</span>
      </span>
      <div className="w-full mt-[13px] mb-[20px] border-[1px] border-solid bg-[#EAF8FF] pt-[15px] pb-[19px] px-[10px] flex flex-col gap-[15px]">
        <div className="flex items-start justify-between">
          <span className="font-semibold leading-[18px] text-[18px]">{id}</span>

          <div className="grid grid-cols-2 items-center gap-y-[3px] gap-x-[11px]">
            <div className="flex items-center justify-end">
              <div className="flex justify-center items-center rounded-full bg-[#00B2FC] font-medium leading-[12px] text-[12px] w-[16px] h-[16px] text-white">
                S
              </div>
            </div>
            <span className="font-semibold text-[14px] leading-[16px] text-right mb-[1px]">
              {getNumberFormat(score)}
            </span>
            <div className="flex items-center justify-end">
              <div className="flex justify-center items-center rounded-full bg-[#00B2FC] font-medium leading-[12px] text-[12px] w-[16px] h-[16px] text-white">
                D
              </div>
            </div>
            <span className="font-normal text-[11px] leading-[13px]">
              {date.split("-").join(":") || "-"}
            </span>
          </div>
        </div>
        <div className="w-full border-solid border-0 border-t-[1px]" />
        <div className="flex flex-col gap-[5px] font-semibold text-[14px] leading-[17px]">
          <div className="flex">
            <span className="min-w-[63px] text-[#3F3F3F] ">TX Fee</span>
            <span className="text-end w-full">
              <span className="text-[14px]">
                {estimateFee.split(".")[0]}.
                <span className="text-[11px]">{estimateFee.split(".")[1]}</span>
              </span>
              <span className="font-bold"> XPLA</span>
            </span>
          </div>
          <div className="flex shrink-0">
            <span className="min-w-[63px] text-[#3F3F3F] ">TX HASH</span>
            <span className="text-end w-full">
              {" "}
              <a
                href={`https://explorer.xpla.io/testnet/tx/${txhash}`}
                target="_blank"
                className="overflow-hidden whitespace-nowrap text-ellipsis w-full max-w-[210px] inline-block"
              >
                {txhash}
              </a>
            </span>
          </div>
        </div>
      </div>
      <div
        onClick={handleModalClose}
        className={clsx(
          styles.smallShadowButton,
          "text-[20px] leading-[24px] bg-[#00ABFF] font-medium text-white py-[10px] w-full text-center mx-[50px]"
        )}
      >
        OK
      </div>
    </>
  );
}
