import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import useMoveScrool from "../hooks/useMoveScroll";
import XPLACoin3D from "../components/ThreeJS/XPLACoin3D";
import Pilot from "../components/ThreeJS/Pilot";
import PlayGame from "../components/Homepage/PlayGame";
import IntroduceTutorial from "../components/Homepage/IntroduceTutorial";
import DevResource from "../components/Homepage/DevResource";
import JoinCommunity from "../components/Homepage/JoinCommunity";
import { WalletControllerChainOptions, getChainOptions } from "@xpla/wallet-provider";

function HomepageHeader({ onMoveToElement }: { onMoveToElement: () => void }) {
  const { siteConfig } = useDocusaurusContext();

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
    <header
      className={clsx("hero", styles.heroBanner)}
      style={{ boxShadow: "0 0.5px 1px 0 rgba(0, 0, 0, 0.1)" }}
    >
      <div className="container py-8">
        <div className="flex justify-center items-center">
          <div className="flex-1">
            <h1 className="hero__title text-left">{siteConfig.title}</h1>
            <p className="hero__subtitle text-left">{siteConfig.tagline}</p>
            <div className="py-8 flex gap-[28px] justify-start">
              <div className={styles.buttons}>
                <div className="boxtest-1">
                  Learn Now
                </div>
              </div>
              <div className={styles.buttons}>
                <div
                  className="boxtest-2"
                >
                  Dev Resource
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 h-[500px]">
            <Pilot />
            {/* <XPLACoin3D /> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { element : moveToElement, onMoveToElement } = useMoveScrool();

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
        <DevResource moveToElement={moveToElement}/>
        <JoinCommunity />
      </main>
    </Layout>
  );
}
