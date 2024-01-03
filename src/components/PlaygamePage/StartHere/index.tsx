import React from "react";
import SouthIcon from "@mui/icons-material/South";
import Link from "@docusaurus/Link";
import useMediaQuery from "@mui/material/useMediaQuery";

const StartHere = () => {
  const isDesktop = useMediaQuery("(min-width:996px)");

  return (
    <div
      className={`h-full min-w-[100vw] bg-[#FF640C] flex justify-center items-center relative px-[10px]`}
    >
      <div className="flex justify-center items-start gap-[34px]">
        <div className="flex flex-col gap-[64px] text-white text-[26px] leading-[36px] font-normal">
          <img
            width="609px"
            height="61px"
            src="/img/PlayGamePage/starthere-title.svg"
            alt="starthere-title"
          />
          <div>
            <div className="mb-[10px]">
              <span className="font-bold">START HERE</span> is both a game
              tutorial and
              <br />
              an introduction to Web3 concepts.
            </div>
            <div className="mb-[30px] font-medium text-black text-[24px] tracking-[-1%]">
              Complete START HERE to continue playing <br />
              ADVANCED.
            </div>
            <div className="px-[40px] py-[28px] border-[1px] border-black border-solid flex flex-col gap-[15px] bg-[#FFFFFF80] max-w-[480px]">
              <span className="font-semibold text-[25px] leading-[30px]">
                Related contents
              </span>
              <Link
                target="_blank"
                to={
                  "/startlearning/settings/create-wallet/create-wallet-with-vault"
                }
                className={
                  "flex items-center justify-between px-[20px] bg-[#C9FF00] py-[10px] text-[#000000] hover:text-[#000000] buttonShadow font-medium text-[20px] leading-[24px]"
                }
                style={{ textDecoration: "none" }}
                aria-label={"creating-a-wallet"}
              >
                <div>Creating a Wallet</div>
                <img
                  className={"w-[51px]"}
                  src={`/img/IntroduceTutorial/right-arrow.svg`}
                  alt="right-arrow"
                  width="27px"
                  height="10px"
                />
              </Link>
              <Link
                target="_blank"
                to={
                  "/startlearning/settings/create-testnet-transaction/check-tx-in-explorer"
                }
                className={
                  "flex items-center justify-between px-[20px] bg-[#C9FF00] py-[10px] text-[#000000] hover:text-[#000000] buttonShadow font-medium text-[20px] leading-[24px]"
                }
                style={{ textDecoration: "none" }}
                aria-label={"check-transactions"}
              >
                <div>Check Transactions</div>
                <img
                  className={"w-[51px]"}
                  src={`/img/IntroduceTutorial/right-arrow.svg`}
                  alt="right-arrow"
                  width="27px"
                  height="10px"
                />
              </Link>
              <Link
                target="_blank"
                to={"/startlearning/tutorial/make-cw721/make-nft-js"}
                className={
                  "flex items-center justify-between px-[20px] bg-[#C9FF00] py-[10px] text-[#000000] hover:text-[#000000] buttonShadow font-medium text-[20px] leading-[24px]"
                }
                style={{ textDecoration: "none" }}
                aria-label={"creating-a-wallet"}
              >
                <div>Minting NFT</div>
                <img
                  className={"w-[51px]"}
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
            width="586px"
            height="492px"
            src="/img/PlayGamePage/starthere-img.svg"
            alt="starthere-img"
            className="mt-[12px]"
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

export default StartHere;
