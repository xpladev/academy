import styles from "./index.module.css";
import React from "react";

const TxInProgressModal = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        backgroundColor: "white",
        outlineStyle: "none",
        border: "1px solid #000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "10px 10px 0px black",
        padding: "32px 0px",
        textAlign: "center",
      }}
    >
      <img
        src="/img/tool/Main/progressIcon.svg"
        alt="ProgressIcon"
        width="35px"
        height="35px"
        className={styles.rotateIcon}
      />

      <span className="mt-[10px] mb-[30px] font-semibold text-[28px] leading-[35px]">
        Transaction in Progress
      </span>

      <span className="font-medium text-[16px] leading-[19px] text-[#555454]">
        The transaction is currently in progress or
        <br />
        has been completed. If there is no response
        <br />
        for 2 minutes, please retry the transaction.
      </span>
    </div>
  );
};

export default React.memo(TxInProgressModal);
