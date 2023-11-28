import React from "react";
import styles from "../Tool/index.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./index.css";

export const GameArchitectureTutorial = () => {
  const matches = useMediaQuery("(max-width:520px)");

  return (
    <div className="flex flex-col justify-center items-center">
      <Link
        target="_blank"
        to="/#playgame"
        className={clsx(
          styles.smallShadowButton,
          "px-[10px] py-[10px] bg-[#004FFF] text-[16px] font-semibold hover:no-underline"
        )}
      >
        <span className="text-[#FFE200]">Break The Bricks </span>
        <span className="text-white">start</span>
      </Link>
      <div className="relative flex justify-center items-center h-[70px]">
        <div className="long-arrow absolute" />
        {matches ? (
          <div className="bg-white/90 text-black text-[14px] border-solid border-[1px] p-[5px] text-center">
            Click "START HERE" in Game
          </div>
        ) : (
          <>
            <div className="absolute tagline" />
            <div className="whitetag">
              <div className="whitetag-inner">
                Click "START HERE" in Game
                <div />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="border-solid border-1 w-full max-w-[494px] flex flex-col justify-center items-center ">
        <div className="w-full flex justify-center items-center border-solid border-0 border-b-[1px] font-semibold bg-black text-white">
          Tutorial
        </div>
        <Link
          target="_blank"
          to="/docs/category/lets-get-your-wallet-ready"
          className={clsx(
            styles.smallShadowButton,
            "mt-[20px] px-[10px] py-[10px] bg-[#00B2FC] text-[16px] font-semibold hover:no-underline"
          )}
        >
          <span className="text-white">Create a Wallet</span>
        </Link>
        <div className="relative flex justify-center items-center h-[120px]">
          <div className="long-arrow-120 absolute" />
          {matches ? (
            <div className="bg-white/90 text-[14px] text-black border-solid border-[1px] p-[5px] text-center">
              Wallet will be used on the tool page, <br />
              so make sure to save your mnemonic well.
            </div>
          ) : (
            <>
              <div className="absolute tagline" />
              <div className="whitetag-tutorial">
                <div className="whitetag-tutorial-inner">
                  Wallet will be used on the tool page, so make sure to save
                  your mnemonic well.
                  <div />
                </div>
              </div>
            </>
          )}
        </div>
        <Link
          target="_blank"
          to="/docs/category/utilize-tokens-cw20"
          className={clsx(
            styles.smallShadowButton,
            "mt-[-10px] px-[10px] py-[10px] bg-[#00B2FC] text-[16px] font-semibold hover:no-underline"
          )}
        >
          <span className="text-white">Get Tokens</span>
        </Link>
        <div className="relative flex justify-center items-center h-[70px]">
          <div className="long-arrow absolute" />
        </div>
        <Link
          target="_blank"
          to="/docs/category/utilize-nftcw721"
          className={clsx(
            styles.smallShadowButton,
            "mb-[20px] px-[10px] py-[10px] bg-[#C9FF00] text-[16px] font-semibold hover:no-underline"
          )}
        >
          <span className="text-black">NFT Mint</span>
        </Link>
      </div>
      <div className="relative flex justify-center items-center h-[70px] mt-[-1px]">
        <div className="long-arrow absolute" />
      </div>
      <div
        className={clsx(
          "px-[10px] py-[10px] bg-[#FFE300] text-[16px] font-semibold border-solid border-[1px] text-center"
        )}
      >
        <span className="text-black">Create Game ID</span> <br />
      </div>
    </div>
  );
};

export const GameArchitectureAdvanced = () => {
  const matches = useMediaQuery("(max-width:520px)");

  return (
    <div className="flex flex-col justify-center items-center">
      <Link
        target="_blank"
        to="/#playgame"
        className={clsx(
          styles.smallShadowButton,
          "px-[10px] py-[10px] bg-[#004FFF] text-[16px] font-semibold hover:no-underline"
        )}
      >
        <span className="text-[#FFE200]">Break The Bricks </span>
        <span className="text-white">start</span>
      </Link>
      <div className="relative flex justify-center items-center h-[70px]">
        <div className="long-arrow absolute" />
        {matches ? (
          <div className="bg-white/90 text-[14px] text-black border-solid border-[1px] p-[5px] text-center">
            Click "ADVANCED" in Game
          </div>
        ) : (
          <>
            <div className="absolute tagline" />
            <div className="whitetag">
              <div className="whitetag-inner">
                Click "ADVANCED" in Game
                <div />
              </div>
            </div>
          </>
        )}
      </div>

      <div
        className={clsx(
          "px-[10px] py-[10px] bg-[#FFE300] text-[16px] font-semibold border-solid border-[1px] text-center"
        )}
      >
        <span className="text-black">Login with Game ID</span> <br />
      </div>
      <div className="mt-[-1px] relative flex justify-center items-center h-[70px]">
        <div className="long-arrow absolute" />
      </div>

      <div className="border-solid border-1 w-full max-w-[494px] flex flex-col justify-center items-center ">
        <div className="w-full flex justify-center items-center border-solid border-0 border-b-[1px] font-semibold bg-black text-white">
          Advanced
        </div>
        <div
          className={clsx(
            "mt-[20px] px-[10px] py-[10px] bg-[white] text-[16px] font-semibold border-solid border-[1px] text-center"
          )}
        >
          <span className="text-black">Select Paddle</span> <br />
        </div>
        {matches && (
          <div className="absolute max-[450px]:w-[200px] w-[400px] mt-[100px] bg-white/90 text-[14px] text-black border-solid border-[1px] p-[5px] text-center">
            Move to the Tool Page in XPLA ACADEMY
          </div>
        )}
        <div className="relative flex justify-center items-center h-[30px]">
          <div className="short-line-col absolute" />
        </div>
        <div className="flex w-full">
          <div className="relative flex flex-col flex-1 items-center">
            <div className="absolute right-0 top-[2px] w-[50%] border-solid border-[1.5px]" />
            <div className="relative flex justify-center items-center h-[70px] mt-[2px]">
              <div className="long-arrow absolute" />
            </div>
            <div
              className={clsx(
                "px-[10px] py-[10px] bg-[white] text-[16px] font-semibold border-solid border-[1px] text-center"
              )}
            >
              <span className="text-black">Play Infinite Mode Game</span> <br />
            </div>
            <div className="flex gap-[20px] ">
              <div className="relative flex justify-center items-center h-[240px] ">
                <div className="long-long-arrow absolute" />

                {!matches && (
                  <>
                    <div className="mt-[110px] absolute tagline" />
                    <div className="mt-[110px] absolute whitetag-between">
                      <div className="whitetag-between-inner">
                        Move to the Tool Page in XPLA ACADEMY
                        <div />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div>
                <div className="relative flex justify-center items-center h-[30px]">
                  <div className="short-line-col absolute" />
                </div>
                <div className="absolute right-0 mt-[2px] w-[calc(50%-10px)] border-solid border-[1.5px]" />
              </div>
            </div>
            <Link
              target="_blank"
              to="/docs/tutorial/deep-understand-xpla/write-contract"
              className={clsx(
                styles.smallShadowButton,
                "px-[10px] py-[10px] bg-[#FF640C] text-[16px] font-semibold hover:no-underline text-center leading-[20px]"
              )}
            >
              <span className="text-black">Record your high score</span>
            </Link>
          </div>
          <div className="relative flex flex-col flex-1  items-center">
            <div className="absolute left-0 top-[2px] w-[50%] border-solid border-[1.5px]" />
            <div className="relative flex justify-center items-center h-[70px] mt-[2px]">
              <div className="long-arrow absolute" />
            </div>
            <div
              className={clsx(
                "px-[10px] py-[10px] bg-[white] text-[16px] font-semibold border-solid border-[1px] text-center"
              )}
            >
              <span className="text-black">Play Stage Mode Game</span>
            </div>
            <div className="flex gap-[20px] ">
              <div className="mt-[30px]">
                <div className="absolute left-0 mt-[2px] w-[calc(50%-10px)] border-solid border-[1.5px]" />
                <div className="relative flex justify-center items-center h-[30px]">
                  <div className="short-arrow absolute" />
                </div>
              </div>
              <div className="relative flex justify-center items-center h-[70px] ">
                <div className="long-arrow absolute" />
              </div>
            </div>
            <div
              className={clsx(
                "px-[10px] py-[10px] bg-[white] text-[16px] font-semibold border-solid border-[1px] text-center"
              )}
            >
              <span className="text-black">Get Diamonds</span>
            </div>

            <div className="relative flex justify-center items-center h-[195px]">
              <div className="long-line-col absolute" />
              {!matches && (
                <div className="mt-[-80px] absolute tagline ml-0 mr-[49px]" />
              )}
            </div>
            <div className="w-full">
              <div className="absolute left-0 w-[50%] border-solid border-[1.5px]" />
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[30px] mt-[-2px]">
          <div className="short-arrow absolute" />
        </div>
        <Link
          target="_blank"
          to="/docs/tutorial/deep-understand-xpla/convert"
          className={clsx(
            styles.smallShadowButton,
            "mt-[11px] px-[10px] py-[10px] bg-[#6600ff] text-[16px] font-semibold hover:no-underline text-center leading-[20px]"
          )}
        >
          <span className="text-white">
            Convert Diamond to ACADEMY-TKN (CW20)
          </span>
        </Link>
        <div className="relative flex justify-center items-center h-[70px]">
          <div className="long-arrow absolute" />
        </div>
        <Link
          target="_blank"
          to="/docs/category/utilize-nftcw721"
          className={clsx(
            styles.smallShadowButton,
            "mb-[20px] px-[10px] py-[10px] bg-[#C9FF00] text-[16px] font-semibold hover:no-underline text-center leading-[20px]"
          )}
        >
          <span className="text-black">Mint a new paddle</span>
        </Link>
      </div>
      <div className="relative flex justify-center items-center h-[70px] mt-[-1px]">
        <div className="long-arrow absolute" />
      </div>
      <Link
        target="_blank"
        to="/docs/tutorial/deep-understand-xpla/swap"
        className={clsx(
          styles.smallShadowButton,
          "px-[10px] py-[10px] bg-[#F93AC3] text-[16px] font-semibold hover:no-underline text-center leading-[20px]"
        )}
      >
        <span className="text-black">
          Swap between ACADEMY-TKN <br />
          and Testnet XPLA
        </span>
      </Link>
    </div>
  );
};

export const GameArchitectureTutorial2 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link
        target="_blank"
        to="/#playgame"
        className={clsx(
          styles.smallShadowButton,
          "px-[10px] py-[10px] bg-[#004FFF] text-[16px] font-semibold hover:no-underline"
        )}
      >
        <span className="text-[#FFE200]">Break The Bricks </span>
        <span className="text-white">start</span>
      </Link>
      <div className="relative flex justify-center items-center h-[70px]">
        <div className="long-arrow absolute" />
        <div className="bg-white/90 text-black text-[14px] border-solid border-[1px] p-[5px] text-center">
          Click "START HERE" in Game
        </div>
      </div>
      <div className="border-solid border-1 w-full max-w-[494px] flex flex-col justify-center items-center ">
        <div className="w-full flex justify-center items-center border-solid border-0 border-b-[1px] font-semibold bg-black text-white">
          Tutorial
        </div>
        <Link
          target="_blank"
          to="/docs/category/lets-get-your-wallet-ready"
          className={clsx(
            styles.smallShadowButton,
            "mt-[20px] px-[10px] py-[10px] bg-[#00B2FC] text-[16px] font-semibold hover:no-underline"
          )}
        >
          <span className="text-white">Create a Wallet</span>
        </Link>
        <div className="relative flex justify-center items-center h-[120px]">
          <div className="long-arrow-120 absolute" />
          <div className="bg-white/90 text-[14px] text-black border-solid border-[1px] p-[5px] text-center">
            Wallet will be used on the tool page, <br />
            so make sure to save your mnemonic well.
          </div>
        </div>
        <Link
          target="_blank"
          to="/docs/category/utilize-tokens-cw20"
          className={clsx(
            styles.smallShadowButton,
            "mt-[-10px] px-[10px] py-[10px] bg-[#00B2FC] text-[16px] font-semibold hover:no-underline"
          )}
        >
          <span className="text-white">Get Tokens</span>
        </Link>
        <div className="relative flex justify-center items-center h-[70px]">
          <div className="long-arrow absolute" />
        </div>
        <Link
          target="_blank"
          to="/docs/category/utilize-nftcw721"
          className={clsx(
            styles.smallShadowButton,
            "mb-[20px] px-[10px] py-[10px] bg-[#C9FF00] text-[16px] font-semibold hover:no-underline"
          )}
        >
          <span className="text-black">NFT Mint</span>
        </Link>
      </div>
      <div className="relative flex justify-center items-center h-[70px] mt-[-1px]">
        <div className="long-arrow absolute" />
      </div>
      <div
        className={clsx(
          "px-[10px] py-[10px] bg-[#FFE300] text-[16px] font-semibold border-solid border-[1px] text-center"
        )}
      >
        <span className="text-black">Create Game ID</span> <br />
      </div>
    </div>
  );
};

export const GameArchitectureAdvanced2 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link
        target="_blank"
        to="/#playgame"
        className={clsx(
          styles.smallShadowButton,
          "px-[10px] py-[10px] bg-[#004FFF] text-[16px] font-semibold hover:no-underline"
        )}
      >
        <span className="text-[#FFE200]">Break The Bricks </span>
        <span className="text-white">start</span>
      </Link>
      <div className="relative flex justify-center items-center h-[70px]">
        <div className="long-arrow absolute" />
        <div className="bg-white/90 text-[14px] text-black border-solid border-[1px] p-[5px] text-center">
          Click "ADVANCED" in Game
        </div>
      </div>

      <div
        className={clsx(
          "px-[10px] py-[10px] bg-[#FFE300] text-[16px] font-semibold border-solid border-[1px] text-center"
        )}
      >
        <span className="text-black">Login with Game ID</span> <br />
      </div>
      <div className="mt-[-1px] relative flex justify-center items-center h-[70px]">
        <div className="long-arrow absolute" />
      </div>

      <div className="relative border-solid border-1 w-full max-w-[494px] flex flex-col justify-center items-center ">
        <div className="w-full flex justify-center items-center border-solid border-0 border-b-[1px] font-semibold bg-black text-white">
          Advanced
        </div>
        <div
          className={clsx(
            "mt-[20px] px-[10px] py-[10px] bg-[white] text-[16px] font-semibold border-solid border-[1px] text-center"
          )}
        >
          <span className="text-black">Select Paddle</span> <br />
        </div>
        <div className="absolute max-[450px]:w-[200px] w-[400px] mt-[100px] bg-white/90 text-[14px] text-black border-solid border-[1px] p-[5px] text-center">
          Move to the Tool Page in XPLA ACADEMY
        </div>
        <div className="relative flex justify-center items-center h-[30px]">
          <div className="short-line-col absolute" />
        </div>
        <div className="flex w-full">
          <div className="relative flex flex-col flex-1 items-center">
            <div className="absolute right-0 top-[2px] w-[50%] border-solid border-[1.5px]" />
            <div className="relative flex justify-center items-center h-[70px] mt-[2px]">
              <div className="long-arrow absolute" />
            </div>
            <div
              className={clsx(
                "px-[10px] py-[10px] bg-[white] text-[16px] font-semibold border-solid border-[1px] text-center"
              )}
            >
              <span className="text-black">Play Infinite Mode Game</span> <br />
            </div>
            <div className="flex gap-[20px] ">
              <div className="relative flex justify-center items-center h-[240px] ">
                <div className="long-long-arrow absolute" />
              </div>
              <div>
                <div className="relative flex justify-center items-center h-[30px]">
                  <div className="short-line-col absolute" />
                </div>
                <div className="absolute right-0 mt-[2px] w-[calc(50%-10px)] border-solid border-[1.5px]" />
              </div>
            </div>
            <Link
              target="_blank"
              to="/docs/tutorial/deep-understand-xpla/write-contract"
              className={clsx(
                styles.smallShadowButton,
                "px-[10px] py-[10px] bg-[#FF640C] text-[16px] font-semibold hover:no-underline text-center leading-[20px]"
              )}
            >
              <span className="text-black">Record your high score</span>
            </Link>
          </div>
          <div className="relative flex flex-col flex-1  items-center">
            <div className="absolute left-0 top-[2px] w-[50%] border-solid border-[1.5px]" />
            <div className="relative flex justify-center items-center h-[70px] mt-[2px]">
              <div className="long-arrow absolute" />
            </div>
            <div
              className={clsx(
                "px-[10px] py-[10px] bg-[white] text-[16px] font-semibold border-solid border-[1px] text-center"
              )}
            >
              <span className="text-black">Play Stage Mode Game</span>
            </div>
            <div className="flex gap-[20px] ">
              <div className="mt-[30px]">
                <div className="absolute left-0 mt-[2px] w-[calc(50%-10px)] border-solid border-[1.5px]" />
                <div className="relative flex justify-center items-center h-[30px]">
                  <div className="short-arrow absolute" />
                </div>
              </div>
              <div className="relative flex justify-center items-center h-[70px] ">
                <div className="long-arrow absolute" />
              </div>
            </div>
            <div
              className={clsx(
                "px-[10px] py-[10px] bg-[white] text-[16px] font-semibold border-solid border-[1px] text-center"
              )}
            >
              <span className="text-black">Get Diamonds</span>
            </div>

            <div className="relative flex justify-center items-center h-[195px]">
              <div className="long-line-col absolute" />
            </div>
            <div className="w-full">
              <div className="absolute left-0 w-[50%] border-solid border-[1.5px]" />
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[30px] mt-[-2px]">
          <div className="short-arrow absolute" />
        </div>
        <Link
          target="_blank"
          to="/docs/tutorial/deep-understand-xpla/convert"
          className={clsx(
            styles.smallShadowButton,
            "mt-[11px] px-[10px] py-[10px] bg-[#6600ff] text-[16px] font-semibold hover:no-underline text-center leading-[20px]"
          )}
        >
          <span className="text-white">
            Convert Diamond to ACADEMY-TKN (CW20)
          </span>
        </Link>
        <div className="relative flex justify-center items-center h-[70px]">
          <div className="long-arrow absolute" />
        </div>
        <Link
          target="_blank"
          to="/docs/category/utilize-nftcw721"
          className={clsx(
            styles.smallShadowButton,
            "mb-[20px] px-[10px] py-[10px] bg-[#C9FF00] text-[16px] font-semibold hover:no-underline text-center leading-[20px]"
          )}
        >
          <span className="text-black">Mint a new paddle</span>
        </Link>
      </div>
      <div className="relative flex justify-center items-center h-[70px] mt-[-1px]">
        <div className="long-arrow absolute" />
      </div>
      <Link
        target="_blank"
        to="/docs/tutorial/deep-understand-xpla/swap"
        className={clsx(
          styles.smallShadowButton,
          "px-[10px] py-[10px] bg-[#F93AC3] text-[16px] font-semibold hover:no-underline text-center leading-[20px]"
        )}
      >
        <span className="text-black">
          Swap between ACADEMY-TKN <br />
          and Testnet XPLA
        </span>
      </Link>
    </div>
  );
};

