import React, { useState, useEffect } from "react";
import { WalletStatus, useWallet } from "@xpla/wallet-provider";
import clsx from "clsx";
import styles from "../index.module.css";
import Modal from "@mui/material/Modal";
import LoginConnectWallet from "./LoginConnectWallet";
import NotLinkErrorModal from "./Modal/NotLinkErrorModal";
import SessionErrorModal from "./Modal/SessionErrorModal";
import InformationModal from "./Modal/InformationModal";
import useUserAddress from "@site/src/hooks/Zustand/useUserAddress";
import useLoginModalOpen from "@site/src/hooks/Zustand/useLoginModalOpen";
import { MODALTYPE } from "@site/src/hooks/Zustand/useLoginModalOpen";
import useLoginLoading from "@site/src/hooks/Zustand/useLoginLoading";
import TxFailModal from "../Main/Contents/Modal/TxFailModal";
import ModalWrap from "../Main/Contents/Modal/ModalWrap";

export default function Login() {
  const { status, wallets, disconnect, network } = useWallet();
  const { setUserAddress } = useUserAddress();
  const { loginModalOpen, setLoginModalOpen } = useLoginModalOpen();
  const { setLoginLoading } = useLoginLoading();

  useEffect(() => {
    let timer = setTimeout(() => {
      if (status === WalletStatus.INITIALIZING) {
        disconnect();
        setLoginModalOpen(MODALTYPE.OPENWITHSESSIONERROR);
      }
    }, 2000);

    if (status === WalletStatus.WALLET_CONNECTED) {
      if (wallets.length === 0) {
        disconnect();
        setLoginModalOpen(MODALTYPE.OPENWITHSESSIONERROR);
      } else {
        setUserAddress(wallets[0].xplaAddress);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, [status, wallets]);

  return (
    <div className=" bg-[#004FFF] relative flex flex-col flex-1 items-center w-full ">
      <div
        className={clsx("absolute top-[90px] w-[1465px] h-[578px] mx-[20px] max-w-full")}
      >
        <img
          src={`/img/tool/Login/stars.svg`}
          alt="stars"
          width="1465px"
          height="578px"
        />
      </div>
      <div className="relative min-[700px]:mt-[150px] flex items-center justify-center px-[20px] max-[400px]:h-[400px]">
        <img
          src={`/img/tool/Login/logintitle.svg`}
          alt="logintitle"
          width="756px"
          height="549px"
          className="max-[996px]:mr-[20px]"
        />
        <LoginConnectWallet />

        <div
          onClick={() => setLoginModalOpen(MODALTYPE.OPENINFORMATION)}
          className={clsx(
            "max-[900px]:hidden absolute top-[87px] left-[741px] text-center bg-[#00FF61] px-[20px] pt-[10px] pb-[2px] leading-[29px]",
            styles.smallShadowButton
          )}
        >
          <span className="font-bold text-[46px]">i</span>
        </div>
      </div>
      <div className="mt-[20px] text-center leading-[25px] px-[20px]">
        <span className="text-white text-[18px]">
          To log in using WalletConnect, you should recover or import your
          wallet through the XPLA Vault. <br />
          (available as a Chrome Extension) Click the Info icon to view
          more details.
        </span>
      </div>

      <img
        className="mt-[45px] w-screen h-auto"
        src={`/img/tool/Login/floor.svg`}
        alt="LoginPageFloor"
        width="2748px"
        height="402px"
      />
      <Modal
        open={loginModalOpen !== MODALTYPE.NOTOPEN}
        onClose={() => {
          setLoginModalOpen(MODALTYPE.NOTOPEN);
          setLoginLoading(false);
        }}
      >
        <>
          {loginModalOpen === MODALTYPE.OPENWITHNOTLINKERROR && (
            <NotLinkErrorModal />
          )}
          {loginModalOpen === MODALTYPE.OPENWITHSESSIONERROR && (
            <SessionErrorModal />
          )}
          {loginModalOpen === MODALTYPE.OPENINFORMATION && <InformationModal />}
          {loginModalOpen === MODALTYPE.OPENMAINNETERROR && (
            <ModalWrap>
              <TxFailModal
                title="Login"
                requestError="604"
                txhash=""
                handleModalClose={() => {
                  setLoginModalOpen(MODALTYPE.NOTOPEN);
                }}
              />
            </ModalWrap>
          )}
        </>
      </Modal>
    </div>
  );
}
