import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import "./SwapDropdown.css";
import SwapDropdownLink from "./SwapDropdownLink";

export default function SwapDropdown({
  isfrom,
  nowXPLASelected,
  setTkn2xpla,
  setRatioShow,
  className,
  onClickFn,
  ...props
}) {
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

  const xplaImgsrc = "/img/opspage/Main/stroke-xpla.svg";
  const tokenImgsrc =
    "/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-token.svg";

  const XPLADropdown = (
    <div
      onClick={() => {
        setTkn2xpla(!isfrom);
        setRatioShow(isfrom ? 0 : 1);
        onClickFn();
      }}
      className="hover:bg-[#f2f2f2] py-[7px] h-[36px] pl-[26px] hover:cursor-pointer flex items-center"
    >
      <img className="w-[22px] mr-[8px]" src={xplaImgsrc} alt="xplaToken" />
      <span className="leading-[14px] font-semibold text-[14px]">XPLA</span>
    </div>
  );

  const TokenDropdown = (
    <div
      onClick={() => {
        setTkn2xpla(isfrom);
        setRatioShow(isfrom ? 1 : 0);
        onClickFn();
      }}
      className="hover:bg-[#f2f2f2] py-[7px] h-[36px] pl-[26px] hover:cursor-pointer  flex items-center"
    >
      <img className="w-[22px] mr-[8px]" src={tokenImgsrc} />
      <span className="leading-[14px] font-semibold text-[14px]">
        ACADEMY-TKN
      </span>
    </div>
  );

  return (
    <div
      ref={dropdownRef}
      className={clsx(
        "dropdown",
        "dropdown--hoverable",
        "p-0",
        "ml-2",
        "dropdownArrow",
      )}
    >
      <SwapDropdownLink
        aria-haspopup="true"
        role="button"
        href={props.to ? undefined : "#"}
        className={clsx("swap_navbar__link-custom", className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        imgsrc={nowXPLASelected ? xplaImgsrc : tokenImgsrc}
      />
      <ul className="dropdown__menu swapDropdownMenu">
        {nowXPLASelected ? (
          <>
            {TokenDropdown}
            {XPLADropdown}
          </>
        ) : (
          <>
            {XPLADropdown}
            {TokenDropdown}
          </>
        )}
      </ul>
    </div>
  );
}
