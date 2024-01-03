import React, { useRef } from "react";
import Layout from "@theme/Layout";
import RowFullPageScroll from "@site/src/components/PlaygamePage/RowFullPageScroll";
import ColFullPageScrollFirst from "@site/src/components/PlaygamePage/ColFullPageScrollFirst";
import ColFullPageScrollSecond from "@site/src/components/PlaygamePage/ColFullPageScrollSecond";
import MainGame from "@site/src/components/PlaygamePage/MainGame";
import AboutGame from "@site/src/components/PlaygamePage/AboutGame";
import StartHere from "@site/src/components/PlaygamePage/StartHere";
import Advanced from "@site/src/components/PlaygamePage/Advanced";
import ShowLinkCard from "@site/src/components/PlaygamePage/ShowLinkCard";
import Footer from "@theme/Footer";

export default function Playgame(): JSX.Element {
  const ColFirstOuterDivRef = useRef<HTMLDivElement>(null);
  const ColFirstCurrentPage = useRef<number>(0);

  const RowOuterDivRef = useRef<HTMLDivElement>(null);
  const RowCurrentPage = useRef<number>(0);

  const ColSecondOuterDivRef = useRef<HTMLDivElement>(null);
  const ColSecondCurrentPage = useRef<number>(0);

  return (
    <Layout
      title={`XPLA ACADEMY`}
      description="Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."
      wrapperClassName="overflow-y-hidden overflow-x-hidden"
      noFooter
    >
      <ColFullPageScrollFirst
        outerDivRef={ColFirstOuterDivRef}
        currentPage={ColFirstCurrentPage}
      >
        <MainGame />
        <RowFullPageScroll
          outerDivRef={RowOuterDivRef}
          currentPage={RowCurrentPage}
        >
          <AboutGame />
          <StartHere />
          <ColFullPageScrollSecond
            outerDivRef={ColSecondOuterDivRef}
            currentPage={ColSecondCurrentPage}
          >
            <Advanced />
            <ShowLinkCard />
            <Footer
              scrollToTop={async () => {
                ColSecondCurrentPage.current = 0;
                RowCurrentPage.current = 0;
                ColFirstCurrentPage.current = 0;
                await ColSecondOuterDivRef.current.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                await RowOuterDivRef.current.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                await ColFirstOuterDivRef.current.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            />
          </ColFullPageScrollSecond>
        </RowFullPageScroll>
      </ColFullPageScrollFirst>
    </Layout>
  );
}
