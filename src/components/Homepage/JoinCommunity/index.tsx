import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function JoinCommunity(): JSX.Element {
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <section className="h-[580px] flex flex-col justify-center items-center px-[16px]">
      <div className="font-bold text-[50px] mb-[49px]">
        Join the XPLA DEV Network
      </div>
      <div className="flex max-[600px]:flex-col w-full max-w-[1180px]">
        <Link to="/submit" className="relative max-[600px]:mb-8 max-[600px]:min-h-[100px] max-[600px]:mr-0 mr-8 flex flex-1 bg-[#FF640C] buttonShadow12 min-h-[218px] hover:no-underline">
          <div className="min-[1100px]:ml-[80px] min-[1100px]:mt-[80px] flex min-[1100px]:flex-col justify-center items-center min-[1100px]:justify-start min-[1100px]:items-start w-full">
            <span className="text-white font-semibold text-[38px] mr-[10px] min-[1100px]:mr-0 min-[1100px]:mb-2 leading-[45px]">Submit</span>
            <img
              src={`/img/JoinCommunity/right-arrow.svg`}
              alt="right-arrow"
              width="44px"
              height="17px"
            />
          </div>
          <img
            className="invisible min-[1100px]:visible absolute right-[57px] mix-blend-soft-light"
            src={`/img/JoinCommunity/diamond.svg`}
            width="216px"
            height="216px"
            alt="diamond"
          />
          <img
            className="invisible min-[1100px]:visible absolute right-[36px] top-[40px] mix-blend-lighten"
            src={`/img/JoinCommunity/submitarrow.svg`}
            width="127px"
            height="95px"
            alt="submitarrow"
          />
          <img
            className="invisible min-[1100px]:visible absolute right-[73px] bottom-[25px]"
            src={`/img/JoinCommunity/submiticon.svg`}
            width="167px"
            height="140px"
            alt="submiticon"
          />
        </Link>
        <Link to="/feedback" className="relative max-[600px]:mb-8 max-[600px]:min-h-[100px] flex flex-1 bg-[#7300FF] buttonShadow12 min-h-[218px] hover:no-underline">
        <div className="min-[1100px]:ml-[80px] min-[1100px]:mt-[80px] flex min-[1100px]:flex-col justify-center items-center min-[1100px]:justify-start min-[1100px]:items-start w-full">
            <span className="text-white font-semibold text-[38px] mr-[10px] min-[1100px]:mr-0 min-[1100px]:mb-2 leading-[45px]">Feedback</span>
            <img
              src={`/img/JoinCommunity/right-arrow.svg`}
              alt="right-arrow"
              width="44px"
              height="17px"
            />
          </div>
          <img
            className="invisible min-[1100px]:visible absolute right-[57px] mix-blend-soft-light"
            src={`/img/JoinCommunity/diamond.svg`}
            width="216px"
            height="216px"
            alt="diamond"
          />
          <img
            className="invisible min-[1100px]:visible absolute right-[82px] top-[45px] mix-blend-lighten"
            src={`/img/JoinCommunity/feedbackbubble.svg`}
            width="140px"
            height="122px"
            alt="feedbackbubble"
          />
          <img
            className="invisible min-[1100px]:visible absolute right-[28px] bottom-[41px]"
            src={`/img/JoinCommunity/feedbackicon.svg`}
            width="248px"
            height="146px"
            alt="feedbackicon"
          />
        </Link>

      </div>
    </section>
  );
}
