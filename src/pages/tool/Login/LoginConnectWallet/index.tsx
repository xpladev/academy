import { ConnectType, useWallet, WalletStatus } from "@xpla/wallet-provider";
import React from "react";
import { selectConnection } from "../../../../components/Wallet/ConnectModal";
import clsx from "clsx";
import styles from "../../index.module.css";
import useLoginModalOpen from "@site/src/hooks/Zustand/useLoginModalOpen";
import { MODALTYPE } from "@site/src/hooks/Zustand/useLoginModalOpen";
import { CircularProgress } from "@mui/material";
import useLoginLoading from "@site/src/hooks/Zustand/useLoginLoading";
import useUserInfo from "@site/src/hooks/useQuery/useUserInfo";
import useUserAddress from "@site/src/hooks/Zustand/useUserAddress";

export default function LoginConnectWallet() {
  const { status, availableConnections, connect, disconnect, refetchStates } = useWallet();
  const { loginModalOpen, setLoginModalOpen } = useLoginModalOpen();
  const { loginLoading, setLoginLoading } = useLoginLoading();
  // console.log(loginModalOpen, "outside")

  const clickConnect = async () => {
    try {
      setLoginLoading(true);
      refetchStates();

      const selected = await selectConnection(
        availableConnections.filter(
          (connection) => connection.type != ConnectType.READONLY
        )
      );
      if (!selected) {
        // console.log("Wallet Connect Error");
        throw new Error("Wallet Connect Error");
      } else {
        // TODO
        // setTimeout(() => {
        //   if (status !== WalletStatus.WALLET_CONNECTED || loginModalOpen === MODALTYPE.NOTOPEN) {
        //     setLoginModalOpen(MODALTYPE.OPENWITHSESSIONERROR);
        //   } 
        // }, 10000);

      }
      const type = selected[0];
      const identifier = selected[1] || "";
      connect(type, identifier);
    } catch (e) {
      setLoginModalOpen(MODALTYPE.OPENWITHSESSIONERROR);
    }
  };

  return (
    <div
      onClick={clickConnect}
      className={clsx(
        "absolute top-[425px] text-center bg-[#F93AC3] pl-[58px] pr-[48px] py-[18px] leading-[30px] flex gap-[15px] items-center",
        styles.shadowButton
      )}
    >
      <div>
        <span className="font-semibold text-[21px]">
          LOG-IN&nbsp;<span className="font-normal">with</span>
        </span>
        <br />
        <span className="font-bold text-[30px]">WALLETCONNECT</span>
      </div>
      {loginLoading && (
        <CircularProgress size={20} style={{ color: "black" }} />
      )}
    </div>
  );
}
