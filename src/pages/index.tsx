import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import useMoveScrool from "../hooks/useMoveScroll";
import PlayGame from "../components/Homepage/PlayGame";
import IntroduceTutorial from "../components/Homepage/IntroduceTutorial";
import DevResource from "../components/Homepage/DevResource";
import JoinCommunity from "../components/Homepage/JoinCommunity";
import {
  WalletControllerChainOptions,
  getChainOptions,
} from "@xpla/wallet-provider";

function HomepageHeader({ onMoveToElement }: { onMoveToElement: () => void }) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className="h-[800px] flex justify-center px-[16px]">
      <div className="max-w-[1180px] flex flex-1 justify-start items-center relative">
        <div className="flex flex-col max-w-[576px] pb-[100px]">
          <span className="text-[70px] font-bold">{siteConfig.title}</span>
          <span className="text-[28px] font-medium leading-[36px]">
            {siteConfig.tagline}
          </span>
          <div className="flex gap-[20px] mt-[72px]">
            <Link
              to="/docs/overview/intro"
              className="bg-[#C9FF00] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px] text-[#000000] hover:text-[#000000] hover:no-underline"
            >
              <span className="font-bold text-[20px] ">Learn Now</span>
            </Link>
            <div
              className="bg-[#fff] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px]"
              onClick={onMoveToElement}
            >
              <span className="font-bold text-[20px]">Dev Resources</span>
            </div>
          </div>
        </div>
        <img className={styles.explorerPlay}
            src={`/xpla-academy-dev/img/Homepage/explorer-play.svg`}
          />
        <img className={styles.earth}
          src={`/xpla-academy-dev/img/Homepage/earth.svg`}
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { element: moveToElement, onMoveToElement } = useMoveScrool();

  const [chainOptions, setChainoptions] =
    useState<WalletControllerChainOptions>();

  useEffect(() => {
    getChainOptions()
      .then((c) => setChainoptions(c))
      .catch((e) => {
        console.log(e);
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
        <IntroduceTutorial />
        <DevResource moveToElement={moveToElement} />
        <JoinCommunity />
      </main>
    </Layout>
  );
}
