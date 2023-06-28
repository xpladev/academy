import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import useMoveScrool from "../hooks/useMoveScroll";
import XPLACoin3D from "../components/ThreeJS/XPLACoin3D";
import Brain3D from "../components/ThreeJS/Brain3D";
import PlayGame from "../components/Homepage/PlayGame";
import IntroduceTutorial from "../components/Homepage/IntroduceTutorial";

function HomepageHeader({ onMoveToElement }: { onMoveToElement: () => void }) {
  const { siteConfig } = useDocusaurusContext();

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
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/overview/intro"
                >
                  Learn Now
                </Link>
              </div>
              <div className={styles.buttons}>
                <div
                  onClick={onMoveToElement}
                  className="button button--secondary button--lg"
                >
                  Dev Resource
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 h-[500px]">
            <XPLACoin3D />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { element, onMoveToElement } = useMoveScrool();

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
      </main>
    </Layout>
  );
}
