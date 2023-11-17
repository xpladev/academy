import React, { useEffect, useMemo, useState } from "react";
import BigNumber from "bignumber.js";
import "./Inventory.css";
import clsx from "clsx";
import NFTInfo from "./NFTInfo";
import useUserInfo from "@site/src/hooks/useQuery/useUserInfo";
import useWalletNftList from "../../../../hooks/useQuery/useWalletNftList";
import _ from "lodash";

export default function Inventory() {
  const { data: userInfo } = useUserInfo();

  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  const numPerPage = 8;

  const { data: nftlistRes } = useWalletNftList();
  const [userNft, setUserNft] = useState<string[]>();

  const bigXPLABalance = useMemo(
    () =>
      new BigNumber(userInfo?.xpla || "0")
        .toFormat(18, {
          decimalSeparator: ".",
          groupSeparator: ",",
          groupSize: 3,
        })
        .split("."),
    [userInfo]
  );

  const bigTokenBalance = useMemo(
    () =>
      new BigNumber(userInfo?.token || "0")
        .toFormat(6, {
          decimalSeparator: ".",
          groupSeparator: ",",
          groupSize: 3,
        })
        .split("."),
    [userInfo]
  );

  const bigDiamond = useMemo(
    () =>
      new BigNumber(userInfo?.diamond || 0).toFormat(0, {
        groupSeparator: ",",
        groupSize: 3,
      }),
    [userInfo]
  );

  useEffect(() => {
    if (
      nftlistRes &&
      nftlistRes.returnMsg === "success" &&
      nftlistRes.tokenList.tokens.length > 0
    ) {
      const len = nftlistRes.tokenList.tokens.length;
      if (len % numPerPage === 0) {
        setMaxPage(Math.floor(len / numPerPage));
      } else {
        setMaxPage(Math.floor(len / numPerPage) + 1);
      }
    }
  }, [nftlistRes]);

  useEffect(() => {
    if (nftlistRes && nftlistRes.returnMsg === "success") {
      setUserNft(
        nftlistRes.tokenList.tokens.slice(
          (page - 1) * numPerPage,
          page * numPerPage
        )
      );
    }
  }, [nftlistRes, page]);

  return (
    <div className="max-w-[380px] bg-[#EAF8FF] flex flex-col items-center justify-between p-[20px]">
      <span className="mt-[5px] font-semibold text-[28px] leading-[33px]">
        INVENTORY
      </span>
      <div
        className={clsx(
          "grid  gap-[8px] w-full mt-[16px] min-h-[165px]",
          nftlistRes?.tokenList.tokens.length === 0
            ? "grid-cols-1"
            : "grid-cols-4"
        )}
      >
        {userNft?.map((tokenId) => (
          <NFTInfo tokenId={tokenId} key={tokenId} />
        ))}
        {_.range(numPerPage - (userNft?.length || 0)).map((idx) => (
          <div
            key={idx + "emptyInventory"}
            className="border-[1px] border-solid aspect-square bg-white flex justify-center items-center"
          >
            <img
              src="/img/tool/Main/Inventory/emptyImg.svg"
              alt="emptyImg"
              width="53px"
              height="59px"
            />
          </div>
        ))}
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
          alt="arrowleft"
          width="16px"
          height="24px"
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
          alt="arrowright"
          width="16px"
          height="24px"
        />
      </div>
      <div className="flex flex-col gap-[20px] p-[20px] border-[1px] border-solid bg-white w-full">
        <div className="flex items-center gap-[13px]">
          <img
            src="/img/tool/Main/stroke-xpla.svg"
            alt="xplaToken"
            width="30px"
            height="30px"
          />
          <span className="font-normal text-[16px]">
            {bigXPLABalance[0]}.
            <span className="font-normal text-[12px] break-all">{bigXPLABalance[1]}</span>
          </span>
        </div>
        <div className="flex items-center gap-[13px]">
          <img
            src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-token.svg"
            alt="academy-token"
            width="31px"
            height="30px"
          />
          <span className="font-normal text-[16px]">
            {bigTokenBalance[0]}.
            <span className="font-normal text-[12px]">
              {bigTokenBalance[1]}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-[13px]">
          <img
            src="/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-diamond.svg"
            alt="academy-diamond"
            width="31px"
            height="30px"
          />
          <span className="font-normal text-[16px]">{bigDiamond}</span>
        </div>
      </div>
    </div>
  );
}
