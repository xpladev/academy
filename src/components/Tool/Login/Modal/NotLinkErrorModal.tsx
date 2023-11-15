import React from "react";
import useLoginModalOpen, {
  MODALTYPE,
} from "@site/src/hooks/Zustand/useLoginModalOpen";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "../../index.module.css";
import useLoginLoading from "@site/src/hooks/Zustand/useLoginLoading";

type MODALTYPE = (typeof MODALTYPE)[keyof typeof MODALTYPE];

const NotLinkErrorModal = () => {
  const { setLoginModalOpen } = useLoginModalOpen();
  const { setLoginLoading } = useLoginLoading();

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
        alt="failEmoji"
        width="34px"
        height="34px"
      />
      <div className="font-semibold text-[30px]">
        <span>LOGIN&nbsp;</span>
        <span className="text-[#FF3C24]">Failed</span>
      </div>
      <div className="mt-[8px] mb-[26px] font-normal text-[17px]">
        <span className="text-[#ED1616]">
          Your wallet is not linked to a Game ID!
        </span>
      </div>
      <div className="relative flex justify-center items-center">
        <img 
         src={`/img/tool/Login/failBackground.svg`} 
         alt="failBackground" 
         width="399px"
         height="255px"
         />
        <div className="absolute text-center top-[20px]">
          <span className="text-[#FAED00] text-[20px] font-semibold leading-[23px]">
            Consider Doing These:
          </span>
        </div>
        <div className="absolute text-center mx-[50px] bottom-[18px]">
          <span className="text-white text-[16px] font-medium leading-[19px]">
            Start playing Break the Bricks right now and proceed with the
            Sign-up!
          </span>
        </div>
      </div>
      <div className="mt-[22px] flex gap-[20px]">
        <div
          onClick={() => {
            setLoginModalOpen(MODALTYPE.NOTOPEN);
            setLoginLoading(false);
          }}
          className={clsx(
            styles.smallShadowButton,
            "bg-[#00ABFF] font-medium text-white px-[30px] py-[10px] "
          )}
        >
          OK
        </div>
        <Link
          to="/#playgame"
          className={clsx(
            styles.smallShadowButton,
            "bg-[#004FFF] font-medium text-white px-[30px] py-[10px] hover:no-underline"
          )}
          aria-label="open-game"
        >
          <span className="text-white">GO TO GAME</span>
        </Link>
      </div>
    </div>
  );
};

export default NotLinkErrorModal;
