import { CircularProgress, Modal } from "@mui/material";
import { ConnectedWallet } from "@xpla/wallet-provider";
import {
  LCDClient,
  SignMode,
  SimplePublicKey,
  Tx,
} from "@xpla/xpla.js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NFTSHOPITEM } from "./index";
import { USERINFO } from "@site/src/hooks/Store/useUserInfo";

import { clsx } from "clsx";
import styles from "../../../index.module.css";
import getNumberFormat from "@site/src/util/getNumberFormat";
import TxFailModal from "../TxFailModal";
import ShopTxSucceedModal from "./ShopTxSucceedModal";
import BigNumber from "bignumber.js";
import { timeout } from "@site/src/util/timeout";

const chainID = "cube_47-5";
const URL = "https://cube-lcd.xpla.dev";
const lcd = new LCDClient({ chainID, URL });

const ShopInfo = ({
  address,
  shopItem,
  connectedWallet,
  setShopItemlist,
  userInfo,
}: {
  address: string;
  shopItem: NFTSHOPITEM;
  connectedWallet: ConnectedWallet;
  setShopItemlist: React.Dispatch<React.SetStateAction<NFTSHOPITEM[]>>;
  userInfo: USERINFO;
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [estimateFee, setEstimateFee] = useState<string | null>(null);

  const [requestResult, setRequestResult] = useState<string | null>(null);
  const [requestError, setRequestError] = useState<string | null>(null);
  const [txhash, setTxhash] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const buyNFT = async () => {
    try {
      setLoading(true);
      const addressinfo = await lcd.auth.accountInfo(address);
      const pubkey = addressinfo.getPublicKey() as SimplePublicKey;

      const unsignedPost = {
        wallet: address,
        shopNo: shopItem.idx,
        userPubKey: pubkey.key,
        userSeq: addressinfo.getSequenceNumber(),
      };

      const unsignedUrl = `${process.env.REACT_APP_SERVERURL}wallet/wallet-minting-unsigned`;
      const unsignedRes = await axios.post(unsignedUrl, unsignedPost);
      const unsignedTx = unsignedRes.data.unsignedTx;

      if (unsignedTx === undefined) {
        throw new Error(unsignedRes.data.returnMsg);
      }
      const decodedTx = Tx.fromBuffer(Buffer.from(unsignedTx, "base64"));
      setEstimateFee(
        new BigNumber(
          decodedTx.auth_info.fee.amount.toString().replace("axpla", "")
        )
          .dividedBy(10 ** 18)
          .toFormat({
            decimalSeparator: ".",
            groupSeparator: ",",
            groupSize: 3,
          })
      );

      const { result: signedTx, success } = await timeout(
        connectedWallet.sign({
          msgs: decodedTx.body.messages,
          fee: decodedTx.auth_info.fee,
          signMode: SignMode.SIGN_MODE_LEGACY_AMINO_JSON,
        }),
        20000,
        "Vault Connection time Expired or Vault Sign Error."
      );

      if (!success) {
        throw new Error("Vault Sign Error");
      }

      const userSignedTx = Buffer.from(signedTx.toBytes()).toString("base64");

      const convertPost: any = {
        wallet: address,
        tid: unsignedRes.data.tid,
        userTx: userSignedTx,
      };

      const walletUrl = `${process.env.REACT_APP_SERVERURL}wallet/wallet-minting`;
      let res = await axios.post(walletUrl, convertPost);

      setTimeout(waitResult, 1000, res.data.txhash);
    } catch (error) {
      setLoading(false);
      setModalOpen(true);
      setRequestError(
        `${error instanceof Error ? error.message : String(error)}`
      );
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setRequestError(null);
    setRequestResult(null);
  };

  async function waitResult(txhash) {
    try {
      const txUrl = `${process.env.REACT_APP_SERVERURL}wallet/txinfo?txhash=${txhash}`;
      const txRes = await axios.get(txUrl);
      if (txRes.data.returnCode === "500") {
        setTimeout(waitResult, 1000, txhash);
      } else if (txRes.data.returnCode === "0") {
        setLoading(false);
        setModalOpen(true);
        setRequestResult(txRes.data.returnMsg);
        if (txRes.data.returnMsg === "success") {
          setTxhash(txhash);
          // setUserInfo({
          //   diamond: userInfo.diamond,
          //   id: userInfo.id,
          //   clearStage: userInfo.clearStage,

          //   xplaBalance: new BigNumber(userInfo.xplaBalance)
          //     .minus(estimateFee)
          //     .toFixed(),
          //   tokenBalance: userInfo.tokenBalance,
          // });

          // const fetchData = async () => {
          //   const res = await axios.post(
          //     `${process.env.REACT_APP_SERVERURL}wallet//wallet-nft-shop-list`,
          //     {
          //       wallet: address,
          //     }
          //   );
          //   return res.data;
          // };

          // fetchData().then((res) => {
          //   if (res.returnMsg === "success") {
          //       const notHaveList = res.shopList.filter((nft) => nft.isHave !== 1);
          //       const isHaveList = res.shopList.filter((nft) => nft.isHave === 1);
          //       setShopItemlist(notHaveList.concat(isHaveList));
          //   }
          // });
        }
      }
    } catch (error) {
      setLoading(false);
      setModalOpen(true);
      setRequestError(
        `${error instanceof Error ? error.message : String(error)}`
      );
    }
  }

  return (
    <>
      <div className="max-h-[192px] flex flex-col items-center px-[10px] py-[15px] gap-[8px] bg-[#C9FF00] relative">
        <div className="font-bold text-[14px] leading-[16px]">
          {shopItem.name}
        </div>
        <img src={shopItem.imageUrl} className="h-[60px]" />
        <div className="text-[14px] font-normal leading-[22px] flex justify-center gap-[6px]">
          <span>
            Count <span className="font-semibold">{shopItem.count}</span>
          </span>
          |
          <span>
            Width <span className="font-semibold">{shopItem.width}</span>
          </span>
          |
          <span>
            Ball <span className="font-semibold">{shopItem.ball}</span>
          </span>
        </div>
        {/* <div>{shopItem.isHave}</div> */}
        <div
          onClick={buyNFT}
          className={clsx(
            styles.smallShadowButton,
            "px-[20px] py-[6px] flex justify-center items-center gap-[20px] text-white bg-[#004FFF]"
          )}
        >
          <span>
            MINT{" "}
            {loading && (
              <CircularProgress size={12} style={{ color: "white" }} />
            )}
          </span>
          <span>|</span>
          <div className="flex items-center gap-[4px]">
            {getNumberFormat(shopItem.price)}{" "}
            <img
              src="/img/tool/Main/shopinfo-token.svg"
              className="mt-[2px]"
            />
          </div>
        </div>
        {shopItem.isHave === 1 && (
          <div className="top-0 absolute flex flex-col justify-center items-center w-full h-full opacity-80 bg-black">
            <span className="text-white font-normal text-[22px] leading-[26px]">
              ALREADY
            </span>
            <span className="text-[#C9FF00] font-bold text-[24px] leading-[26px]">
              "MINTED"
            </span>
          </div>
        )}
      </div>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <div
          className="pt-[40px] pb-[50px] px-[52px]"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: requestResult ? 480 : 380,
            backgroundColor: "white",
            outlineStyle: "none",
            border: "1px solid #000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {requestResult && (
            <ShopTxSucceedModal
              shopItem={shopItem}
              estimateFee={estimateFee || ""}
              txhash={txhash || ""}
              handleModalClose={handleModalClose}
            />
          )}

          {requestError && (
            <TxFailModal
              title={"NFT MINT"}
              requestError={requestError}
              estimateFee={estimateFee || ""}
              txhash={txhash}
              handleModalClose={handleModalClose}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default ShopInfo;
