import React from "react";
import { USERINFO } from "@site/src/hooks/Store/useUserInfo";

import UserStatus from "./UserStatus";
import Inventory from "./Inventory";
import MainNavbar from "./MainNavbar";
import Convert from "./Contents/Convert";
import Swap from "./Contents/Swap";
import Nftshop from "./Contents/Nftshop";
import Leaderboard from "./Contents/Leaderboard";

export default function Main() {
  return (
    <div className="relative flex justify-center w-full">
      <div className="flex gap-[20px] max-w-[1180px] py-[30px] w-full mx-[20px]">
        <div className="border-solid border-[1px] w-full max-w-[380px] bg-[#EAF8FF] min-w-[278px]">
          <UserStatus />
          <Inventory />
        </div>
        <div className="flex flex-col w-full gap-[20px]">
          <MainNavbar />
          {(window.location.hash === "#convert" ||
            window.location.hash === "") && <Convert />}
          {window.location.hash === "#swap" && <Swap />}
          {window.location.hash === "#nftshop" && <Nftshop />}
          {window.location.hash === "#leaderboard" && <Leaderboard />}
        </div>
      </div>
    </div>
  );
}
