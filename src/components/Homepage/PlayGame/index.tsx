import React from "react";
import Cocosgame from "../../Cocosgame";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function PlayGame(): JSX.Element {
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <section className="h-[900px] md:h-[1272px] flex flex-col justify-center items-center gap-[78px] px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-[50px] leading-[60px]">
          Explore & Play the demo
        </div>
        {
          !matches &&
        <div className="font-bold text-[50px] leading-[60px]">
          Experience game building on XPLA
        </div>
        }
      </div>
      <img src="/img/PlayGame/comingsoon.svg" />
      {/* <Cocosgame /> */}
    </section>
  );
}
