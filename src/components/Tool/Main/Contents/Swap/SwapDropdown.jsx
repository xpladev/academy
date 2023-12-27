import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import {
  isRegexpStringMatch,
  useCollapsible,
  Collapsible,
} from "@docusaurus/theme-common";
import {
  isSamePath,
  useLocalPathname,
} from "@docusaurus/theme-common/internal";
import NavbarNavLink from "@theme/NavbarItem/NavbarNavLink";
import NavbarItem from "@theme/NavbarItem";
import "./SwapDropdown.css";
import SwapDropdownLink from "./SwapDropdownLink";

function isItemActive(item, localPathname) {
  if (isSamePath(item.to, localPathname)) {
    return true;
  }
  if (isRegexpStringMatch(item.activeBaseRegex, localPathname)) {
    return true;
  }
  if (item.activeBasePath && localPathname.startsWith(item.activeBasePath)) {
    return true;
  }
  return false;
}
function containsActiveItems(items, localPathname) {
  return items.some((item) => isItemActive(item, localPathname));
}
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

  const xplaImgsrc = "/img/tool/Main/stroke-xpla.svg";
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
        "navbar__item",
        "dropdown",
        "dropdown--hoverable",
        "p-0",
        "ml-2",
        "dropdownArrow",
        {
          // 'dropdown--show': showDropdown,
        }
      )}
    >
      <SwapDropdownLink
        aria-haspopup="true"
        role="button"
        href={props.to ? undefined : "#"}
        className={clsx("swap_navbar__link-custom", className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        // onKeyDown={(e) => {
        //   if (e.key === 'Enter') {
        //     e.preventDefault();
        //     setShowDropdown(!showDropdown);
        //   }
        // }}
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
