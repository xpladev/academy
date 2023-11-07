import { CircularProgress, Modal } from "@mui/material";
import { ConnectedWallet } from "@xpla/wallet-provider";
import { SignMode, Tx } from "@xpla/xpla.js";
import axios from "axios";
import React, { useState } from "react";

import { clsx } from "clsx";
import styles from "../../../index.module.css";
import getNumberFormat from "@site/src/util/getNumberFormat";
import TxFailModal from "../TxFailModal";
import ShopTxSucceedModal from "./ShopTxSucceedModal";
import BigNumber from "bignumber.js";
import { timeout } from "@site/src/util/timeout";
import { NFTSHOPITEM } from "../../../../../hooks/useQuery/useNftShopList";
import ModalWrap from "../ModalWrap";
import useMintUnsigned from "@site/src/hooks/useMutation/useMintUnsigned";
import useMintSigned from "@site/src/hooks/useMutation/useMintSigned";
import { useQueryClient } from "@tanstack/react-query";
import useUserAddress from "@site/src/hooks/Zustand/useUserAddress";

const ShopInfo = ({
  shopItem,
  connectedWallet,
}: {
  shopItem: NFTSHOPITEM;
  connectedWallet: ConnectedWallet | undefined;
}) => {
  const { userAddress } = useUserAddress();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [estimateFee, setEstimateFee] = useState<string | null>(null);

  const [requestResult, setRequestResult] = useState<string | null>(null);
  const [requestError, setRequestError] = useState<string | null>(null);
  const [txhash, setTxhash] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { mutateAsync: mintUnsigned } = useMintUnsigned();
  const { mutateAsync: mintSigned } = useMintSigned();
  const queryClient = useQueryClient();

  const buyNFT = async () => {
    try {
      if (!connectedWallet) {
        throw new Error("VAULT Connection Error")
      }
      setLoading(true);
      const { fee, tid, unsignedTx } = await mintUnsigned(shopItem.idx);

      const decodedTx = Tx.fromBuffer(Buffer.from(unsignedTx, "base64"));

      setEstimateFee(
        new BigNumber(fee.replace("axpla", "")).dividedBy(10 ** 18).toFormat({
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
        "VAULT Connection Error"
      );

      if (!success) {
        throw new Error("VAULT Sign Error");
      }

      const userSignedTx = Buffer.from(signedTx.toBytes()).toString("base64");
      const { txhash: resTxhash } = await mintSigned({
        tid,
        userTx: userSignedTx,
      });

      setTxhash(resTxhash);
      setTimeout(waitResult, 1000, resTxhash);
    } catch (error) {
      setLoading(false);
      setModalOpen(true);
      setRequestError(
        `${error instanceof Error ? error.message : String(error)}`
      );
    }
  };

  async function waitResult(resTxhash) {
    try {
      const txRes = await axios.get(
        `${process.env.REACT_APP_SERVERURL}wallet/txinfo?txhash=${resTxhash}`
      );
      if (txRes.data.returnCode === "500") {
        setTimeout(waitResult, 1000, resTxhash);
      } else if (txRes.data.returnCode === "0") {
        await queryClient.invalidateQueries({
          queryKey: ["useUserInfo", userAddress],
        });
        await queryClient.invalidateQueries({
          queryKey: ["useNftShopList", userAddress],
        });
        await queryClient.invalidateQueries({
          queryKey: ["useWalletNftList", userAddress],
        });
        setLoading(false);
        setModalOpen(true);
        setRequestResult(txRes.data.returnMsg);
      }
    } catch (error) {
      throw error;
    }
  }

  const handleModalClose = () => {
    setModalOpen(false);
    setRequestError(null);
    setRequestResult(null);
  };

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
            <img src="/img/tool/Main/shopinfo-token.svg" className="mt-[2px]" />
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
        <ModalWrap>
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
              requestError={requestError || ""}
              estimateFee={estimateFee || ""}
              txhash={txhash || ""}
              handleModalClose={handleModalClose}
            />
          )}
        </ModalWrap>
      </Modal>
    </>
  );
};

export default ShopInfo;
