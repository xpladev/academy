import clsx from "clsx";
import React from "react";
import styles from "../../../index.module.css";

export default function TxFailModal({
  title,
  requestError,
  estimateFee,
  txhash,
  handleModalClose,
}: {
  title: string;
  requestError: string;
  estimateFee: string;
  txhash: string;
  handleModalClose: () => void;
}) {
  return (
    <>
      <img
        src="/img/tool/Login/failEmoji.svg"
        alt="failEmoji"
        width="34px"
        height="34px"
      />
      <span className="mt-[10px] text-black font-semibold text-[30px] leading-[35px]">
        {title}&nbsp;
        <span className="text-[#FF3C24]">Failed</span>
      </span>
      <div className="w-full mt-[13px] mb-[20px] flex flex-col gap-[23px] items-center">
        <span className="text-[#FF3C24] font-medium text-[15px] leading-[18px]">
          {requestError}
        </span>
        <div className="flex flex-col gap-[5px] font-semibold text-[14px] px-[11px] py-[24px] leading-[17px] border-[1px] border-solid bg-[#FFDDD9] w-full">
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
              {txhash && txhash !== "" ? (
                <a
                  href={`https://explorer.xpla.io/testnet/tx/${txhash}`}
                  target="_blank"
                  className="overflow-hidden whitespace-nowrap text-ellipsis w-full max-w-[210px] inline-block"
                >
                  {txhash}
                </a>
              ) : (
                "-"
              )}
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
