import { ConnectType, useWallet, WalletStatus } from "@xpla/wallet-provider";
import React, { useEffect } from "react";
import Translate, { translate } from "@docusaurus/Translate";
import { selectConnection } from "../../../../components/Wallet/ConnectModal";
import clsx from "clsx";
import styles from "../../index.module.css";
import { MODALTYPE } from "..";
import axios from "axios";
import { USERINFO } from "../..";

type MODALTYPE = (typeof MODALTYPE)[keyof typeof MODALTYPE];

export default function LoginConnectWallet({
  setModalOpen,
  setMainState,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<MODALTYPE>>;
  setMainState: (_showTool: boolean, _userInfo: USERINFO | null) => void;
}) {
  const {
    status,
    network,
    wallets,
    availableConnections,
    availableConnectTypes,
    connect,
    disconnect,
  } = useWallet();

  useEffect(() => {
    if (status === WalletStatus.WALLET_CONNECTED) {
      if (wallets.length === 0) {
        setModalOpen(MODALTYPE.OPENWITHSESSIONERROR);
      } else {
        const fetchData = async () => {
          const res = await axios.post(
            `${process.env.REACT_APP_SERVERURL}wallet/wallet-user-info`,
            {
              wallet: wallets[0].xplaAddress,
            }
          );
          return res.data;
        };

        fetchData().then((res) => {
          if (res.returnMsg === "success") {
            setMainState(true, {
              id: res.id,
              diamond: res.diamond,
              clearStage: res.clearStage,
              xplaBalance: res.xpla,
              tokenBalance: res.token,
            });
          } else {
            disconnect();
            setModalOpen(MODALTYPE.OPENWITHNOTLINKERROR);
          }
        });
      }
    }
  }, [wallets]);

  const clickConnect = async () => {
    try {
      setTimeout(() => {
        if (status !== WalletStatus.WALLET_CONNECTED) {
          setModalOpen(MODALTYPE.OPENWITHSESSIONERROR);
        }
      }, 3000);
      const selected = await selectConnection(
        availableConnections.filter(
          (connection) => connection.type != ConnectType.READONLY
        )
      );
      if (!selected) {
        // console.log("Wallet Connect Error");
        throw new Error("Wallet Connect Error");
      }
      const type = selected[0];
      const identifier = selected[1] || "";
      connect(type, identifier);
    } catch (e) {
      console.log("error")
      setModalOpen(MODALTYPE.OPENWITHSESSIONERROR);
    }
  };

  return (
    <div
      onClick={clickConnect}
      className={clsx(
        "absolute top-[425px] text-center bg-[#F93AC3] pl-[58px] pr-[48px] py-[18px] leading-[30px]",
        styles.shadowButton
      )}
    >
      <span className="font-semibold text-[21px]">
        LOG-IN&nbsp;<span className="font-normal">with</span>
      </span>
      <br />
      <span className="font-bold text-[30px]">WALLETCONNECT</span>
    </div>
  );
}
