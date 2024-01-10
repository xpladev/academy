import { ConnectType, useWallet, WalletStatus } from "@xpla/wallet-provider";
import React, { useEffect } from "react";
import { selectConnection } from "../../../../components/Wallet/ConnectModal";
import clsx from "clsx";
import styles from "../../index.module.css";
import useLoginModalOpen from "@site/src/hooks/Zustand/useLoginModalOpen";
import { MODALTYPE } from "@site/src/hooks/Zustand/useLoginModalOpen";
import { CircularProgress, useMediaQuery } from "@mui/material";
import useLoginLoading from "@site/src/hooks/Zustand/useLoginLoading";

export default function LoginConnectWallet() {
  const { status, availableConnections, connect } =
    useWallet();
  const { loginModalOpen, setLoginModalOpen } = useLoginModalOpen();
  const { loginLoading, setLoginLoading } = useLoginLoading();
  const isMobile = useMediaQuery("(max-width:996px)");

  const clickConnect = async () => {
    if (
      availableConnections.filter(
        (connection) => connection.type === ConnectType.EXTENSION
      ).length === 0
    ) {
      setLoginModalOpen(MODALTYPE.OPENWITHSESSIONERROR);
      return;
    }

    try {
      const selected = await selectConnection(
        availableConnections.filter(
          (connection) => connection.type === ConnectType.EXTENSION
        )
      );
      
      if (!selected) {
        return;
      } else {
        const type = selected[0];
        const identifier = selected[1] || "";
        connect(type, identifier);
        setLoginLoading(true);
      }

    } catch (e) {
      setLoginModalOpen(MODALTYPE.OPENWITHSESSIONERROR);
    }
  };

  useEffect(() => {
    if (loginLoading) {
      const timer = setTimeout(() => {
        if (
          status !== WalletStatus.WALLET_CONNECTED &&
          loginModalOpen === MODALTYPE.NOTOPEN
        ) {
          window.location.reload();
        }
      }, 3000);
      return () => {
        clearTimeout(timer);
      }
    }
  }, [loginLoading])

  return (
    <div
      onClick={clickConnect}
      className={clsx(
        "absolute top-[425px] max-[400px]:top-[300px] text-center bg-[#F93AC3] pl-[58px] pr-[48px] py-[18px] leading-[30px] flex gap-[15px] items-center justify-center max-[996px]:p-[20px] max-[996px]:leading-[25px]",
        isMobile ? styles.onlyAvailablePC : styles.shadowButton
      )}
    >
      <div>
        {isMobile ? (
          <>
          <span className="font-medium max-[700px]:text-[16px] text-[21px]">
              ONLY available on PC
            </span>
            <br />
            <span className="font-normal max-[996px]:text-[21px] max-[700px]:text-[16px] text-[30px]">with XPLA Vault Chrome Extension</span>
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
