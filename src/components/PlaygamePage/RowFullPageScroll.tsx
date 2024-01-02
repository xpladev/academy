import React, { useEffect, useRef } from "react";

const RowFullPageScroll = ({ children }) => {
  const outerDivRef = useRef<HTMLDivElement>(null);
  const currentPage = useRef<number>(0);
  const canScroll = useRef<boolean>(true);

  const scrollDown = () => {
    const pageWidth = outerDivRef.current?.children.item(0)?.clientWidth;
    if (outerDivRef.current && pageWidth) {
      canScroll.current = false;
      outerDivRef.current.scrollTo({
        left: pageWidth * (currentPage.current + 1),
        top: 0,
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
    const pageWidth = outerDivRef.current?.children.item(0)?.clientWidth;
    if (outerDivRef.current && pageWidth) {
      canScroll.current = false;
      outerDivRef.current.scrollTo({
        left: pageWidth * (currentPage.current - 1),
        top: 0,
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
    <div ref={outerDivRef} className="h-full w-screen flex overflow-x-hidden">
      {children}
    </div>
  );
};

export default RowFullPageScroll;
