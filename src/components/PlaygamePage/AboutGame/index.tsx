import React from "react";
import SouthIcon from "@mui/icons-material/South";
import HowToPlay from "./HowToPlay";
import useMediaQuery from "@mui/material/useMediaQuery";

const AboutGame = () => {
  const isDesktop = useMediaQuery("(min-width:996px)");

  return (
    <div
      className={`h-full min-w-[100vw] bg-[#7300FF] flex justify-center items-center relative px-[10px]`}
    >
      <div className="flex justify-center items-start gap-[172px]">
        <div className="flex flex-col gap-[57px] text-white text-[26px] leading-[36px] font-normal">
          <img
            width="460px"
            height="141px"
            src="/img/PlayGamePage/aboutgame-title.svg"
            alt="aboutgame-title"
          />
          <div>
            <div className="mb-[30px]">
              Break the Bricks serves as a<br />{" "}
              <span className="font-bold">demo game project</span> for
              <br /> <span className="font-bold">XPLA ACADEMY!</span>
            </div>
            <div>
              You will have an interactive
              <br /> experience of Web3 game
              <br /> that is running via{" "}
              <span className="font-bold">XPLA testnet.</span>
            </div>
          </div>
        </div>
        {isDesktop && <HowToPlay />}
      </div>

      <div className="absolute bottom-[47px] arrow-hidden ">
        <SouthIcon style={{ fill: "#FAED00", fontSize: 55 }} />
      </div>
    </div>
  );
};

export default AboutGame;
