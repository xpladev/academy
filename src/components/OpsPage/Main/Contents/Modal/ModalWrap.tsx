import React, { ReactNode, memo } from "react";

const ModalWrap = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div
      className="pt-[40px] pb-[50px] px-[52px]"
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
      }}
    >
      {children}
    </div>
  );
};

export default memo(ModalWrap);
