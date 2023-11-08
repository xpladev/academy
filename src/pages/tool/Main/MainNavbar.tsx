import Link from "@docusaurus/Link";
import clsx from "clsx";
import React, { useState } from "react";
import styles from "../index.module.css";
import Modal from "@mui/material/Modal";
import InformationModal from "../Login/Modal/InformationModal";

export default function MainNavbar() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div className="flex w-full bg-[#004FFF] flex items-center py-[11px]">
      <div className="flex gap-[90px] px-[45px] py-[17px]">
        <Link
          to="/tool#convert"
          className={clsx(
            "text-[18px] font-medium hover:text-[#FFE300FE] hover:cursor-pointer",
            (window.location.hash === "#convert" || window.location.hash === "")
              ? "text-[#FFE300FE]"
              : "text-white"
          )}
          style={{
            textDecoration: "none",
          }}
          aria-label="open-convert"
        >
          CONVERT
        </Link>
        <Link
          to="/tool#swap"
          className={clsx(
            "text-[18px] font-medium hover:text-[#FFE300FE] hover:cursor-pointer",
            window.location.hash === "#swap" ? "text-[#FFE300FE]" : "text-white"
          )}
          style={{
            textDecoration: "none",
          }}
          aria-label="open-swap"
        >
          SWAP
        </Link>
        <Link
          to="/tool#nftshop"
          className={clsx(
            "text-[18px] font-medium hover:text-[#FFE300FE] hover:cursor-pointer",
            window.location.hash === "#nftshop"
              ? "text-[#FFE300FE]"
              : "text-white"
          )}
          style={{
            textDecoration: "none",
          }}
          aria-label="open-nftshop"
        >
          NFT SHOP
        </Link>
        <Link
          to="/tool#leaderboard"
          className={clsx(
            "text-[18px] font-medium hover:text-[#FFE300FE] hover:cursor-pointer",
            window.location.hash === "#leaderboard"
              ? "text-[#FFE300FE]"
              : "text-white"
          )}
          style={{
            textDecoration: "none",
          }}
          aria-label="open-leaderboard"
        >
          LEADER BOARD
        </Link>
      </div>
      <div
        onClick={() => setModalOpen(true)}
        className={clsx(
          "text-center bg-[#00FF61] px-[20px] pt-[10px] pb-[2px] leading-[29px]",
          styles.smallShadowButton
        )}
      >
        <span className="font-bold text-[46px]">i</span>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <InformationModal setModalClose={() => setModalOpen(false)} />
      </Modal>
    </div>
  );
}
