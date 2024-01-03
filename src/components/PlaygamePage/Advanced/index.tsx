import React from "react";
import SouthIcon from "@mui/icons-material/South";
import Link from "@docusaurus/Link";
import useMediaQuery from "@mui/material/useMediaQuery";

const Advanced = () => {
  const isDesktop = useMediaQuery("(min-width:996px)");

  return (
    <div
      className={`h-full min-w-[100vw] bg-[#F93AC3] flex justify-center items-center relative px-[20px] overflow-hidden`}
    >
      <div className="relative w-full max-w-[1180px] flex justify-start items-start z-10">
        <div className="flex flex-col gap-[64px] text-white text-[26px] leading-[36px] font-normal">
          <img
            width="559px"
            height="61px"
            src="/img/PlayGamePage/advanced-title.svg"
            alt="advanced-title"
          />
          <div>
            <div className="mb-[10px]">
              <span className="font-bold">ADVANCED</span>
              &nbsp;is where the real Web3 game
              <br />
              abegins.
            </div>
            <div className="mb-[30px] font-medium text-black text-[24px] tracking-[-1%]">
              ADVANCED integrates with Web3 Gaming Ops
              <br />
              to implement Web3 features in the game.
            </div>
            <div className="px-[40px] py-[28px] border-[1px] border-black border-solid flex flex-col gap-[15px] bg-[#FFFFFF80] max-w-[480px] backdropfilter1px">
              <span className="font-semibold text-[25px] leading-[30px]">
                Related contents
              </span>
              <Link
                target="_blank"
                to={"/startlearning/category/utilize-tokens-cw20"}
                className={
                  "flex items-center justify-between px-[20px] bg-[#C9FF00] py-[10px] text-[#000000] hover:text-[#000000] buttonShadow font-medium text-[20px] leading-[24px]"
                }
                style={{ textDecoration: "none" }}
                aria-label={"creating-a-wallet"}
              >
                <div>Collecting tokens</div>
                <img
                  src={`/img/IntroduceTutorial/right-arrow.svg`}
                  alt="right-arrow"
                  width="27px"
                  height="10px"
                />
              </Link>
              <Link
                target="_blank"
                to={
                  "/startlearning/category/utilize-nftcw721"
                }
                className={
                  "flex items-center justify-between px-[20px] bg-[#C9FF00] py-[10px] text-[#000000] hover:text-[#000000] buttonShadow font-medium text-[20px] leading-[24px]"
                }
                style={{ textDecoration: "none" }}
                aria-label={"check-transactions"}
              >
                <div>Utilizing NFT equipment</div>
                <img
                  src={`/img/IntroduceTutorial/right-arrow.svg`}
                  alt="right-arrow"
                  width="27px"
                  height="10px"
                />
              </Link>
              <Link
                target="_blank"
                to={
                  "/startlearning/tutorial/deep-understand-xpla/write-contract"
                }
                className={
                  "flex items-center justify-between px-[20px] bg-[#C9FF00] py-[10px] text-[#000000] hover:text-[#000000] buttonShadow font-medium text-[20px] leading-[24px]"
                }
                style={{ textDecoration: "none" }}
                aria-label={"creating-a-wallet"}
              >
                <div>Recording score on the blockchain</div>
                <img
                  src={`/img/IntroduceTutorial/right-arrow.svg`}
                  alt="right-arrow"
                  width="27px"
                  height="10px"
                />
              </Link>
            </div>
          </div>
        </div>
        {isDesktop && (
          <img
            width="614px"
            height="556px"
            src="/img/PlayGamePage/advanced-img.svg"
            alt="advanced-img"
            className="mt-[-19px] absolute right-[-41px] max-[1325px]:w-[500px] max-[1325px]:right-0"
          />
        )}
      </div>

      <div className="absolute bottom-[47px] arrow-hidden ">
        <SouthIcon style={{ fill: "#FAED00", fontSize: 55 }} />
      </div>
      <img
        className="absolute bottom-0 w-screen h-auto"
        src={`/img/tool/Login/floor.svg`}
        alt="LoginPageFloor"
        width="2748px"
        height="402px"
      />
    </div>
  );
};

export default Advanced;
