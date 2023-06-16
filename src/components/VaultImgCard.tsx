import React from "react";

const VaultImgCard = ({
  imgSrc,
  style,
}: {
  imgSrc: string;
  style?: React.CSSProperties;
}) => {
  return <img style={style} className="max-w-sm" src={imgSrc} alt="" />;
};

export default VaultImgCard;
