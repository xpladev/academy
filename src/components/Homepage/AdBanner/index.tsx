import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from './styles.module.css';

const AdBanner = () => {
  return (
    <div className="h-[60px] w-full">
      <Link
        to="https://app.glitch-hack.com/"
        className="h-[60px] w-full flex justify-center items-center px-[16px] bg-[#004FFF] text-white hover:text-white"
        style={{ textDecoration: "none" }}
      >
        <div className="relative flex items-center max-w-[1180px] w-[100%]">
          <img
            className="absolute left-0 mt-2"
            src="/img/Banner/banner.svg"
          />
          <div className={clsx("absolute right-0 flex items-center text-[16px] font-medium", styles.bannerWord)}>
            Period&nbsp;
            <span className="font-bold ">Aug 18th-27th&nbsp;</span>| Demo
            Day&nbsp;
            <span className="font-bold ">Sep 3rd @Seoul</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default AdBanner;
