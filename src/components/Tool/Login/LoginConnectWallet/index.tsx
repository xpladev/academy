import { ConnectType, useWallet, WalletStatus } from "@xpla/wallet-provider";
import React from "react";
import { selectConnection } from "../../../../components/Wallet/ConnectModal";
import clsx from "clsx";
import styles from "../../index.module.css";
import useLoginModalOpen from "@site/src/hooks/Zustand/useLoginModalOpen";
import { MODALTYPE } from "@site/src/hooks/Zustand/useLoginModalOpen";
import { CircularProgress, useMediaQuery } from "@mui/material";
import useLoginLoading from "@site/src/hooks/Zustand/useLoginLoading";

export default function LoginConnectWallet() {
  const { status, availableConnections, connect, disconnect, refetchStates } =
    useWallet();
  const { loginModalOpen, setLoginModalOpen } = useLoginModalOpen();
  const { loginLoading, setLoginLoading } = useLoginLoading();
  // console.log(loginModalOpen, "outside")
  const isMobile = useMediaQuery("(max-width:996px)");

  const clickConnect = async () => {
    if (isMobile) {
      return;
    }
    try {
      setLoginLoading(true);
      refetchStates();

      const selected = await selectConnection(
        availableConnections.filter(
          (connection) => connection.type === ConnectType.EXTENSION
        )
      );
      if (!selected) {
        // console.log("Wallet Connect Error");
        throw new Error("Wallet Connect Error");
      } else {
        // TODO
        setTimeout(() => {
          if (
            status !== WalletStatus.WALLET_CONNECTED ||
            loginModalOpen === MODALTYPE.NOTOPEN
          ) {
            setLoginModalOpen(MODALTYPE.OPENWITHSESSIONERROR);
          }
        }, 10000);
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
        "absolute top-[425px] max-[400px]:top-[300px] text-center bg-[#F93AC3] pl-[58px] pr-[48px] py-[18px] leading-[30px] flex gap-[15px] items-center justify-center max-[700px]:p-[20px] max-[700px]:leading-[20px]",
        isMobile ? styles.shadowButtonNotHover : styles.shadowButton
      )}
    >
      <div>
        {isMobile ? (
          <>
          <span className="font-semibold max-[700px]:text-[16px] text-[21px]">
              Only available on <span className="font-normal">PC with</span>
            </span>
            <br />
            <span className="font-bold max-[700px]:text-[20px] text-[30px]">Vault Chrome Extension</span>
          </>
        ) : (
          <>
            <span className="font-semibold text-[21px]">
              LOG-IN <span className="font-normal">with</span>
            </span>
            <br />
            <span className="font-bold text-[30px]">WALLETCONNECT</span>
          </>
        )}
      </div>
      {loginLoading && (
        <CircularProgress size={20} style={{ color: "black" }} />
      )}
    </div>
  );
}
