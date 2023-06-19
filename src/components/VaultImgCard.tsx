import React from "react";

const VaultImgCard = ({
  imgSrc,
  style,
}: {
  imgSrc: string;
  style?: React.CSSProperties;
}) => {
  return <img className="max-w-sm" style={style} src={imgSrc} alt="" />;
};

export default VaultImgCard;
