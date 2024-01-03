import React from "react";
import Layout from "@theme/Layout";
import RowFullPageScroll from "@site/src/components/PlaygamePage/RowFullPageScroll";
import ColFullPageScrollFirst from "@site/src/components/PlaygamePage/ColFullPageScrollFirst";
import ColFullPageScrollSecond from "@site/src/components/PlaygamePage/ColFullPageScrollSecond";
import MainGame from "@site/src/components/PlaygamePage/MainGame";
import AboutGame from "@site/src/components/PlaygamePage/AboutGame";
import StartHere from "@site/src/components/PlaygamePage/StartHere";
import Advanced from "@site/src/components/PlaygamePage/Advanced";
import Footer from "@theme/Footer";

export default function Playgame(): JSX.Element {
  return (
    <Layout
      title={`XPLA ACADEMY`}
      description="Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."
      wrapperClassName="overflow-y-hidden overflow-x-hidden"
      noFooter
    >
      <ColFullPageScrollFirst>
      <MainGame />
        <RowFullPageScroll>
          <AboutGame />
          <StartHere />
          <ColFullPageScrollSecond>
            <Advanced />
            <div className={`h-[70%] min-w-[100vw] bg-[#234651]`}></div>
            <Footer />
          </ColFullPageScrollSecond>
        </RowFullPageScroll>
      </ColFullPageScrollFirst>
    </Layout>
  );
}