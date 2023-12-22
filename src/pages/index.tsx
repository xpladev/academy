import React, { useEffect, useRef, useState } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import AboutXPLAAcademy from "@site/src/components/Homepage/AboutXPLAAcademy";
import DiveInto from "@site/src/components/Homepage/DiveInto";

import styles from "./index.module.css";
import PlayGame from "../components/Homepage/PlayGame";
import DevResource from "../components/Homepage/DevResource";
import IntroduceTutorial from "../components/Homepage/IntroduceTutorial";
import ContactUs from "../components/Homepage/ContactUs";
import JoinCommunity from "../components/Homepage/JoinCommunity";

import {
  WalletControllerChainOptions,
  getChainOptions,
} from "@xpla/wallet-provider";

function HomepageHeader({ onMoveToElement }: { onMoveToElement: () => void }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="h-[800px] flex justify-center px-[16px] bg-[#F5F4F4]">
      <div className="max-w-[1180px] flex flex-1 justify-between items-center relative">
        <div className="flex flex-col max-w-[638px] pb-[5px]">
          <img
            className="mb-[30px]"
            src={`/img/Homepage/xpla-academy.svg`}
            alt="xpla-academy"
            width="564px"
            height="55px"
          />
          <span className="text-[29px] font-semibold leading-[36px] mb-[10px]">
            {siteConfig.tagline}
          </span>
          <span className="text-[24px] font-normal leading-[29px]">
          Educational content related to blockchain development,
          </span>
          <span className="text-[24px] font-normal leading-[29px]">
          smart contracts, and game tokenomic systems all provided!
          </span>
          <div className="mt-[56px] font-medium text-[24px] leading-[29px] text-[#004FFF]">
          Your projects are just a click away!
          </div>
          <div className="flex gap-[20px] mt-[19px]">
            <Link
              aria-label="open-tutorial"
              to="/startlearning/overview/intro"
              className="bg-[#C9FF00] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px] text-[#000000] hover:text-[#000000] hover:no-underline"
            >
              <span className="font-medium text-[20px] ">Start Learning</span>
            </Link>
            <Link
              aria-label="open-tutorial"
              to="/playgame"
              className="bg-[#fff] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px] text-[#000000] hover:text-[#000000] hover:no-underline"
            >
              <span className="font-medium text-[20px]">Play Game</span>
            </Link>
          </div>
        </div>
        <img
          className={
            "hidden lg:block max-[1536px]:w-[50%] lg:static 2xl:top-[71px] 2xl:left-[634px] 2xl:absolute"
          }
          src={`/img/Homepage/explorer-play.svg`}
          alt="explorer-play"
          sizes="(min-width: 1024px) 674px"
        />
        <img
          className={styles.earth}
          src={`/img/Homepage/earth.svg`}
          alt="earth"
          sizes="(min-width: 900px) 185px"
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const devResourceElement = useRef<HTMLDivElement>(null);
  const onMoveTodevResourceElement = () => {
    var headerOffset = 80;
    var elementPosition =
      devResourceElement.current.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const playgameElement = useRef<HTMLDivElement>(null);
  const onMoveToPlaygameElement = () => {
    var headerOffset = 80;
    var elementPosition = playgameElement.current.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (window.location.hash === "#playgame") {
      onMoveToPlaygameElement();
    }
  }, []);

  const [chainOptions, setChainoptions] =
    useState<WalletControllerChainOptions>();

  useEffect(() => {
    getChainOptions()
      .then((c) => setChainoptions(c))
      .catch((e) => {
        // console.log(e);
      });
  }, []);

  return (
    <Layout
      title={`XPLA ACADEMY`}
      description="Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."
    >
      <HomepageHeader onMoveToElement={onMoveTodevResourceElement} />
      <main>
        <AboutXPLAAcademy />
        <DiveInto />
        <PlayGame moveToElement={playgameElement} />
        <IntroduceTutorial />
        <DevResource moveToElement={devResourceElement} />
        <JoinCommunity />
        <ContactUs />
      </main>
    </Layout>
  );
}
