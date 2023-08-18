import React from "react";
import Cocosgame from "../../Cocosgame";

export default function PlayGame(): JSX.Element {
  return (
    <section className="h-[1272px] flex flex-col justify-center items-center gap-[78px]">
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-[50px] leading-[60px]">
          Explore & Play the demo
        </div>
        <div className="font-bold text-[50px] leading-[60px]">
          Experience game building on XPLA
        </div>
      </div>
      <img src="/img/PlayGame/comingsoon.svg" />
      {/* <Cocosgame /> */}
    </section>
  );
}
