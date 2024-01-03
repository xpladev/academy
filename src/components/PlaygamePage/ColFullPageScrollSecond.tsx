import React, { useEffect, useRef } from "react";

const ColFullPageScrollSecond = ({ children, outerDivRef, currentPage, canScroll, scrollDelay }) => {
  const timer = useRef(null);
  const delay = 300;

  const scrollDown = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;
    if (outerDivRef.current && pageHeight) {
      outerDivRef.current.scrollTo({
        top: pageHeight * (currentPage.current + 1),
        left: 0,
        behavior: "smooth",
      });
      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, scrollDelay);
      if (outerDivRef.current.childElementCount - 1 > currentPage.current)
        currentPage.current++;
    }
  };

  const scrollUp = () => {
    const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;
    if (currentPage.current > 0 && outerDivRef.current && pageHeight) {
      outerDivRef.current.scrollTo({
        top: pageHeight * (currentPage.current - 1),
        left: 0,
        behavior: "smooth",
      });
      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, scrollDelay);
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

  const resizeHandler = (e: Event) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(function () {
      const pageHeight = outerDivRef.current?.children.item(0)?.clientHeight;
      outerDivRef.current.scrollTo({
        top: pageHeight * currentPage.current,
        left: 0,
        behavior: "smooth",
      });
    }, delay);
  }

  useEffect(() => {
    const outer = outerDivRef.current;
    if (!outer) return;
    outer.addEventListener("wheel", wheelHandler);
    outer.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", resizeHandler);
    return () => {
      outer.removeEventListener("wheel", wheelHandler);
      outer.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
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
