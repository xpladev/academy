import React from "react";
import "./MainGame.css";
import SouthIcon from "@mui/icons-material/South";
import Cocosgame from "../../Cocosgame";
import BrowserOnly from "@docusaurus/BrowserOnly";
const MainGame = () => {

  return (
    <div
      className={`h-full min-w-[100vw] flex justify-center items-center relative px-[10px] overflow-hidden`}
    >
      <div className="maingame-bg" />
      {/* <img
        className="z-10 min-[921px]:hidden"
        alt="onlyavailablepc"
        src="/img/PlayGame/comingsoon.svg"
      /> */}
      <BrowserOnly>
      {
        () => <Cocosgame />
      }
      </BrowserOnly>
      <div className="absolute bottom-[47px] arrow-hidden ">
        <SouthIcon style={{ fill: "#FAED00", fontSize: 55 }} />
      </div>
    </div>
  );
};

export default MainGame;
