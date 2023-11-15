import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { isRegexpStringMatch } from "@docusaurus/theme-common";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import clsx from "clsx";
import "./SwapDropdown.css";

export default function SwapDropdownLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  imgsrc,
  html,
  isDropdownLink,
  prependBaseUrlToHref,
  ...props
}) {

  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);

  // Link content is set through html XOR label
  const linkContentProps = html
    ? { dangerouslySetInnerHTML: { __html: html } }
    : {
        children: (
          <div
            className={clsx(
              "w-[180px] pb-[5px] flex justify-between items-center border-solid border-0 border-b-[1px] dropdownArrow"
            )}
            style={{
              borderBottomColor: "#00B2FC",
            }}
          >
            <div className="flex items-center gap-[5px]">
              <img src={imgsrc} className="w-[26px]" />
              <span className="text-[16px] font-semibold">{label}</span>
            </div>
            <ArrowDropDownIcon
              style={{
                fill: "#00B2FC",
                transform: props.rotate,
              }}
            />
          </div>
        ),
      };
  return (
    <Link
      aria-label="open-explorer"
      to={toUrl}
      isNavLink
      {...((activeBasePath || activeBaseRegex) && {
        isActive: (_match, location) =>
          activeBaseRegex
            ? isRegexpStringMatch(activeBaseRegex, location.pathname)
            : location.pathname.startsWith(activeBaseUrl),
      })}
      style={{
        textDecoration: "none",
      }}
      {...props}
      {...linkContentProps}
    />
  );
}
