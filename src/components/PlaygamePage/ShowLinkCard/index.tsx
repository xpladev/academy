import Link from "@docusaurus/Link";
import React from "react";
import "./index.css";

const ShowLinkCard = () => {
  return (
    <div
      className={`h-[70%] min-w-[100vw] bg-[#F5F4F4] flex flex-col gap-[65px] justify-center items-center relative px-[10px]`}
    >
      <div className="flex gap-[30px]">
        <Link
          to="https://github.com/xpladev/academy"
          className="font-medium text-[24px] leading-[34px] w-[370px] aspect-square p-[50px] flex flex-col justify-between text-black hover:text-white buttonShadow10px bg-white hover:bg-[#00B2FC] svgHoverWhite"
          style={{ textDecoration: "none" }}
          aria-label={"xpla-academy-github"}
        >
          Feel free to utilize the
          <br />
          source code
          <br />
          of Demo Game.
          <div className="flex justify-between items-end">
            <span className="font-semibold text-[40px]">Github</span>
            <svg
              width="53"
              height="21"
              viewBox="0 0 53 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_122_241)">
                <path
                  d="M52.495 20.1579H0.631592V17.1681H45.2596L30.9085 2.79701L33.0213 0.684204L52.495 20.1579Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_122_241">
                  <rect
                    width="51.8634"
                    height="19.4737"
                    fill="white"
                    transform="translate(0.631592 0.684204)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </Link>
        <Link
          to="/startlearning/overview/intro"
          className="font-medium text-[24px] leading-[34px] w-[370px] aspect-square p-[50px] flex flex-col justify-between text-black hover:text-white buttonShadow10px bg-white hover:bg-[#00B2FC] svgHoverWhite"
          style={{ textDecoration: "none" }}
          aria-label={"xpla-academy-github"}
        >
          Explore how to connect
          <br />
          XPLA to your project.
          <div className="flex justify-between items-end">
            <span className="font-semibold text-[40px] leading-[47px]" >
              Start <br />
              Learning
            </span>
            <svg
              width="53"
              height="21"
              viewBox="0 0 53 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_122_241)">
                <path
                  d="M52.495 20.1579H0.631592V17.1681H45.2596L30.9085 2.79701L33.0213 0.684204L52.495 20.1579Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_122_241">
                  <rect
                    width="51.8634"
                    height="19.4737"
                    fill="white"
                    transform="translate(0.631592 0.684204)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </Link>
        <Link
          to="/ops"
          className="relative font-medium text-[24px] leading-[34px] w-[370px] aspect-square p-[50px] flex flex-col justify-between text-black hover:text-white buttonShadow10px bg-white hover:bg-[#00B2FC] svgHoverWhite"
          style={{ textDecoration: "none" }}
          aria-label={"xpla-academy-github"}
        >
          Web3 features in Web2
          <br />
          game with
          <br />
          Web3 Gaming Ops.
          <div className="flex justify-between items-end">
            <span className="font-semibold text-[40px] leading-[47px]">
              Web3 Gaming
              <br />
              Ops
            </span>
            <svg
              width="53"
              height="21"
              viewBox="0 0 53 21"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-[50px] bottom-[50px]"
            >
              <g clip-path="url(#clip0_122_241)">
                <path
                  d="M52.495 20.1579H0.631592V17.1681H45.2596L30.9085 2.79701L33.0213 0.684204L52.495 20.1579Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_122_241">
                  <rect
                    width="51.8634"
                    height="19.4737"
                    fill="white"
                    transform="translate(0.631592 0.684204)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </Link>
      </div>
      <div className="font-bold text-[50px] leading-[60px] text-black text-center">
        Now Enjoy
        <br />
        XPLA ACADEMY through gameplay!
      </div>
    </div>
  );
};

export default ShowLinkCard;
