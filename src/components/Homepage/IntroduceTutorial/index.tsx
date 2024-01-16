import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import "./index.css";
import Link from "@docusaurus/Link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import CustomTranslation from "@site/src/util/CustomTranslation";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

interface SliderItemType {
  title: string[];
  contents: {
    link?: string;
    description: JSX.Element;
  }[];
  color: string;
}

export default function IntroduceTutorial(): JSX.Element {
  const ref = useRef(null);
  const sliderRef = useRef();
  const matches = useMediaQuery("(max-width:768px)");
  const { i18n } = useDocusaurusContext();

  const items: SliderItemType[] = [
    {
      title: [
        i18n.currentLocale === "en" ? "Get to know Web3" : "XPLA를 통해",
        i18n.currentLocale === "en" ? "with XPLA!" : "Web3 기본기 진입하기",
      ],
      color: "#F93AC3",
      contents: [
        {
          link: "/startlearning/category/lets-get-your-wallet-ready",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              <CustomTranslation
                en="Experience the TESTNET!"
                kr="Wallet을 만들고 Testnet에서"
              />
              <br />
              <CustomTranslation
                en="Create a WALLET, Make your first"
                kr="Transaction 실행시키기"
              />
              <span className="font-bold text-[20px]"> TRANSACTIONS!</span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              <CustomTranslation en="Experience the" kr="Wallet을 만들고," />
              <br />
              <CustomTranslation en="TESTNET!" kr="Testnet에서" />
              <br />
              <CustomTranslation en="Create a WALLET" kr="Transaction" />
              <br />
              <CustomTranslation en="Make your first" kr="실행시키기" />
              <br />
              <span className="font-bold text-[24px]">
                <CustomTranslation en="TRANSACTIONS!" kr="" />
              </span>
            </div>
          ),
        },
        {
          link: "/startlearning/category/utilize-tokens-cw20",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              <CustomTranslation en="Play with your Creation!" kr="나만의" />
              <br />
              <CustomTranslation en="Issue" kr="토큰 만들기" />
              <span className="font-bold text-[20px]">
                {" "}
                <CustomTranslation en=" TOKENS" kr="" />
              </span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              <CustomTranslation en="Play with your Creation!" kr="나만의" />
              <br />
              <CustomTranslation en="Issue" kr="토큰 만들기" />
              <span className="font-bold text-[24px]">
                <CustomTranslation en=" TOKENS" kr="" />
              </span>
            </div>
          ),
        },
        {
          link: "/startlearning/category/utilize-nftcw721",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              <CustomTranslation en="Play with your Creation!" kr="나만의" />
              <br />
              <CustomTranslation en="Issue" kr="NFT 만들기" />
              <span className="font-bold text-[20px]">
                {" "}
                <CustomTranslation en=" NFT" kr="" />
              </span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              <CustomTranslation en="Play with your" kr="나만의" />
              <br />
              <CustomTranslation en="Creation!" kr="NFT 만들기" />
              <br />
              <CustomTranslation en="Issue" kr="" />
              <span className="font-bold text-[24px]">
                <CustomTranslation en=" NFT" kr="" />
              </span>
            </div>
          ),
        },
      ],
    },
    {
      title: [
        i18n.currentLocale === "en" ? "Be a pro with" : "실전에 바로 쓰는",
        i18n.currentLocale === "en"
          ? "ADVANCED COURSES!"
          : "심화 정보 파악하기",
      ],
      color: "#C9FF00",
      contents: [
        {
          link: "/startlearning/tutorial/deep-understand-xpla/local-network",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              <CustomTranslation
                en="Make your own space!"
                kr="XPLA Local Network로"
              />
              <br />
              <span className="font-bold text-[20px]">
                <CustomTranslation
                  en="XPLA Local Network"
                  kr="나만의 개발 환경 구축하기"
                />
              </span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              <CustomTranslation en="Make your own" kr="XPLA Local Network를" />
              <br />
              <CustomTranslation en="space!" kr="활용하여" />
              <br />
              <span className="font-bold text-[24px]">
                {" "}
                <CustomTranslation en="XPLA " kr="" />
              </span>
              <CustomTranslation
                en="Local Network"
                kr="나만의 개발 환경 구축하기"
              />
            </div>
          ),
        },
        {
          link: "/startlearning/tutorial/deep-understand-xpla/account-sequence",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              <CustomTranslation en="Learn about" kr="" />
              <br />
              <span className="font-bold text-[20px]">
                Account number{" "}
                <span className="font-semibold">
                  {" "}
                  <CustomTranslation en="and" kr="&" />
                </span>{" "}
                <CustomTranslation en="Sequence!" kr="Sequence" />
              </span>
              <CustomTranslation en="" kr=" 알아보기" />
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              <CustomTranslation en="Learn about" kr="" />
              {i18n.currentLocale === "en" && <br />}
              <span className="font-bold text-[24px]">
                Account number{" "}
                <span className="font-semibold">
                  {" "}
                  <CustomTranslation en="and" kr="&" />
                </span>
              </span>
              <br />
              <span className="font-bold text-[24px]">
                {" "}
                <CustomTranslation en="Sequence!" kr="Sequence" />
              </span>
              <CustomTranslation en="" kr=" 알아보기" />
            </div>
          ),
        },
        {
          link: "/startlearning/tutorial/deep-understand-xpla/walletprovider",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              <CustomTranslation en="Integrate" kr="Wallet Connect" />
              <br />
              <span className="font-bold text-[20px]">
                <CustomTranslation en="WALLET CONNECT!" kr="" />
              </span>
              <CustomTranslation en="" kr="도입하기" />
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              <CustomTranslation en="Integrate" kr="Wallet Connect" />
              <br />
              <span className="font-bold text-[24px]">
                <CustomTranslation en="WALLET " kr="" />
              </span>
              {i18n.currentLocale === "en" && <br />}
              <span className="font-bold text-[24px]">
                <CustomTranslation en="CONNECT!" kr="" />
              </span>
              <CustomTranslation en="" kr="도입하기" />
            </div>
          ),
        },
      ],
    },
    {
      title: [
        i18n.currentLocale === "en"
          ? "Add Web3 to your project"
          : "XPLA와 연결되는",
        i18n.currentLocale === "en" ? "with XPLA!" : "Web3 프로젝트 빌드하기",
      ],
      color: "#FFE200",
      contents: [
        {
          link: "/startlearning/tutorial/deep-understand-xpla/write-contract",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              <CustomTranslation
                en="Deploy your own"
                kr="나만의 Contract 작성하고"
              />
              <br />
              <span className="font-bold text-[20px]">
                <CustomTranslation en="CONTRACT on XPLA" kr="" />
              </span>
              <CustomTranslation en="" kr="XPLA에서 실행하기" />
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              <CustomTranslation en="Deploy your own" kr="나만의" />
              <br />
              <span className="font-bold text-[24px]">
                <CustomTranslation en="CONTRACT" kr="" />{" "}
              </span>
              <CustomTranslation en="on" kr="Contract 작성하고" />
              <br />
              <span className="font-bold text-[24px]">
                <CustomTranslation en="XPLA" kr="" />
              </span>
              <CustomTranslation en="" kr="XPLA에서 실행하기" />
            </div>
          ),
        },
        {
          description: matches ? (
            <span className="font-semibold text-[20px]">
              <CustomTranslation en="Exchange Tokens with" kr="CONVERT" />
              <br />
              <span className="font-bold text-[20px]">
                <CustomTranslation en="CONVERT!" kr="" />
              </span>
              <CustomTranslation en="" kr="알아보기" />
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              <CustomTranslation en="Exchange" kr="CONVERT" />
              {i18n.currentLocale === "en" && <br />}
              <CustomTranslation en="Tokens with" kr="" />
              <br />
              <span className="font-bold text-[24px]">
                <CustomTranslation en="CONVERT!" kr="" />
              </span>
              <CustomTranslation en="" kr="알아보기" />
            </div>
          ),
        },
        {
          link: "/startlearning/tutorial/deep-understand-xpla/swap",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              <CustomTranslation en="Exchange Tokens" kr="SWAP" />
              <br />
              <span className=" text-[20px]">
                <CustomTranslation en="to $XPLA with" kr="알아보기" />
                <span className="font-bold">
                  <CustomTranslation en="SWAP!" kr="" />
                </span>
              </span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              <CustomTranslation en="Exchange" kr="SWAP" />
              {i18n.currentLocale === "en" && <br />}
              <CustomTranslation en="Tokens to $XPLA with" kr="" />
              <br />
              <span className="font-bold">
                <CustomTranslation en="SWAP!" kr="" />
              </span>
              <CustomTranslation en="" kr="알아보기" />
            </div>
          ),
        },
      ],
    },
  ];

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="h-[833px]" ref={ref}>
      <div
        className={clsx("w-full h-full", styles.slickSet, styles.dotsCustom)}
      >
        <Slider
          ref={sliderRef}
          {...settings}
          // dotsClass={styles.dotsCustom}
        >
          {items.map((props) => (
            <React.Fragment key={props.title}>
              <SliderItem {...props} />
            </React.Fragment>
          ))}
        </Slider>
      </div>
    </section>
  );
}

const SliderItem = ({ title, color, contents }: SliderItemType) => {
  return (
    <div
      className="flex justify-center items-center w-[100%] h-[100%] px-[16px]"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="w-[1180px] flex flex-col items-center justify-center gap-[58px] mb-[60px]">
        <div className="font-bold text-[30px] md:text-[50px] text-center leading-tight">
          {title.map((t, titleIdx) => (
            <div key={titleIdx}>{t}</div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-5 w-[100%]">
          {contents.map((content, contentIdx) => (
            <Link
              to={content.link}
              key={contentIdx}
              className={clsx(
                "flex flex-col justify-center text-[#000000] hover:text-[#000000]",
                styles.card
              )}
              style={{ textDecoration: "none" }}
              aria-label={"content-link" + content.link}
            >
              <img
                className={clsx("w-12 md:mb-[30px]", styles.quotationMark)}
                src={`/img/IntroduceTutorial/quotationMark.svg`}
                alt="questionMark"
                width="48px"
                height="36px"
              />
              {content.description}
              <div className="flex justify-end">
                <img
                  className={clsx("w-[51px]", styles.quotationMark)}
                  src={`/img/IntroduceTutorial/right-arrow.svg`}
                  alt="right-arrow"
                  width="51px"
                  height="20px"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
