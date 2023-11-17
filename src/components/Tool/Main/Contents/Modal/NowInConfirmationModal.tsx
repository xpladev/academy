import clsx from "clsx";
import React from "react";

const NowInConfirmation = () => {
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
        src="/img/tool/Main/confirmEmoji.svg"
        alt="ConfirmEmoji"
        width="34px"
        height="34px"
      />

      <span className="mt-[10px] mb-[30px] font-semibold text-[28px] leading-[35px]">
        Now in Confirmation
      </span>

      <span className="font-medium text-[16px] leading-[19px] text-[#555454]">
        Please check out XPLA VAULT{" "}
        <br />
        <span>Chrome Extension </span>to confirm and <br />
        complete the process.
      </span>
    </div>
  );
};

export default React.memo(NowInConfirmation);
