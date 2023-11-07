import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useConnectedWallet, useWallet } from "@xpla/wallet-provider";

import ShopInfo from "./ShopInfo";
import useNftShopList, { NFTSHOPITEM } from "../../../../../hooks/useQuery/useNftShopList";

export default function Nftshop() {
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  const numPerPage = 6;

  const connectedWallet = useConnectedWallet();

  const { data : rawItemList} = useNftShopList();
  const [shopItemlist, setShopItemlist] = useState<NFTSHOPITEM[]>([]);

  useEffect(() => {
    if (rawItemList?.returnMsg === "success") {
        const notHaveList = rawItemList.shopList.filter((nft) => nft.isHave !== 1);
        const isHaveList = rawItemList.shopList.filter((nft) => nft.isHave === 1);
        setShopItemlist(notHaveList.concat(isHaveList));
    }
  }, [rawItemList]);

  useEffect(() => {
    if (shopItemlist && shopItemlist.length > 0) {
      const len = shopItemlist.length;
      if (len % numPerPage === 0) {
        setMaxPage(Math.floor(len / numPerPage));
      } else {
        setMaxPage(Math.floor(len / numPerPage) + 1);
      }
    }
  }, [shopItemlist]);

  return (
    <>
      <div className="flex flex-col items-center pt-[77px] pb-[79px] bg-[#EAF8FF] h-full">
        <img src="/img/tool/Main/nftshoptitle.svg" />
        <img
          className="mt-[15px] mb-[4px]"
          src="/img/tool/Main/starlight.svg"
        />
        <div className="text-center font-normal text-[20px] leading-[28px]">
          Gather ACADEMY-TKN by playing game,
          <br />
          and mint your own special Paddle NFT!
          <br />
          Paddle NFT will become your powerful weapon in the game!
        </div>
        {shopItemlist ? (
          <div className="mt-[27px] grid grid-cols-3 gap-[12px] relative w-full min-h-[396px]">
            {shopItemlist
              .slice((page - 1) * numPerPage, page * numPerPage)
              .map((item) => (
                <ShopInfo
                  key={item.idx}
                  shopItem={item}
                  connectedWallet={connectedWallet}
                />
              ))}
          </div>
        ) : (
          <div className="flex h-full justify-center items-center w-full max-h-[396px]">
            <CircularProgress size={30} style={{ color: "#004FFF" }} />
          </div>
        )}
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
      </div>
    </>
  );
}