export const GameArchitectureTutorial3 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link
        target="_blank"
        to="/#playgame"
        className={clsx(
          styles.smallShadowButton,
          "px-[10px] py-[10px] bg-[#004FFF] text-[16px] font-semibold hover:no-underline"
        )}
      >
        <span className="text-[#FFE200]">Break The Bricks </span>
        <span className="text-white">start</span>
      </Link>
      <div className="relative flex justify-center items-center h-[70px]">
        <div className="long-arrow absolute" />
        <div className="bg-[#004FFF]/90 text-[14px] text-white border-solid border-[1px] p-[5px] text-center">
          Click "START HERE" in Game
        </div>
      </div>
      <div className="border-solid border-1 w-full max-w-[494px] flex flex-col justify-center items-center ">
        <div className="w-full flex justify-center items-center border-solid border-0 border-b-[1px] font-semibold bg-[#F93AC3]">
          Tutorial
        </div>
        <Link
          target="_blank"
          to="/docs/category/lets-get-your-wallet-ready"
          className={clsx(
            styles.smallShadowButton,
            "mt-[20px] px-[10px] py-[10px] bg-white text-[16px] font-semibold hover:no-underline"
          )}
        >
          <span className="text-black">Create a Wallet</span>
        </Link>
        <div className="relative flex justify-center items-center h-[120px]">
          <div className="long-arrow-120 absolute" />
          <div className="bg-[#F93AC3]/90 text-[14px] text-black border-solid border-[1px] p-[5px] text-center">
            Wallet will be used on the tool page, <br />
            so make sure to save your mnemonic well.
          </div>
        </div>
        <Link
          target="_blank"
          to="/docs/category/utilize-tokens-cw20"
          className={clsx(
            styles.smallShadowButton,
            "mt-[-10px] px-[10px] py-[10px] bg-white text-[16px] font-semibold hover:no-underline"
          )}
        >
          <span className="text-black">Get Tokens</span>
        </Link>
        <div className="relative flex justify-center items-center h-[70px]">
          <div className="long-arrow absolute" />
        </div>
        <Link
          target="_blank"
          to="/docs/category/utilize-nftcw721"
          className={clsx(
            styles.smallShadowButton,
            "mb-[20px] px-[10px] py-[10px] bg-white text-[16px] font-semibold hover:no-underline"
          )}
        >
          <span className="text-black">NFT Mint</span>
        </Link>
      </div>
      <div className="relative flex justify-center items-center h-[70px] mt-[-1px]">
        <div className="long-arrow absolute" />
      </div>
      <div
        className={clsx(
          "px-[10px] py-[10px] bg-[#FF6600] text-[16px] font-semibold border-solid border-[1px] text-center"
        )}
      >
        <span className="text-black">Create Game ID</span> <br />
      </div>
    </div>
  );
};

