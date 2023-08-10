import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type FeatureItem = {
  Svg: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    Svg: "/xpla-academy-dev/img/HomepageFeatures/easy-to-follow.svg",
    description: <>Easy to follow</>,
  },
  {
    Svg: "/xpla-academy-dev/img/HomepageFeatures/freely-moddable.svg",
    description: <>Freely moddable</>,
  },
  {
    Svg: "/xpla-academy-dev/img/HomepageFeatures/game-developer-friendly.svg",
    description: <>Game developer-friendly</>,
  },
];

function Feature({ Svg, description }: FeatureItem) {
  return (
    <div
      className={clsx("flex flex-1 justify-center items-center", styles.card)}
    >
      <div className="flex flex-col gap-[33px]">
        <div className="flex flex-1 justify-center">
          <img src={Svg} />
        </div>
        <span className="font-bold text-[26px] ">{description}</span>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="h-[812px] bg-[#004FFF] relative flex justify-center items-center px-[16px]">
      <img
        className={styles.ellipsis}
        src={`/xpla-academy-dev/img/HomepageFeatures/ellipsis.svg`}
      />
      <img
        className={styles.square}
        src={`/xpla-academy-dev/img/HomepageFeatures/square.svg`}
      />
      <div className="max-w-[1180px] flex flex-1 justify-center items-center z-10">
        <div className="flex flex-col flex-1 gap-[77px]">
          <span className="text-[#ffffff] flex flex-1 justify-center font-semibold text-[50px]">
            Why XPLA Academy?
          </span>
          <div className="flex flex-1 gap-[20px]">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
