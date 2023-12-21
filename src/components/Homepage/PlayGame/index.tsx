import React from "react";
import Cocosgame from "../../Cocosgame";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function PlayGame({
  moveToElement
} : {
  moveToElement: React.MutableRefObject<HTMLDivElement>;
}): JSX.Element {
  const matches = useMediaQuery("(max-width:996px)");

  return (
    <section 
    ref={moveToElement}
    className="h-[900px] md:h-[1272px] flex flex-col justify-center items-center gap-[78px] px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-[50px] leading-[60px]">
          Explore & Play the demo
        </div>
        {!matches && (
          <div className="font-bold text-[50px] leading-[60px]">
            Experience game building on XPLA
          </div>
        )}
      </div>
      {matches ? <img src="/img/PlayGame/comingsoon.svg" /> : <Cocosgame />}
    </section>
  );
}
