import React from "react";
import { MODALTYPE } from "..";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "../../index.module.css";

type MODALTYPE = (typeof MODALTYPE)[keyof typeof MODALTYPE];

const SessionErrorModal = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<MODALTYPE>>;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        height: 540,
        backgroundColor: "white",
        outlineStyle: "none",
        border: "1px solid #000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        className="mt-[40px] w-[34px]"
        src={`/img/tool/Login/failEmoji.svg`}
      />
      <div className="font-semibold text-[30px]">
        <span>LOGIN&nbsp;</span>
        <span className="text-[#FF3C24]">Failed</span>
      </div>
      <div className="mt-[4px] mb-[12px] font-normal text-[17px] text-center leading-[19px]">
        <span className="text-[#ED1616]">
          Looks like no wallet's connected to XPLA Vault, <br />
          or your session has expired!
        </span>
      </div>
      <div className="relative flex justify-center items-center leading-[25px]">
        <img
          className="w-full"
          src={`/img/tool/Login/sessionErrorBg.svg`}
        />
        <div className="absolute text-center top-[22px]">
          <span className="text-[#FAED00] text-[20px] font-semibold">
            Consider Doing These:
          </span>
        </div>
        <div className="absolute text-center mx-[50px] bottom-[22px] text-start">
          <span className="text-white text-[16px] font-medium">
            1. Adding one or more wallets
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;on<span className="text-[#00B2FC] font-bold"> XPLA Vault.</span>
            <br />
            2. Refreshing the page using the <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#FAED00] font-bold">F5 key!</span>
          </span>
        </div>
      </div>
      <div className="mt-[22px] flex gap-[20px] w-full ">
        <div
          onClick={() => setModalOpen(MODALTYPE.NOTOPEN)}
          className={clsx(
            styles.smallShadowButton,
            "bg-[#00ABFF] font-medium text-white py-[10px] w-full text-center mx-[50px]"
          )}
        >
          OK
        </div>
      </div>
    </div>
  );
};

export default SessionErrorModal;
