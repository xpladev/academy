import clsx from "clsx";
import styles from "./styles.module.css";
import React from "react";
import Link from "@docusaurus/Link";

export default function ContactUs() {
  return (
    <section className="h-[276px] bg-[#F5F4F4] relative flex justify-center items-center px-[16px]">
      <img
        className={styles.star}
        src={`/xpla-academy-dev/img/ContactUs/star.svg`}
      />

      <img
        className={styles.earth}
        src={`/xpla-academy-dev/img/ContactUs/earth.svg`}
      />
      <div className="z-10 relative">
        <div className="flex flex-col items-center gap-[20px]">
          <span className="text-[#000000] font-semibold text-[42px]">
            Interested in Collaborating?
          </span>
          <Link
            to="/docs/overview/intro"
            className={clsx(
              "w-fit bg-[#00B2FC] flex items-center justify-center py-[12px] px-[36px] text-[#000000] hover:text-[#000000] hover:no-underline",
              styles.contactButton
            )}
          >
            <span className="font-medium text-[28px] ">Contact Us</span>
          </Link>
        </div>
        <img
          className={styles.heart}
          src={`/xpla-academy-dev/img/ContactUs/heart.svg`}
        />
      </div>
    </section>
  );
}
