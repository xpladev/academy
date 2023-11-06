import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import "./Inventory.css";

interface ITEMINFO {
  name: string;
  thumbnailUrl: string;
  imgUrl: string;
  paddle_width: string;
  paddle_count: string;
  ball_count: string;
}

const NFTInfo = ({
  address,
  tokenId,
}: {
  address: string;
  tokenId: string;
}) => {
  const [itemInfo, setItemInfo] = useState<ITEMINFO | null>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_SERVERURL}wallet/wallet-nft-info`,
        {
          wallet: address,
          tokenId: tokenId,
        }
      );
      return res.data;
    };

    fetchData().then((res) => {
      
      if (res.returnMsg === "success") {
        setItemInfo({
          name : res.extension.name,
          thumbnailUrl: res.extension.attributes[0].value,
          imgUrl: res.extension.image,
          paddle_width: res.extension.attributes[6].value,
          paddle_count: res.extension.attributes[7].value,
          ball_count: res.extension.attributes[8].value,
        });
      }
    });
  }, []);

  return itemInfo ? (
    <div
      className="border-[1px] border-solid aspect-square bg-white nftdetail-tooltip"
      style={{
        backgroundImage: "url(" + itemInfo.thumbnailUrl + ")",
        backgroundSize: "contain",
      }}
    >
      <div>
        <span className="text-[14px] font-bold leading-[17px] text-center">
          {itemInfo.name}
        </span>
        <img src={itemInfo.imgUrl} className="h-[60px]" />
        <div className="text-[14px] font-normal leading-[22px] flex justify-center gap-[6px]">
          <span>
            Count <span className="font-semibold">{itemInfo.paddle_count}</span>
          </span>
          |
          <span>
            Width <span className="font-semibold">{itemInfo.paddle_width}</span>
          </span>
          |
          <span>
            Ball <span className="font-semibold">{itemInfo.ball_count}</span>
          </span>
        </div>
      </div>
    </div>
  ) : (
    <CircularProgress size={12} />
  );
};

export default NFTInfo;
