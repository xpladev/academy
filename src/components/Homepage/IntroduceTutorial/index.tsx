import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import "./index.css";
import Link from "@docusaurus/Link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import useMediaQuery from "@mui/material/useMediaQuery";

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

  const items: SliderItemType[] = [
    {
      title: ["Get to know Web3", "with XPLA!"],
      color: "#F93AC3",
      contents: [
        {
          link: "/docs/category/lets-get-your-wallet-ready",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              Experience the TESTNET! <br />
              Create a WALLET, Make your first
              <span className="font-bold text-[20px]"> TRANSACTIONS!</span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              Experience the
              <br />
              TESTNET!
              <br />
              Create a WALLET
              <br />
              Make your first
              <br />
              <span className="font-bold text-[24px]">TRANSACTIONS!</span>
            </div>
          ),
        },
        {
          link: "/docs/category/utilize-tokens-cw20",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              Play with your Creation!
              <br />
              Issue <span className="font-bold text-[20px]">TOKENS</span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              Play with your Creation!
              <br />
              Issue <span className="font-bold text-[24px]">TOKENS</span>
            </div>
          ),
        },
        {
          link: "/docs/category/utilize-nftcw721",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              Play with your Creation!
              <br />
              Issue <span className="font-bold text-[20px]">NFT</span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              Play with your
              <br />
              Creation!
              <br />
              Issue <span className="font-bold text-[24px]">NFT</span>
            </div>
          ),
        },
      ],
    },
    {
      title: ["Be a pro with", "ADVANCED COURSES!"],
      color: "#C9FF00",
      contents: [
        {
          link: "/docs/tutorial/deep-understand-xpla/local-network",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              Make your own space!
              <br />
              <span className="font-bold text-[20px]"> XPLA Local Network</span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              Make your own <br />
              space!
              <br />
              <span className="font-bold text-[24px]">XPLA </span>Local Network
            </div>
          ),
        },
        {
          link: "/docs/tutorial/deep-understand-xpla/account-sequence",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              Learn about 
              <br />
              <span className="font-bold text-[20px]">Account number <span className="font-semibold">and</span> Sequence!</span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              Learn about 
              <br />
              <span className="font-bold text-[24px]">Account number <span className="font-semibold">and</span></span>
              <br />
              <span className="font-bold text-[24px]">Sequence!</span>
            </div>
          ),
        },
        {
          link: "/docs/tutorial/deep-understand-xpla/walletprovider",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              Integrate
              <br />
              <span className="font-bold text-[20px]">WALLET CONNECT!</span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              Integrate
              <br />
              <span className="font-bold text-[24px]">WALLET</span>
              <br />
              <span className="font-bold text-[24px]">CONNECT!</span>
            </div>
          ),
        },
      ],
    },
    {
      title: ["Add Web3 to your project", "with XPLA!"],
      color: "#FFE200",
      contents: [
        {
          link: "/docs/tutorial/deep-understand-xpla/write-contract",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              Deploy your own
              <br />
              <span className="font-bold text-[20px]">CONTRACT on XPLA</span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              Deploy your own
              <br />
              <span className="font-bold text-[24px]">CONTRACT </span>on
              <br />
              <span className="font-bold text-[24px]">XPLA</span>
            </div>
          ),
        },
        {
          description: matches ? (
            <span className="font-semibold text-[20px]">
              Exchange Tokens with
              <br />
              <span className="font-bold text-[20px]">CONVERT! </span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              Exchange
              <br />
              Tokens with
              <br />
              <span className="font-bold text-[24px]">CONVERT!</span>
            </div>
          ),
        },
        {
          link: "/docs/tutorial/deep-understand-xpla/swap",
          description: matches ? (
            <span className="font-semibold text-[20px]">
              Exchange Tokens
              <br />
              <span className=" text-[20px]">to $XPLA with <span className="font-bold">SWAP!</span></span>
            </span>
          ) : (
            <div className="font-semibold text-[24px] h-[197px]">
              Exchange
              <br />
              <span className="text-[24px]">Tokens to $XPLA with</span>
              <br />
              <span className="font-bold text-[24px]">SWAP!</span>
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
