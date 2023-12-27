import React, { useState } from "react";
import clsx from "clsx";
import styles from "../../index.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import useLoginModalOpen, {
  MODALTYPE,
} from "@site/src/hooks/Zustand/useLoginModalOpen";
import useLoginLoading from "@site/src/hooks/Zustand/useLoginLoading";
import Link from "@docusaurus/Link";
import WarningIcon from "@mui/icons-material/Warning";
const InformationModal = ({
  setModalClose,
}: {
  setModalClose?: () => void;
}) => {
  const [page, setPage] = useState<number>(1);
  const { setLoginModalOpen } = useLoginModalOpen();
  const { setLoginLoading } = useLoginLoading();

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 560,
        height: 650,
        backgroundColor: "white",
        outlineStyle: "none",
        border: "1px solid #000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "20px 20px 0px black",
      }}
    >
      <div className="w-full h-[85px] flex gap-[25px] items-end px-[35px]">
        <div className="flex gap-[12px]">
          <div
            className={clsx(
              "text-center bg-[#00FF61] px-[20px] pt-[10px] pb-[2px] leading-[29px] mr-[5px] mb-[5px]",
              styles.infoIcon
            )}
          >
            <span className="font-bold text-[46px]">i</span>
          </div>
          <div className="text-[#004FFF] font-bold text-[26px] leading-[28px]">
            About <br />
            Web3 Gaming Ops
          </div>
        </div>
        <div className="border-solid border-0 border-b-[1px] flex flex-1" />
      </div>

      <InfoDetail page={page} />

      <div className="w-full h-[124px] bg-[#F5F4F4] flex items-center justify-between px-[35px]">
        <div className="flex items-center gap-[15px] py-[26px] text-[18px] leading-[21px]">
          <img
            onClick={() => {
              if (page !== 1) {
                setPage(page - 1);
              }
            }}
            src="/img/tool/Main/arrowleft.svg"
            className="hover:cursor-pointer"
            alt="arrowleft"
            width="16px"
            height="24px"
          />
          <span>
            <span className="font-bold text-[#004FFF]">{page} </span>/ 4
          </span>
          <img
            onClick={() => {
              if (page !== 4) {
                setPage(page + 1);
              }
            }}
            src="/img/tool/Main/arrowleft.svg"
            className="rotate-180 hover:cursor-pointer"
            alt="arrowright"
            width="16px"
            height="24px"
          />
        </div>
        <div
          onClick={() => {
            if (setModalClose) {
              setModalClose();
            } else {
              setLoginModalOpen(MODALTYPE.NOTOPEN);
              setLoginLoading(false);
            }
          }}
          className={clsx(
            "border-[1px] border-solid flex justify-center items-center w-[50px] h-[50px]",
            styles.smallShadowButton
          )}
        >
          <ClearIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
};

export default InformationModal;

