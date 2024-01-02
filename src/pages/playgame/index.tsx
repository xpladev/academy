import React from "react";
import Layout from "@theme/Layout";
import RowFullPageScroll from "@site/src/components/PlaygamePage/RowFullPageScroll";
import ColFullPageScrollFirst from "@site/src/components/PlaygamePage/ColFullPageScrollFirst";
import ColFullPageScrollSecond from "@site/src/components/PlaygamePage/ColFullPageScrollSecond";
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
        <div className={`h-full min-w-[100vw] bg-[#123456]`}></div>
        <RowFullPageScroll>
          <div className={`h-full min-w-[100vw] bg-[#456231]`}></div>
          <div className={`h-full min-w-[100vw] bg-[#123411]`}></div>
          <ColFullPageScrollSecond>
            <div className={`h-full min-w-[100vw] bg-[#652131]`}></div>
            <div className={`h-[70%] min-w-[100vw] bg-[#234651]`}></div>
            <Footer />
          </ColFullPageScrollSecond>
        </RowFullPageScroll>
      </ColFullPageScrollFirst>
    </Layout>
  );
}