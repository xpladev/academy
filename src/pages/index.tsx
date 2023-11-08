import React, { useEffect, useRef, useState } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

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
        <div className="flex flex-col max-w-[576px] pb-[100px]">
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
            Master the world of XPLA step by step.
          </span>
          <span className="text-[24px] font-normal leading-[29px]">
            Your projects are just a click away!
          </span>
          <div className="flex gap-[20px] mt-[40px]">
            <Link
              aria-label="open-tutorial"
              to="/docs/overview/intro"
              className="bg-[#C9FF00] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px] text-[#000000] hover:text-[#000000] hover:no-underline"
            >
              <span className="font-medium text-[20px] ">Start Now</span>
            </Link>
            <div
              className="bg-[#fff] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px]"
              onClick={onMoveToElement}
            >
              <span className="font-medium text-[20px]">Dev Resources</span>
            </div>
          </div>
        </div>
        <img
          className={
            "hidden lg:block lg:w-[40%] lg:static	lg:w-[50%] 2xl:top-[71px] 2xl:left-[618px] 2xl:absolute"
          }
          src={`/img/Homepage/explorer-play.svg`}
          alt="explorer-play"
          sizes="(min-width: 1024px) 590px"
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
      console.log(11);
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
        <HomepageFeatures />
        <PlayGame moveToElement={playgameElement} />
        <IntroduceTutorial />
        <DevResource moveToElement={devResourceElement} />
        <JoinCommunity />
        <ContactUs />
      </main>
    </Layout>
  );
}