const InfoDetail = ({ page }: { page: number }) => {
  switch (page) {
    case 2:
      return (
        <div className="flex flex-1 flex-col gap-[37px] items-center justify-center">
          <img
            src="/img/tool/Main/Info/info-2-img.svg"
            alt="info-2"
            width="366px"
            height="97px"
          />
          <div className="text-center flex flex-col gap-[25px]">
            <span className="text-[24px] leading-[30px] font-bold text-[#004FFF]">
              Web3 Gaming Ops is linked with the
              <br />
              Break the Bricks Game and connected to
              <br />
              XPLA Vault for blockchain interaction.
            </span>
            <span className="font-normal text-[18px] leading-[26px]">
              Web3 Gaming Ops
              <br />
              allows Web2 gamers to enjoy game itself,
              <br />
              allows DEVs to playfully interact with blockchain functions.
            </span>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="flex flex-1 flex-col gap-[37px] items-center justify-center w-full">
          <div className="font-normal text-[24px] leading-[28px] text-center">
            <span className="font-bold text-[#004FFF]">4 Key Functions</span>
            <br /> CONVERT, SWAP, NFT SHOP,
            <br /> and LEADERBOARD.
          </div>

          <div className="grid grid-rows-4 gap-[26px] w-full px-[35px]">
            <div className="flex items-center gap-[12px] h-[32px]">
              <img
                src="/img/tool/Main/Convert/converttitle.svg"
                alt="converttitle"
                height="28px"
                width="155px"
                className="h-[28px]"
              />
              <div className="flex flex-col leading-[14px] font-medium text-[12px] justify-between gap-[2px]">
                <span>Offer a game items(diamond) and</span>
                <span>tokens(ACADEMY-TKN) exchange feature.</span>
              </div>
            </div>
            <div className="flex items-center gap-[12px] h-[32px]">
              <img
                src="/img/tool/Main/Swap/swaptitle.svg"
                alt="swaptitle"
                height="28px"
                width="99px"
                className="h-[28px]"
              />
              <div className="flex flex-col leading-[14px] font-medium text-[12px] justify-between gap-[2px]">
                <span>Provide token exchange function.</span>
                <span>(Especially between XPLA and ACADEMY-TKN)</span>
              </div>
            </div>
            <div className="flex items-center gap-[12px] h-[32px]">
              <img
                src="/img/tool/Main/Nftshop/nftshoptitle.svg"
                alt="nftshoptitle"
                height="28px"
                width="154px"
                className="h-[28px]"
              />
              <div className="flex flex-col leading-[14px] font-medium text-[12px] justify-between gap-[2px]">
                <span>Provide NFT Minting function using</span>
                <span>ACADEMY-TKN as a minting fee.</span>
              </div>
            </div>
            <div className="flex items-center gap-[12px] h-[32px]">
              <img
                src="/img/tool/Main/Leaderboard/leaderboardtitle.svg"
                alt="leaderboardtitle"
                height="28px"
                width="242px"
                className="h-[28px]"
              />
              <div className="flex flex-col leading-[14px] font-medium text-[12px] justify-between gap-[2px]">
                <span>Provides a TOP 10 list and the function to</span>
                <span>record one's latest score on the blockchain.</span>
              </div>
            </div>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="flex flex-1 flex-col gap-[40px] items-center justify-center">
          <Link
            target="_blank"
            to="https://github.com/xpladev/academy"
            className={clsx(
              styles.shadowButton,
              "bg-[#004FFF] px-[22px] py-[12px] flex justify-center items-center gap-[10px] hover:no-underline"
            )}
          >
            <div className="header-github-link-white" />
            <span className="text-white font-bold text-[30px]">
              GO TO GITHUB
            </span>
          </Link>

          <span className="font-bold text-[24px] leading-[28px] text-[#004FFF] text-center">
            Break the Bricks Game & Web3 Gaming Ops
            <br />
            Open-Source available on Github!
          </span>
          <div className="font-normal text-[18px] leading-[26px] text-center mt-[-15px]">
            Feel free to visit Github, check out the page source code,
            <br />
            and use it on your own project!
          </div>
          <div className="flex gap-[14px] bg-[#FFDDD9] items-center mt-[15px] px-[15px] py-[10px]">
            <WarningIcon style={{ fill: "#FF0000" }} />
            <div className="text-[12px] leading-[12px] text-[#FF0000]">
              <span className="font-bold">PLEASE BE AWARE!</span>
              <br />
              <span className="font-normal">
                Excessive abuse that disrupts platform operations may result in
                future <br /> usage restrictions.
              </span>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="flex flex-1 flex-col gap-[37px] items-center justify-center">
          <img
            src="/img/tool/Main/Info/info-1-img.svg"
            alt="info-1"
            width="80px"
            height="97px"
          />
          <div className="font-normal text-[24px] leading-[28px] text-center">
            <span className="font-bold text-[#004FFF]">Web3 Gaming Ops</span>
            <br />
            demonstrates integrated
            <br /> functions of games and XPLA.
            <br />{" "}
            <span className="text-[#CCCCCC] text-[24px]">(on Testnet!)</span>
          </div>
        </div>
      );
  }
};
