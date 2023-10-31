import React from "react";
import { USERINFO } from "..";
import UserStatus from "./UserStatus";
import Inventory from "./Inventory";
import MainNavbar from "./MainNavbar";
import Convert from "./Contents/Convert";
import Swap from "./Contents/Swap";
import Nftshop from "./Contents/Nftshop";
import Leaderboard from "./Contents/Leaderboard";

export default function Main({
  userInfo,
  setUserInfo,
  setShowTool
}: {
  userInfo: USERINFO;
  setUserInfo: React.Dispatch<React.SetStateAction<USERINFO>>;
  setShowTool:  React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="relative flex justify-center w-full">
      <div className="flex gap-[20px] max-w-[1180px] py-[30px] w-full mx-[20px]">
        <div className="border-solid border-[1px] w-full max-w-[380px] bg-[#EAF8FF]">
          {/* UserStatus */}
          <UserStatus setShowTool={setShowTool} userId={userInfo?.id || ""} />
          <Inventory
            diamond={userInfo?.diamond || 0}
            xplaBalance={userInfo?.xplaBalance || "0"}
            tokenBalance={userInfo?.tokenBalance || "0"}
          />
        </div>
        <div className="flex flex-col w-full gap-[20px]">
          <MainNavbar />
          {(window.location.hash === "#convert" ||
            window.location.hash === "") && <Convert userInfo={userInfo} setUserInfo={setUserInfo}/>}
          {window.location.hash === "#swap" && <Swap userInfo={userInfo} setUserInfo={setUserInfo} />}
          {window.location.hash === "#nftshop" && <Nftshop userInfo={userInfo} setUserInfo={setUserInfo}/>}
          {window.location.hash === "#leaderboard" && <Leaderboard userInfo={userInfo} setUserInfo={setUserInfo}/>}
        </div>
      </div>
    </div>
  );
}
