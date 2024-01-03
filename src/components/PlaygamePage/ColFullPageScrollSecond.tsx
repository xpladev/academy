import React, { useEffect, useRef } from "react";

const ColFullPageScrollSecond = ({ children, outerDivRef, currentPage }) => {
  // const outerDivRef = useRef<HTMLDivElement>(null);
  // const currentPage = useRef<number>(0);
  const canScroll = useRef<boolean>(true);

  const scrollDown = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;
    if (outerDivRef.current && pageHeight) {
      canScroll.current = false;
      outerDivRef.current.scrollTo({
        top: pageHeight * (currentPage.current + 1),
        left: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        canScroll.current = true;
      }, 500);
      if (outerDivRef.current.childElementCount - 1 > currentPage.current)
        currentPage.current++;
    }
  };

  const scrollUp = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;
    if (outerDivRef.current && pageHeight) {
      canScroll.current = false;
      outerDivRef.current.scrollTo({
        top: pageHeight * (currentPage.current - 1),
        left: 0,
        behavior: "smooth",
      });
      setTimeout(() => {
        canScroll.current = true;
      }, 500);
      if (currentPage.current > 0) currentPage.current--;
    }
  };

  const wheelHandler = (e: WheelEvent) => {
    e.preventDefault();
    if (currentPage.current !== 0 || !canScroll.current) {
      e.stopPropagation();
    }
    if (!canScroll.current) return;
    const { deltaY } = e;
    if (deltaY > 0 && outerDivRef.current) {
      scrollDown();
    } else if (deltaY < 0 && outerDivRef.current) {
      scrollUp();
    }
  };

  const scrollHandler = (e: Event) => {
    e.preventDefault();
  };

  useEffect(() => {
    const outer = outerDivRef.current;
    if (!outer) return;
    outer.addEventListener("wheel", wheelHandler);
    outer.addEventListener("scroll", scrollHandler);
    return () => {
      outer.removeEventListener("wheel", wheelHandler);
      outer.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      ref={outerDivRef}
      className="h-full min-w-[100vw] w-screen overflow-y-hidden"
    >
      {children}
    </div>
  );
};

export default ColFullPageScrollSecond;
