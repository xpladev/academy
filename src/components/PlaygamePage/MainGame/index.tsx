import React from "react";
import "./MainGame.css";
import SouthIcon from "@mui/icons-material/South";
import Cocosgame from "../../Cocosgame";
const MainGame = () => {
  return (
    <div
      className={`h-full min-w-[100vw] flex justify-center items-center relative`}
    >
      <div className="maingame-bg"/> 
      <Cocosgame />
      <div className="absolute bottom-[47px] arrow-hidden ">
        <SouthIcon style={{ fill: "#FAED00", fontSize : 55 }} />
      </div>
    </div>
  );
};

export default MainGame;
