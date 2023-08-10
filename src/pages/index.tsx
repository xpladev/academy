import React, { useEffect, useRef, useState } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import PlayGame from "../components/Homepage/PlayGame";
import DevResource from "../components/Homepage/DevResource";
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
      <div className="max-w-[1180px] flex flex-1 justify-start items-center relative">
        <div className="flex flex-col max-w-[576px] pb-[100px]">
          <span className="text-[70px] font-bold">{siteConfig.title}</span>
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
          className={styles.explorerPlay}
          src={`/xpla-academy-dev/img/Homepage/explorer-play.svg`}
        />
        <img
          className={styles.earth}
          src={`/xpla-academy-dev/img/Homepage/earth.svg`}
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const element = useRef<HTMLDivElement>(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader onMoveToElement={onMoveToElement} />
      <main>
        <HomepageFeatures />
        <PlayGame />
        <DevResource moveToElement={element} />
        {/* <IntroduceTutorial /> */}
        <JoinCommunity />
        <ContactUs />
      </main>
    </Layout>
  );
}
