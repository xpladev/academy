import React, { useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "../../index.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import useLoginModalOpen, {
  MODALTYPE,
} from "@site/src/hooks/Zustand/useLoginModalOpen";
import useLoginLoading from "@site/src/hooks/Zustand/useLoginLoading";

const InformationModal = ({ setModalClose }: { setModalClose?: () => void }) => {
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
          <img src="/img/tool/Main/Info/abouttoolpage.svg" />
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
          <img src="/img/tool/Main/Info/info-2-img.svg" />
          <div className="text-center flex flex-col gap-[25px]">
            <span className="text-[24px] leading-[30px] font-bold text-[#004FFF]">
              The TOOL PAGE is linked with the
              <br />
              Break the Bricks Game and connected to
              <br />
              XPLA Vault for blockchain interaction.
            </span>
            <span className="font-normal text-[18px] leading-[26px]">
              This setup allows Web2 gamers to maintain their
              <br />
              usual play style and provides additional features for
              <br />
              those interested in blockchain functions,
              <br />
              simplifying onboarding for Web2 users.
            </span>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="flex flex-1 flex-col gap-[37px] items-center justify-center w-full">
          <div className="font-normal text-[24px] leading-[28px] text-center">
            <span className="font-bold text-[#004FFF]">
              The TOOL PAGE provides 4 functions:
            </span>
            <br /> CONVERT, SWAP, NFT SHOP,
            <br /> and LEADERBOARD.
          </div>

          <div className="grid grid-rows-4 gap-[26px] w-full px-[35px]">
            <div className="flex items-center gap-[12px] h-[32px]">
              <img src="/img/tool/Main/Convert/converttitle.svg" className="h-[28px]" />
              <div className="flex flex-col leading-[14px] font-medium text-[12px] justify-between gap-[2px]">
                <span>Offer a game items(diamond) and</span>
                <span>tokens(ACADEMY-TKN) exchange feature.</span>
              </div>
            </div>
            <div className="flex items-center gap-[12px] h-[32px]">
              <img src="/img/tool/Main/Swap/swaptitle.svg" className="h-[28px]" />
              <div className="flex flex-col leading-[14px] font-medium text-[12px] justify-between gap-[2px]">
                <span>Provide token exchange function.</span>
                <span>(Especially between XPLA and ACADEMY-TKN)</span>
              </div>
            </div>
            <div className="flex items-center gap-[12px] h-[32px]">
              <img src="/img/tool/Main/Nftshop/nftshoptitle.svg" className="h-[28px]" />
              <div className="flex flex-col leading-[14px] font-medium text-[12px] justify-between gap-[2px]">
                <span>Provide NFT Minting function using</span>
                <span>ACADEMY-TKN as a minting fee.</span>
              </div>
            </div>
            <div className="flex items-center gap-[12px] h-[32px]">
              <img
                src="/img/tool/Main/Leaderboard/leaderboardtitle.svg"
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
        <div className="flex flex-1 flex-col gap-[37px] items-center justify-center">
          <img src="/img/tool/Main/Info/info-4-img.svg" />
          <div className="font-normal text-[24px] leading-[28px] text-center">
            <span className="font-bold text-[#004FFF]">
              TOOL PAGE introduction is NOW a wrap!
            </span>
            <br />
            It's time to dive into the website and
            <br />
            embark on your adventure of exploring
            <br />
            its diverse functions.
          </div>
        </div>
      );
    default:
      return (
        <div className="flex flex-1 flex-col gap-[37px] items-center justify-center">
          <img src="/img/tool/Main/Info/info-1-img.svg" />
          <div className="font-normal text-[24px] leading-[28px] text-center">
            <span className="font-bold text-[#004FFF]">The TOOL PAGE</span> is a
            sample website
            <br /> demonstrating integrated
            <br /> functions of games and blockchain
          </div>
        </div>
      );
  }
};
