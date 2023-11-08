import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

type FeatureItem = {
  Svg: string;
  description: JSX.Element;
  rightBorder : boolean;
  sizes : string;
};

const FeatureList: FeatureItem[] = [
  {
    Svg: "/img/HomepageFeatures/easy-to-follow.svg",
    description: <>Easy to follow tutorials</>,
    rightBorder : true,
    sizes : "(max-width: 768px) 100px, 150px",
  },
  {
    Svg: "/img/HomepageFeatures/freely-moddable.svg",
    description: <>Flexible Modularity</>,
    rightBorder : true,
    sizes :"(max-width: 768px) 121px",

  },
  {
    Svg: "/img/HomepageFeatures/game-developer-friendly.svg",
    description: <>Game DEV-friendly</>,
    rightBorder : false,
    sizes : "(max-width: 768px) 158px",

  },
];

function Feature({ Svg, description, rightBorder, sizes }: FeatureItem) {
  return (
    <div
      className={clsx("flex flex-1 justify-center items-center", styles.card,rightBorder && [styles.rightBorder])}
    >
      <div className="flex flex-1 gap-[33px] items-center flex-row md:flex-col p-4 justify-between">
        <div className={clsx("flex flex-1 justify-between ")}>
          <img src={Svg} className={styles.mobileImg} alt="featureimg" sizes={sizes}/>
        </div>
        <span className="font-bold text-[26px] text-white ">{description}</span>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className="h-[812px] bg-[#004FFF] relative flex justify-center items-center px-[16px]">
      <img
        className={styles.ellipsis}
        src={`/img/HomepageFeatures/ellipsis.svg`}
        alt="ellipsis"
        sizes="(min-width: 1780px) 303px"
      />
      <img
        className={styles.square}
        src={`/img/HomepageFeatures/square.svg`}
        alt="square"
        sizes="(min-width: 1780px) 308px"
      />
      <div className="max-w-[1180px] flex flex-1 justify-center items-center z-10">
        <div className="flex flex-col flex-1 gap-[77px]">
          <span className="text-[#ffffff] flex flex-1 justify-center font-semibold text-[50px]">
            Dive into XPLA ACADEMY
          </span>
          <div className="flex-col md:flex-row flex flex-1 gap-[20px]">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
