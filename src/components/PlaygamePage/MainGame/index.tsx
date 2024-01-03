import React from "react";
import "./MainGame.css";
import SouthIcon from "@mui/icons-material/South";
import useMediaQuery from "@mui/material/useMediaQuery";
import Cocosgame from "../../Cocosgame";
const MainGame = () => {
  const isMobile = useMediaQuery("(max-width:920px)");

  return (
    <div
      className={`h-full min-w-[100vw] flex justify-center items-center relative px-[10px] overflow-hidden`}
    >
      <div className="maingame-bg" />
      {isMobile ? <img 
      className="z-10"
      alt="onlyavailablepc"
      src="/img/PlayGame/comingsoon.svg" /> : <Cocosgame />}
      <div className="absolute bottom-[47px] arrow-hidden ">
        <SouthIcon style={{ fill: "#FAED00", fontSize: 55 }} />
      </div>
    </div>
  );
};

export default MainGame;
