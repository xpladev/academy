import React from "react";
import styles from "../Tool/index.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import "./index.css";

export const GameArchitectureTutorial = () => {
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
        <div className="absolute tagline" />
        <div className="tags ml-[240px]">
          <li>
            <div>Click "START HERE" in Game</div>
          </li>
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
          <div className="absolute tagline" />
          <div className="tags-tutorial ml-[268px] mr-[10px] mb-[10px]">
            <li>
              <div>
                <span>
                  Wallet will be used on the tool page, so make sure to save
                  your mnemonic well.
                </span>
              </div>
            </li>
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

export const GameArchitectureAdvanced = () => {
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
        <div className="absolute tagline" />
        <div className="tags ml-[240px]">
          <li>
            <div>Click "ADVANCED" in Game</div>
          </li>
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
          <div className="bg-[#F93AC3]/90 text-[14px] text-black border-solid border-[1px] p-[5px] text-center" >
                  Wallet will be used on the tool page, <br/>
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
