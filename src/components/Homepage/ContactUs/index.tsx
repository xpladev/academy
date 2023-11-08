import clsx from "clsx";
import styles from "./styles.module.css";
import React from "react";
import Link from "@docusaurus/Link";

export default function ContactUs() {
  return (
    <section className="h-[276px] bg-[#F5F4F4] relative flex justify-center items-center px-[16px]">
      <img
        className={styles.star}
        src={`/img/ContactUs/star.svg`}
        width="225px"
        height="164px"
        alt="star"
      />

      <img
        className={styles.earth}
        src={`/img/ContactUs/earth.svg`}
        width="476px"
        height="276px"
        alt="earth"
      />
      <div className="z-10 relative">
        <div className="flex flex-col items-center gap-[20px]">
          <span className="text-[#000000] font-semibold text-[30px] md:text-[42px] text-center">
            Interested in Collaborating?
          </span>
            <a href="mailto:xpla_official@xpla.io" className={clsx(
              "w-fit bg-[#00B2FC] flex items-center justify-center py-[5px] px-[36px] text-[#000000] hover:text-[#000000] hover:no-underline",
              styles.contactButton
            )}>
            <span className="font-medium text-[28px]">Contact Us</span>
            </a>
        </div>
        <img
          className={styles.heart}
          src={`/img/ContactUs/heart.svg`}
          alt="heart"
          width="146px"
          height="109px"
        />
      </div>
    </section>
  );
}
