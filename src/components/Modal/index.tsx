import { Modal as MuiModal } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./index.css";
import clsx from "clsx";

const Modal = () => {
  const localModal = localStorage.getItem("modal");
  const now = new Date();
  const [modalOpen, setModalOpen] = useState<boolean>(
    localModal && parseInt(localModal, 10) + 24 * 60 * 60 * 1000 > now.getTime()
      ? false
      : true
  );
  const [check, setCheck] = useState<boolean>(false);

  return (
    <MuiModal open={modalOpen}>
      <div
        className="w-[300px] h-[400px] modal-bg border-[1px] border-solid bg-white text-center"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          outlineStyle: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-[36px] leading-[36px] font-bold mb-[8px]">
          Best viewed
          <br /> on PC
        </div>
        <div className="text-[16px] leading-[22px] font-medium mb-[7px] tracking-tight whitespae-nowrap">
          Certain features like <br />
          <span className="text-[#004FFF] font-bold">
            {" "}
            Demo Game and Web3 Gaming Ops <br />
          </span>
          may not be available.
        </div>
        <img
          src="/img/modalimg.svg"
          alt="modal-img"
          width="123px"
          height="100px"
          className="mb-[11px]"
        />
        <div className="flex justify-center items-center mb-[19px]">
          <div
            onClick={() => {
              setCheck(!check);
            }}
            className="relative overflow-visible mr-[8px] w-[22px] h-[22px] border-solid border-[1px] border-black bg-white "
          >
            {check && (
              <img
                src="/img/modalcheck.svg"
                alt="check"
                width="24px"
                height="21px"
                className="absolute left-0 bottom-[3px]"
              />
            )}
          </div>
          <div className="font-medium text-[14px] leading-[17px] text-[#004FFF] whitespae-nowrap">
            Okay, no more pop-up today!
          </div>
        </div>
        <button
          disabled={!check}
          onClick={() => {
            const date = new Date();
            localStorage.setItem("modal", date.getTime().toString());
            setModalOpen(false);
          }}
          className={clsx(
            "okay-btn bg-[#004FFF] text-white font-medium text-center text-[20px] leading-[24px] w-full max-w-[265px] py-[10px]",
            check ? "bg-[#0080FF]" : "opacity-60"
          )}
        >
          OK
        </button>
      </div>
    </MuiModal>
  );
};
export default Modal;
