import Link from "@docusaurus/Link";
import React from "react";

const SquareButton = ({
  contents,
  link,
}: {
  contents: string;
  link: string;
}) => {
  return (
    <Link
      className="flex flex-1 w-full justify-center items-center button button--secondary button--lg break-words whitespace-normal"
      style={{ padding: "25%" }}
      to={link}
    >
      <h3>{contents}</h3>
    </Link>
  );
};

export default SquareButton;
