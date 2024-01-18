import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import "./TryDemoDropdown.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "@docusaurus/Link";

export default function TryDemoDropdown() {
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target)) {
        return;
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("focusin", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("focusin", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      ref={dropdownRef}
      className={clsx(
        "navbar__item",
        "dropdown",
        "dropdown--hoverable",
        "p-0",
        "ml-[74px] max-[1220px]:ml-[35px]",
        "dropdownArrow"
      )}
    >
      <div className={clsx("flex justify-between items-center ")}>
        <span className="text-[16px] font-medium text-white">Try Demo</span>
        <KeyboardArrowDownIcon
          style={{
            fill: "white",
            fontSize: 20,
          }}
        />
      </div>
      <ul className="dropdown__menu GNBDropdownMenu ulborder-0">
        <div className="max-[1068px]:h-[14px] h-[27px] mb-[1px] bg-black" />
        <Link
          to="/playgame"
          className="py-[16px] h-[44px] pl-[21px] hover:cursor-pointer flex items-center bg-black text-white hover:text-[#00ABFF] hover:no-underline"
        >
          <span className="leading-[18px] font-normal text-[15px]">
            Play Game
          </span>
        </Link>
        <Link
          to="/ops"
          className="py-[16px] h-[44px] pl-[21px] hover:cursor-pointer flex items-center bg-black text-white hover:text-[#00ABFF] hover:no-underline translate-y-[-1px]"
        >
          <span className="leading-[18px] font-normal text-[15px] ">
            Web3 Gaming Ops
          </span>
        </Link>
      </ul>
    </div>
  );
}
