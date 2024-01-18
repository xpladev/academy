import { Modal as MuiModal } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./index.css";

const Modal = () => {
  const localModal = localStorage.getItem("modal");
  const [modalOpen, setModalOpen] = useState<boolean>(
    localModal && Number(localModal) + 1 === window.history.length
      ? false
      : true
  );
  
  useEffect(() => {
    if (localModal && Number(localModal) + 1 === window.history.length) {
      localStorage.setItem("modal", Number(localModal) + 1);
    }
  }, []);

  return (
    <MuiModal open={modalOpen}>
      <div
        className="p-[20px]  max-[540px]:w-[300px] w-[500px] h-[400px] modal-bg border-[1px] border-solid bg-white text-center"
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
        <div className="text-[36px] leading-[43px] font-bold">
          Site under maintenance!
        </div>
        <div className="text-[22px] leading-[26px] font-medium mb-[20px]">
          Some services <br />
          may be temporarily unavailable.
        </div>
        <img
          src="/xpla-academy-dev/img/modalimg.svg"
          alt="modal-img"
          width="127px"
          height="72px"
          className="mb-[13px]"
        />
        <div className="font-bold text-[20px] leading-[24px] text-[#004FFF] mb-[15px]">
          Thank you for your understanding.
        </div>
        <button
          onClick={() => {
            localStorage.setItem("modal", window.history.length);
            setModalOpen(false);
          }}
          className="buttonShadow bg-[#004FFF] text-white font-medium text-center text-[20px] leading-[24px] w-full max-w-[185px] py-[10px]"
        >
          OK
        </button>
      </div>
    </MuiModal>
  );
};
export default Modal;
