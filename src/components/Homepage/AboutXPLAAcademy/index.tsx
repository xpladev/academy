import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function AboutXPLAAcademy(): JSX.Element {
  return (
    <section className="min-[997px]:h-[920px] max-[996px]:py-[20px] px-[20px] bg-[#004FFF] flex justify-center items-center">
      <div className="max-w-[1180px] w-full flex flex-col justify-center items-start">
        <div className="font-bold text-[50px] leading-[60px] text-white mb-[18px]">
          About XPLA ACADEMY
        </div>
        <div className="font-normal text-[28px] leading-[36px] text-[#46E9FC] mb-[105px]">
          <span>Education hub for building XPLA-linked Web3 projects.</span>
          <br />
          <span>Easy to follow guides and free source codes.</span>
        </div>
        <div className="w-full flex max-[996px]:flex-col gap-[80px] items-center ">
          <img
            src="/img/AboutXPLAAcademy/venn_diagram.svg"
            alt="venn_diagram"
          />

          <div>
            <div className="text-[40px] leading-[48px] text-[#C9FF00] font-bold mb-[16px]">
              Start Learning
            </div>
            <div className="text-[29px] leading-[38px] font-semibold text-white mb-[4px]">
              Connect XPLA to your project.
            </div>
            <div className="font-normal text-[29px] leading-[38px] text-white mb-[70px]">
              Add Web3 features by following the Code Along Guide.
            </div>
            <div className="text-[#46E9FC] text-[40px] leading-[48px] font-bold">
              Try Demo
            </div>
            <div className="text-white text-[29px] leading-[38px] font-semibold">
              Interact with the Demo projects.
            </div>
            <div className="text-white text-[29px] leading-[34px] font-normal">
              Everything built from Start Learning content!
            </div>
            <div className="relative text-white text-[29px] leading-[34px] font-normal ">
              From Web3 Game Project to{" "}
              <span className="font-bold text-[#FAED00] inline-flex items-start">
                Web3 Gaming Ops.
                <span className="mt-[3px] font-normal text-[16px] leading-[16px]">
                  *&nbsp; 
                </span>
              </span>
                <span className="min-[1676px]:absolute text-[#FAED00] min-[1676px]:mt-[3px] whitespace-nowrap font-normal text-[16px] leading-[34px]">(A tool for managing Web3 assets) </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
