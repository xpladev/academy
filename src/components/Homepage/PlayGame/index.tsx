import React from "react";
import Cocosgame from "../../Cocosgame";
import clsx from "clsx";
import "./index.css";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";
import CustomTranslation from "@site/src/util/CustomTranslation";
import i18n from "@generated/i18n";

export default function PlayGame({
  moveToElement,
}: {
  moveToElement: React.MutableRefObject<HTMLDivElement>;
}): JSX.Element {
  return (
    <section
      ref={moveToElement}
      className={clsx(
        "relative h-[1000px] md:h-[1392px] flex flex-col bg-[#CBF0FF] justify-center items-center px-4"
      )}
    >
      <img
        src="/img/PlayGame/bgassets-left.svg"
        alt="bgassets-left"
        className="max-[800px]:hidden absolute mix-blend-luminosity bottom-[103px] left-[116px]"
      />
      <img
        src="/img/PlayGame/bgassets-right.svg"
        alt="bgassets-right"
        className="max-[800px]:hidden absolute mix-blend-luminosity bottom-0 right-0"
      />

      <div className="flex flex-col items-center z-10">
        <img
          width="780px"
          height="66px"
          src="/img/PlayGame/gametitle.svg"
          alt="gametitle"
          className="mb-[20px]"
        />
        <div className="text-[#004FFF] font-semibold text-[50px] leading-[60px] mb-[56px]">
          Play Demo Game
        </div>
        <div className="mb-[51px]">
          <BrowserOnly>{() => <Cocosgame />}</BrowserOnly>
        </div>
        <div className={
          clsx("mb-[42px] text-center text-[29px] leading-[39px] font-medium")
        }>
          <CustomTranslation en="Play " kr="" />
          <span className="font-bold">XPLA ACADEMY</span>
          <CustomTranslation
            en="'s Demo Game"
            kr="에서 제공하는 데모 게임을 통해"
          />

          <br />
          <CustomTranslation
            en="Experience Game Building within XPLA"
            kr="XPLA에 연결된 게임 서비스를 체험해보세요!"
          />
        </div>
        <div className="flex justify-center items-center gap-[84px]">
          <Link
            to="https://github.com/xpladev/academy/tree/main/demo-project"
            className={clsx(
              "font-medium   text-black hover:text-[#004FFF] flex flex-col justify-between items-center text-center hover:text-[#004FFF] hover:no-underline",
              {
                "text-[20px] leading-[24px]": i18n.currentLocale === "en",
                "text-[20px] leading-[28px]": i18n.currentLocale === "ko-kr",
              }
            )}
          >
            <img
              src="/img/PlayGame/githubwhite.svg"
              alt="githubwhite"
              width="40px"
              height="40px"
              className="mb-[8px]"
            />

            <CustomTranslation en="Game code on" kr="GitHub에서 소스코드를" />
            <br />
            <CustomTranslation en="GitHub ➔" kr="확인하세요 ➔" />
          </Link>

          <div className="h-full border-solid border-[0px] border-r-[1.5px]"></div>

          <Link
            to="/playgame#aboutGame"
            className={clsx(
              "font-medium text-[20px] text-black hover:text-[#004FFF] flex flex-col justify-between items-center text-center hover:text-[#004FFF] hover:no-underline",
              {
                "text-[20px] leading-[24px]": i18n.currentLocale === "en",
                "text-[18px] leading-[28px]": i18n.currentLocale === "ko-kr",
              }
            )}
          >
            <img
              src="/img/PlayGame/game-asset.svg"
              alt="gameAsset"
              width="114px"
              height="40px"
              className="mb-[8px]"
            />
            <CustomTranslation en="About" kr="Break The Bricks란" />
            <br />

            <CustomTranslation en="Break The Bricks ➔" kr="무엇일까요? ➔" />
          </Link>
        </div>
      </div>
    </section>
  );
}
