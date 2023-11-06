import React, { useCallback, useState } from "react";
import clsx from "clsx";
import styles from "../index.module.css";
import Link from "@docusaurus/Link";
import { copyToClipboard } from "@site/src/components/Homepage/DevResource";
import { useWallet } from "@xpla/wallet-provider";
import useUserAddress from "@site/src/hooks/Zustand/useUserAddress";
import useUserInfo from "@site/src/hooks/useQuery/useUserInfo";
import { CircularProgress } from "@mui/material";

export default function UserStatus() {
  const { userAddress, setUserAddress } = useUserAddress();
  const { data : userInfo, status } = useUserInfo("");

  const [copyAnimation, setCopyAnimation] = useState<boolean>(true);
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const {
    wallets,
    disconnect,
  } = useWallet();

  const handleClickCopy = useCallback(() => {
    setCopyAnimation(true);
    setIsCopy(true);
    setTimeout(() => {
      setCopyAnimation(false);
    }, 1000);
    setTimeout(() => {
      setIsCopy(false);
    }, 1500);
    copyToClipboard(wallets[0].xplaAddress);
  }, []);

  return (
    <div className="relative bg-[#004FFF] flex flex-col items-center px-[20px] pt-[30px] pb-[40px]">
      <img src={`/img/tool/Main/mainlogo.svg`} />
      <div
        onClick={() => {
          setUserAddress(undefined);
          disconnect();
        }}
        className="absolute right-[20px] top-[154px] border-[1px] border-solid border-white px-[8px] text-[14px] leading-[25px] text-white hover:cursor-pointer"
      >
        LOG OUT
      </div>
      <div className="w-full flex mt-[16px] border-solid border-[1px] bg-white h-[34px] text-[16px]">
        <div className="w-[88px] flex items-center bg-[#FFE300] font-semibold px-[13px]">
          ID
        </div>
        <div className="flex items-center px-[11px]">{
          status === "pending" ? <CircularProgress size={12} />
          : status === "success" ? userInfo?.id 
          : "-"
        }</div>
      </div>
      <div className="w-full flex mt-[16px] border-solid border-[1px] bg-white h-[66px] text-[16px]">
        <div className="w-[88px] shrink-0 flex items-center bg-[#FFE300] font-semibold px-[13px] leading-[18px]">
          Wallet Address
        </div>
        <div className="flex gap-[11px] items-center break-all px-[11px] py-[14px] leading-[19px]">
          <span> {userAddress || ""}</span>
          <div className="relative shrink-0 w-[15px]">
            {isCopy && (
              <div className="absolute bottom-[26px] w-[60px] left-[-10px] ">
                <img
                  src="/img/DevResource/copied.svg"
                  className={clsx(!copyAnimation && styles.fadeOut)}
                />
              </div>
            )}
            <img
              onClick={handleClickCopy}
              src="/img/DevResource/CopyButton.svg"
              className="hover:cursor-pointer hover:opacity-60"
            />
          </div>
        </div>
      </div>
      <Link
        to="/#playgame"
        className={clsx(
          "mt-[20px] font-bold text-[30px] leading-[36px] bg-[#00B2FC] px-[29px] py-[14px] hover:no-underline",
          styles.smallShadowButton
        )}
      >
        <span className="text-white">PLAY GAME</span>
      </Link>
    </div>
  );
}
