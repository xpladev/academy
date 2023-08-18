import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import "./index.css";
import Link from "@docusaurus/Link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";

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
    
  const items: SliderItemType[] = [
    {
      title: ["Straightforward", "Steps to Integrate XPLA!"],
      color: "#F93AC3",
      contents: [
        {
          link: "/docs/category/lets-get-your-wallet-ready",
          description: (
            <div className="font-semibold text-[24px] h-[197px]">
              Experience the<br/>
              TESTNET!<br/>
              Create a WALLET<br/>
              Make your first<br/>
              <span className="font-bold text-[24px]">TRANSACTIONS!</span>
            </div>
          ),
        },
        {
          link: "/docs/category/utilize-tokens-cw20",
          description: (
            <div className="font-semibold text-[24px] h-[197px]">
              Play with your Creation!<br/>
              Issue <span className="font-bold text-[24px]">TOKENS</span>
            </div>
          ),
        },
        {
          link: "/docs/category/utilize-nftcw721",
          description: (
            <div className="font-semibold text-[24px] h-[197px]">
              Play with your<br/>
              Creation!<br/>
              Issue  <span className="font-bold text-[24px]">NFT</span>
            </div>
          ),
        },
      ],
    },
    {
      title: ["Straightforward", "Steps to Integrate XPLA!"],
      color: "#C9FF00",
      contents: [
        {
          link: "/docs/category/advenced---dive-deep-into-xpla-blockchain",
          description: (
            <div className="font-semibold text-[24px] h-[197px]">
              Stand out with <br/>
              <span className="font-bold text-[24px]">
                ADVANCED <br/>
                COURSES!
              </span>
            </div>
          ),
        },
        {
          link: "/docs/tutorial/deep-understand-xpla/local-network",
          description: (
            <div className="font-semibold text-[24px] h-[197px]">
              Make your own <br/>
              space!<br/>
              <span className="font-bold text-[24px]">XPLA </span>Local Network
            </div>
          ),
        },
        {
          link: "/docs/tutorial/deep-understand-xpla/account-sequence",
          description: (
            <div className="font-semibold text-[24px] h-[197px]">
              Multi-Send<br/>
              <span className="font-bold text-[24px]">$XPLA!</span>
            </div>
          ),
        },
      ],
    },
    {
      title: ["Straightforward", "Steps to Integrate XPLA!"],
      color: "#FFE200",
      contents: [
        {
          link: "/docs/tutorial/deep-understand-xpla/walletprovider",
          description: (
            <div className="font-semibold text-[24px] h-[197px]">
              Integrate<br/>
              <span className="font-bold text-[24px]">WALLET</span><br/>
              <span className="font-bold text-[24px]">CONNECT!</span>
            </div>
          ),
        },
        {
          link: "/docs/tutorial/deep-understand-xpla/write-contract",
          description: (
            <div className="font-semibold text-[24px] h-[197px]">
              Deploy your own<br/>
              <span className="font-bold text-[24px]">CONTRACT </span>on<br/>
              <span className="font-bold text-[24px]">XPLA</span>
            </div>
          ),
        },
        {
          description: (
            <div className="font-semibold text-[24px] h-[197px]">
              Exchange<br/>
              Tokens with<br/>
              <span className="font-bold text-[24px]">CONVERT!</span><br />
              (Coming Soon)
            </div>
          ),
        },
      ],
    },
  ];

  const settings = {
    dots: true,
    autoplay : true,
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
            <SliderItem {...props} />
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
        <div className="font-bold text-[50px] text-center leading-tight">
          {title.map((t, titleIdx) => (
            <div key={titleIdx}>{t}</div>
          ))}
        </div>
        <div className="flex gap-5 w-[100%]">
          {contents.map((content, contentIdx) => (
            <Link
              to={content.link}
              key={contentIdx}
              className={clsx(
                "flex flex-col justify-between text-[#000000] hover:text-[#000000]",
                styles.card
              )}
              style={{ textDecoration: "none" }}
            >
              <img
                className="w-12"
                src={`/img/IntroduceTutorial/quotationMark.svg`}
              />
              {content.description}
              <div className="flex justify-end">
                <img
                  className="w-[51px]"
                  src={`/img/IntroduceTutorial/right-arrow.svg`}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