export const GameArchitectureAdvanced3 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link
        target="_blank"
        to="/#playgame"
        className={clsx(
          styles.smallShadowButton,
          "px-[10px] py-[10px] bg-[#004FFF] text-[16px] font-semibold hover:no-underline"
        )}
      >
        <span className="text-[#FFE200]">Break The Bricks </span>
        <span className="text-white">start</span>
      </Link>
      <div className="relative flex justify-center items-center h-[70px]">
        <div className="long-arrow absolute" />
        <div className="bg-[#004FFF]/90 text-[14px] text-white border-solid border-[1px] p-[5px] text-center">
          Click "ADVANCED" in Game
        </div>
      </div>
      <div
        className={clsx(
          "px-[10px] py-[10px] bg-[#FF6600] text-[16px] font-semibold border-solid border-[1px] text-center"
        )}
      >
        <span className="text-black">Login with Game ID</span> <br />
      </div>
      <div className="mt-[-1px] relative flex justify-center items-center h-[70px]">
        <div className="long-arrow absolute" />
      </div>

      <div className="border-solid border-1 w-full max-w-[494px] flex flex-col justify-center items-center ">
        <div className="w-full flex justify-center items-center border-solid border-0 border-b-[1px] font-semibold bg-[#C9FF00]">
          Advanced
        </div>
        <div
          className={clsx(
            "mt-[20px] px-[10px] py-[10px] bg-[white] text-[16px] font-semibold border-solid border-[1px] text-center"
          )}
        >
          <span className="text-black">Select Paddle</span> <br />
        </div>
        <div className="relative flex justify-center items-center h-[30px]">
          <div className="short-line-col absolute" />
        </div>
        <div className="flex w-full">
          <div className="relative flex flex-col flex-1 items-center">
            <div className="absolute right-0 top-[2px] w-[50%] border-solid border-[1.5px]" />
            <div className="relative flex justify-center items-center h-[70px] mt-[2px]">
              <div className="long-arrow absolute" />
            </div>
            <div
              className={clsx(
                "px-[10px] py-[10px] bg-[white] text-[16px] font-semibold border-solid border-[1px] text-center"
              )}
            >
              <span className="text-black">Play Infinite Mode Game</span> <br />
            </div>
            <div className="flex gap-[20px] ">
              <div className="relative flex justify-center items-center h-[70px] ">
                <div className="long-arrow absolute" />
              </div>
              <div>
                <div className="relative flex justify-center items-center h-[30px]">
                  <div className="short-line-col absolute" />
                </div>
                <div className="absolute right-0 mt-[2px] w-[calc(50%-10px)] border-solid border-[1.5px]" />
              </div>
            </div>
            <Link
              target="_blank"
              to="/tool/#leaderboard"
              className={clsx(
                styles.smallShadowButton,
                "px-[10px] py-[10px] bg-[#FF6600] text-[16px] font-semibold hover:no-underline text-center leading-[20px]"
              )}
            >
              <span className="text-black">
                Record your high score <br /> in the Tool Page
              </span>
            </Link>
          </div>
          <div className="relative flex flex-col flex-1  items-center">
            <div className="absolute left-0 top-[2px] w-[50%] border-solid border-[1.5px]" />
            <div className="relative flex justify-center items-center h-[70px] mt-[2px]">
              <div className="long-arrow absolute" />
            </div>
            <div
              className={clsx(
                "px-[10px] py-[10px] bg-[white] text-[16px] font-semibold border-solid border-[1px] text-center"
              )}
            >
              <span className="text-black">Play Stage Mode Game</span> <br />
            </div>
            <div className="flex gap-[20px] ">
              <div className="mt-[30px]">
                <div className="absolute left-0 mt-[2px] w-[calc(50%-10px)] border-solid border-[1.5px]" />
                <div className="relative flex justify-center items-center h-[30px]">
                  <div className="short-arrow absolute" />
                </div>
              </div>
              <div className="relative flex justify-center items-center h-[70px] ">
                <div className="long-arrow absolute" />
              </div>
            </div>
            <div
              className={clsx(
                "px-[10px] py-[10px] bg-[white] text-[16px] font-semibold border-solid border-[1px] text-center"
              )}
            >
              <span className="text-black">Get Diamonds</span> <br />
            </div>

            <div className="relative flex justify-center items-center h-[53px]">
              <div className="long-line-col absolute" />
            </div>
            <div className="w-full">
              <div className="absolute left-0 w-[50%] border-solid border-[1.5px]" />
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[30px] mt-[-2px]">
          <div className="short-arrow absolute" />
        </div>
        <Link
          target="_blank"
          to="/tool/#convert"
          className={clsx(
            styles.smallShadowButton,
            "mt-[11px] px-[10px] py-[10px] bg-[#6600ff] text-[16px] font-semibold hover:no-underline text-center leading-[20px]"
          )}
        >
          <span className="text-white">
            Convert Diamond to ACADEMY-TKN (CW20) in the Tool Page
          </span>
        </Link>
        <div className="relative flex justify-center items-center h-[70px]">
          <div className="long-arrow absolute" />
        </div>
        <Link
          target="_blank"
          to="/tool/#nftshop"
          className={clsx(
            styles.smallShadowButton,
            "mb-[20px] px-[10px] py-[10px] bg-[#C9FF00] text-[16px] font-semibold hover:no-underline text-center leading-[20px]"
          )}
        >
          <span className="text-black">Mint a new paddle in the Tool Page</span>
        </Link>
      </div>
      <div className="relative flex justify-center items-center h-[70px] mt-[-1px]">
        <div className="long-arrow absolute" />
      </div>
      <Link
        target="_blank"
        to="/tool/#swap"
        className={clsx(
          styles.smallShadowButton,
          "px-[10px] py-[10px] bg-[#F93AC3] text-[16px] font-semibold hover:no-underline text-center leading-[20px]"
        )}
      >
        <span className="text-black">
          Swap between ACADEMY-TKN and <br />
          Testnet XPLA in the Tool Page
        </span>
      </Link>
    </div>
  );
};

export const ToolPageButton = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Link
        target="_blank"
        to="/tool"
        className={clsx(
          styles.smallShadowButton,
          "px-[10px] py-[10px] bg-[#004FFF] text-[16px] font-semibold hover:no-underline text-center leading-[20px]"
        )}
      >
        <span className="text-[#FFE200]">Break The Bricks </span>
        <span className="text-white">Tool Page</span>
      </Link>
    </div>
  );
};
