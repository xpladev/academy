import React, { ReactNode } from "react";
import { HashLink } from "react-router-hash-link";
const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset });
};

const CustomHashLink = ({
  to,
  children,
  className = "",
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <HashLink
      scroll={(el) => scrollWithOffset(el)}
      to={to}
      className={className}
    >
      {children}
    </HashLink>
  );
};

export default CustomHashLink;
