import React, { useState, useEffect } from "react";
import { WalletStatus, useWallet } from "@xpla/wallet-provider";
import clsx from "clsx";
import styles from "../index.module.css";
import Modal from "@mui/material/Modal";
import LoginConnectWallet from "./LoginConnectWallet";
import NotLinkErrorModal from "./Modal/NotLinkErrorModal";
import SessionErrorModal from "./Modal/SessionErrorModal";
import InformationModal from "./Modal/InformationModal";
import getUserInfo from "@site/src/hooks/useMutation/getUserInfo";

export const MODALTYPE = {
  NOTOPEN: 0,
  OPENWITHNOTLINKERROR: 1,
  OPENWITHSESSIONERROR: 2,
  OPENINFORMATION: 3,
} as const;
type MODALTYPE = (typeof MODALTYPE)[keyof typeof MODALTYPE];

export default function Login() {
  const { status, wallets, disconnect } = useWallet();

  const [modalOpen, setModalOpen] = useState<MODALTYPE>(MODALTYPE.NOTOPEN);
  const { mutate } = getUserInfo(() => {
    disconnect();
    setModalOpen(MODALTYPE.OPENWITHNOTLINKERROR);
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      if (status === WalletStatus.INITIALIZING) {
        setModalOpen(MODALTYPE.OPENWITHSESSIONERROR);
      }
    }, 2000);

    if (status === WalletStatus.WALLET_CONNECTED) {
      if (wallets.length === 0) {
        setModalOpen(MODALTYPE.OPENWITHSESSIONERROR);
      } else {
        mutate(wallets[0].xplaAddress);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, [status, wallets]);

  return (
    <div className=" bg-[#004FFF] relative flex flex-col flex-1 items-center w-full ">
      <div
        className={clsx(
          "absolute top-[90px] w-[1465px] h-[578px] mx-[20px]",
          styles.stars
        )}
      />
      <div className="relative mt-[150px] flex items-center justify-center">
        <img src={`/img/tool/Login/logintitle.svg`} />
        <LoginConnectWallet
          setModalOpen={setModalOpen}
        />

        <div
          onClick={() => setModalOpen(MODALTYPE.OPENINFORMATION)}
          className={clsx(
            "absolute top-[87px] left-[741px] text-center bg-[#00FF61] px-[20px] pt-[10px] pb-[2px] leading-[29px]",
            styles.smallShadowButton
          )}
        >
          <span className="font-bold text-[46px]">i</span>
        </div>
      </div>
      <div className="mt-[20px] text-center leading-[25px]">
        <span className="text-white text-[18px]">
          To log in using WalletConnect, you should recover or import your
          wallet through the XPLA Vault. <br />
          (available as a Chrome Extension or App) Click the Info icon to view
          more details.
        </span>
      </div>

      <img className="mt-[45px] w-screen" src={`/img/tool/Login/floor.svg`} />
      <Modal
        open={modalOpen !== MODALTYPE.NOTOPEN}
        onClose={() => setModalOpen(MODALTYPE.NOTOPEN)}
      >
        <>
          {modalOpen === MODALTYPE.OPENWITHNOTLINKERROR && (
            <NotLinkErrorModal setModalOpen={setModalOpen} />
          )}
          {modalOpen === MODALTYPE.OPENWITHSESSIONERROR && (
            <SessionErrorModal setModalOpen={setModalOpen} />
          )}
          {modalOpen === MODALTYPE.OPENINFORMATION && (
            <InformationModal
              setModalClose={() => setModalOpen(MODALTYPE.NOTOPEN)}
            />
          )}
        </>
      </Modal>
    </div>
  );
}
