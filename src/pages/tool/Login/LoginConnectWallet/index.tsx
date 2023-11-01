import { ConnectType, useWallet, WalletStatus } from "@xpla/wallet-provider";
import React from "react";
import { selectConnection } from "../../../../components/Wallet/ConnectModal";
import clsx from "clsx";
import styles from "../../index.module.css";
import { MODALTYPE } from "..";

type MODALTYPE = (typeof MODALTYPE)[keyof typeof MODALTYPE];

export default function LoginConnectWallet({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<MODALTYPE>>;
}) {
  const {
    status,
    availableConnections,
    connect,
  } = useWallet();

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
