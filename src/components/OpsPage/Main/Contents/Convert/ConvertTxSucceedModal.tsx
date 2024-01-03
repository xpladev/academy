import clsx from "clsx";
import React from "react";
import styles from "../../../index.module.css";
import getNumberFormat from "@site/src/util/getNumberFormat";

export default function ConvertTxSucceedModal({
  amount,
  estimateFee,
  txhash,
  handleModalClose,
  dia2tkn,
}: {
  amount: string;
  estimateFee: string;
  txhash: string;
  handleModalClose: () => void;
  dia2tkn: boolean;
}) {
  return (
    <>
      <img
        src="/img/opspage/Login/successEmoji.svg"
        alt="successEmoji"
        width="34px"
        height="34px"
      />
      <span className="mt-[10px] text-black font-semibold text-[30px] leading-[35px]">
        CONVERT&nbsp;
        <span className="text-[#04DD33]">Succeed!</span>
      </span>
      <div className="w-full mt-[13px] mb-[20px] border-[1px] border-solid bg-[#EAF8FF] pt-[15px] pb-[19px] px-[10px] flex flex-col gap-[15px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            {dia2tkn ? (
              <img
                className="w-[28px]"
                src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-diamond.svg"
              />
            ) : (
              <img
                className="w-[28px]"
                src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-token.svg"
              />
            )}

            <span className="font-normal leading-[16px] text-[16px]">
              {getNumberFormat(amount)}
            </span>
          </div>
          <img className="w-[28px]" src="/img/opspage/Main/txsucceedarrow.svg" alt="txsucceedarrow"/>
          <div className="flex items-center gap-[6px]">
            {!dia2tkn ? (
              <img
                className="w-[28px]"
                src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-diamond.svg"
              />
            ) : (
              <img
                className="w-[28px]"
                src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-token.svg"
              />
            )}
            <span className="font-normal leading-[16px] text-[16px]">
              {getNumberFormat(amount)}
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