import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import "./Inventory.css";
import useWalletNftInfo from "../../../../hooks/useQuery/useWalletNftInfo";

const NFTInfo = ({
  tokenId,
}: {
  tokenId: string;
}) => {
  const {data : nftInfo, status } = useWalletNftInfo(tokenId);

  return status === "success" && nftInfo?.returnMsg === "success" ? (
    <div
      className="border-[1px] border-solid aspect-square bg-white nftdetail-tooltip"
      style={{
        backgroundImage: "url(" + nftInfo.extension.attributes.filter((a) => a.trait_type === 'thumbnail_url')[0].value + ")",
        backgroundSize: "contain",
      }}
    >
      <div>
        <span className="text-[14px] font-bold leading-[17px] text-center">
          {nftInfo.extension.name}
        </span>
        <img src={nftInfo.extension.image} className="h-[60px]" />
        <div className="text-[14px] font-normal leading-[22px] flex justify-center gap-[6px]">
          <span>
            Count <span className="font-semibold">{nftInfo.extension.attributes.filter((a) => a.trait_type === 'paddle_count')[0].value}</span>
          </span>
          |
          <span>
            Width <span className="font-semibold">{nftInfo.extension.attributes.filter((a) => a.trait_type === 'paddle_width')[0].value}</span>
          </span>
          |
          <span>
            Ball <span className="font-semibold">{nftInfo.extension.attributes.filter((a) => a.trait_type === 'ball_count')[0].value}</span>
          </span>
        </div>
      </div>
    </div>
  ) : (
    <CircularProgress size={12} />
  );
};

export default memo(NFTInfo);
