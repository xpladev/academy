import React, { useEffect, useState } from "react";
import BigNumber from "bignumber.js";
import { useWallet } from "@xpla/wallet-provider";
import axios from "axios";
import "./Inventory.css";
import clsx from "clsx";
import NFTInfo from "./NFTInfo";
import useUserAddress from "@site/src/hooks/Zustand/useUserAddress";
import useUserInfo from "@site/src/hooks/useQuery/useUserInfo";
import useWalletNftList from "../../../../hooks/useQuery/useWalletNftList";

export default function Inventory() {
  const { userAddress } = useUserAddress();
  const { data: userInfo } = useUserInfo();

  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  const numPerPage = 8;

  const {data : nftlistRes, status } = useWalletNftList();

  const bigXPLABalance = new BigNumber(userInfo?.xpla || "0")
    .toFormat(18, {
      decimalSeparator: ".",
      groupSeparator: ",",
      groupSize: 3,
    })
    .split(".");
  const bigTokenBalance = new BigNumber(userInfo?.token || "0")
    .toFormat(6, {
      decimalSeparator: ".",
      groupSeparator: ",",
      groupSize: 3,
    })
    .split(".");
  const bigDiamond = new BigNumber(userInfo?.diamond || 0).toFormat(0, {
    groupSeparator: ",",
    groupSize: 3,
  });

  useEffect(() => {
    if (nftlistRes && nftlistRes.returnMsg === "success" && nftlistRes.tokenList.tokens.length > 0) {
      const len = nftlistRes.tokenList.tokens.length;
      if (len % numPerPage === 0) {
        setMaxPage(Math.floor(len / numPerPage));
      } else {
        setMaxPage(Math.floor(len / numPerPage) + 1);
      }
    }
  }, [nftlistRes]);

  return (
    <div className="max-w-[380px] bg-[#EAF8FF] flex flex-col items-center justify-between p-[20px]">
      <span className="mt-[5px] font-semibold text-[28px] leading-[33px]">
        INVENTORY
      </span>
      <div
        className={clsx(
          "grid  gap-[8px] w-full mt-[16px] min-h-[165px]",
          nftlistRes?.tokenList.tokens.length === 0 ? "grid-cols-1" : "grid-cols-4"
        )}
      >
        {/* TODO : 8개만 slice해서 가져오고, 8개보다 적게 있으면 빈칸으로 추가해주기 */}
        {nftlistRes &&
          nftlistRes?.tokenList.tokens
            .slice((page - 1) * numPerPage, page * numPerPage)
            .map((userNFT) => (
              <NFTInfo tokenId={userNFT} key={userNFT} />
            ))}
        {nftlistRes?.tokenList.tokens.length === 0 && <span>There is no nftlist item.</span>}
      </div>

      <div className="flex items-center gap-[15px] py-[26px]">
        <img
          onClick={() => {
            if (page !== 1) {
              setPage(page - 1);
            }
          }}
          src="/img/tool/Main/arrowleft.svg"
          className="hover:cursor-pointer"
        />
        <span className="text-[#004FFF] text-[18px] font-bold">
          {page}
          <span className="text-black font-normal"> / {maxPage}</span>
        </span>
        <img
          onClick={() => {
            if (page !== maxPage) {
              setPage(page + 1);
            }
          }}
          src="/img/tool/Main/arrowleft.svg"
          className="rotate-180 hover:cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-[20px] p-[20px] border-[1px] border-solid bg-white w-full">
        <div className="flex items-center gap-[13px]">
          <img src="/img/tool/Main/stroke-xpla.svg" />
          <span className="font-normal text-[16px]">
            {bigXPLABalance[0]}.
            <span className="font-normal text-[12px]">{bigXPLABalance[1]}</span>
          </span>
        </div>
        <div className="flex items-center gap-[13px]">
          <img src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-token.svg" />
          <span className="font-normal text-[16px]">
            {bigTokenBalance[0]}.
            <span className="font-normal text-[12px]">
              {bigTokenBalance[1]}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-[13px]">
          <img src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-diamond.svg" />
          <span className="font-normal text-[16px]">{bigDiamond}</span>
        </div>
      </div>
    </div>
  );
}
