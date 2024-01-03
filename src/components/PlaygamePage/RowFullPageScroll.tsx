import React, { useEffect, useRef } from "react";

const RowFullPageScroll = ({ children, outerDivRef, currentPage }) => {
  const canScroll = useRef<boolean>(true);
  const timer = useRef(null);
  const delay = 300;

  const scrollDown = () => {
    const pageWidth = outerDivRef.current?.children.item(0)?.clientWidth;
    if (outerDivRef.current && pageWidth) {
      outerDivRef.current.scrollTo({
        left: pageWidth * (currentPage.current + 1),
        top: 0,
        behavior: "smooth",
      });
      canScroll.current = false;
      setTimeout(() => {
        canScroll.current = true;
      }, 500);
      if (outerDivRef.current.childElementCount - 1 > currentPage.current)
        currentPage.current++;
    }
  };

  const scrollUp = () => {
    const pageWidth = outerDivRef.current?.children.item(0)?.clientWidth;
    if (outerDivRef.current && pageWidth) {
      outerDivRef.current.scrollTo({
        left: pageWidth * (currentPage.current - 1),
        top: 0,
        behavior: "smooth",
      });
      canScroll.current = false;
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

  const resizeHandler = (e: Event) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(function () {
      const pageWidth = outerDivRef.current?.children.item(0)?.clientWidth;
      outerDivRef.current.scrollTo({
        left: pageWidth * currentPage.current,
        top: 0,
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
    <div ref={outerDivRef} className="h-full w-screen flex overflow-x-hidden">
      {children}
    </div>
  );
};

export default RowFullPageScroll;
