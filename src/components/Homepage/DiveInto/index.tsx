import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import CustomTranslation from "@site/src/util/CustomTranslation";
import i18n from "@generated/i18n";
import { isMobile } from "react-device-detect";

type FeatureItem = {
  Svg: string;
  title: JSX.Element;
  description: JSX.Element;
  rightBorder: boolean;
  sizes: string;
  className: string;
};

const FeatureList: FeatureItem[] = [
  {
    Svg: "/img/DiveInto/easy-to-follow.svg",
    title: <>Try the easy tutorials</>,
    description: (
      <>
        <CustomTranslation
          en="A step-by-step curriculum for understanding"
          kr="초보자부터 상급자까지 고려한"
        />
        <br />
        <CustomTranslation
          en="and applying Web3 — for everyone."
          kr="단계별 커리큘럼으로 Web3 세계에 입문하세요."
        />
      </>
    ),
    rightBorder: true,
    sizes: "(max-width: 768px) 100px, 150px",
    className: "h-[147px]",
  },
  {
    Svg: "/img/DiveInto/freely-moddable.svg",
    title: <>Use the free codes</>,
    description: (
      <>
        <CustomTranslation
          en="Feel free to use the example code for anything!"
          kr="모든 예제는 오픈 소스로 제공됩니다."
        />
        <br />
        <CustomTranslation
          en="Check final output examples in Try Demo menu."
          kr="프로젝트에 필요한 리소스들을 마음껏 활용하세요."
        />
      </>
    ),
    rightBorder: true,
    sizes: "(max-width: 768px) 121px",
    className: "h-[141px]",
  },
  {
    Svg: "/img/DiveInto/game-developer-friendly.svg",
    title: <>We want to help you</>,
    description: (
      <>
        <CustomTranslation
          en="Building Web3 games can be tough."
          kr="각 세션의 댓글을 통해 서로 묻고 답하며"
        />
        <br />
        <CustomTranslation
          en="Share questions in the comments for help any time!"
          kr="Web3 게임을 함께 만들어요."
        />
      </>
    ),
    rightBorder: false,
    sizes: "(max-width: 768px) 158px",
    className: "h-[132px]",
  },
];

function Feature({
  Svg,
  title,
  description,
  rightBorder,
  sizes,
  className,
}: FeatureItem) {
  return (
    <div
      className={clsx(
        "flex flex-1 justify-center items-center",
        styles.card,
        rightBorder && [styles.rightBorder]
      )}
    >
      <div className="flex flex-1 gap-[27px] items-center flex-col md:flex-col px-[16px] justify-between">
        <div className={clsx("h-[141px]")}>
          <img
            src={Svg}
            className={clsx(className)}
            alt="featureimg"
            sizes={sizes}
          />
        </div>
        <div>
          <div className="font-bold text-[26px] leading-[31px] text-black text-center md:mb-[16px]">
            {title}
          </div>
          <div
            className={clsx("text-black text-center", {
              " text-[14px] font-medium leading-[24px]":
                i18n.currentLocale === "en",
              "text-[16px] font-normal leading-[28px]":
                i18n.currentLocale === "ko-kr",
            })}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DiveInto(): JSX.Element {
  return (
    <section className="h-[1200px] md:h-[684px] bg-[#00B2FF] relative flex justify-center items-center px-[16px] max-w-screen">
      <img
        className={styles.ellipsis}
        src={`/img/DiveInto/ellipsis.svg`}
        alt="ellipsis"
        sizes="(min-width: 1780px) 303px"
      />
      <img
        className={styles.square}
        src={`/img/DiveInto/square.svg`}
        alt="square"
        sizes="(min-width: 1780px) 308px"
      />
      <div className="max-w-[1180px] h-full flex flex-1 justify-center items-center z-10">
        <div className="flex flex-col max-[700px]:h-full flex-1 md:gap-[57px]">
          <span className="text-[#000000] flex md:flex-1 justify-center font-bold md:text-[50px] text-[40px] leading-[60px]">
            Dive into
            {isMobile ? <br /> : ` `}
            XPLA ACADEMY
          </span>
          <div className="flex-col md:flex-row flex flex-1 gap-[0px]">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
