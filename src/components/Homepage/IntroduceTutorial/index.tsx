import React from "react";
import styles from "./styles.module.css";
import Slider from "../../Slider";
import Link from "@docusaurus/Link";

interface SliderItemType {
  url: string;
  contents: string;
  link: string;
}

export default function PlayGame(): JSX.Element {
  const items :SliderItemType[] = [
    {
      url : '/xpla-academy-dev/img/homepage/overview.svg',
      contents : 'Learn More',
      link : '/docs/overview/gameArchitecture'
    },
    {
      url : '/xpla-academy-dev/img/homepage/settings.svg',
      contents : 'Learn More',
      link : '/docs/category/create-wallet'
    },
    {
    url : '/xpla-academy-dev/img/homepage/web3build-1.svg',
    contents : 'Learn More',
    link : '/docs/tutorial/make-web3-game/make-cw20-with-js'
  },
  {
    url : '/xpla-academy-dev/img/homepage/web3build-2.svg',
    contents : 'Learn More',
    link : '/docs/tutorial/make-web3-game/make-cw20-with-js'
  },
  {
    url : '/xpla-academy-dev/img/homepage/p2obase-1.svg',
    contents : 'Learn More',
    link : '/docs/tutorial/add-func-to-game-1/make-nft'
  },
  {
    url : '/xpla-academy-dev/img/homepage/p2obase-2.svg',
    contents : 'Learn More',
    link : '/docs/tutorial/add-func-to-game-1/write-contract'
  },
  {
    url : '/xpla-academy-dev/img/homepage/xplaonboard-1.svg',
    contents : 'Learn More',
    link : '/docs/tutorial/add-func-to-game-2/login'
  },
  {
    url : '/xpla-academy-dev/img/homepage/xplaonboard-2.svg',
    contents : 'Learn More',
    link : '/docs/tutorial/add-func-to-game-2/walletconnect'
  },
  {
    url : '/xpla-academy-dev/img/homepage/xplaonboard-3.svg',
    contents : 'Learn More',
    link : '/docs/tutorial/add-func-to-game-2/convert'
  },
  {
    url : '/xpla-academy-dev/img/homepage/xplaonboard-4.svg',
    contents : 'Learn More',
    link : '/docs/tutorial/add-func-to-game-2/db-contract'
  },

]

  return (
    <section className={styles.features}>
      <div className="container mb-20">
        <div className="flex flex-1 justify-center text-3xl min-[996px]:text-4xl font-bold py-8">
          Tutorial 소개 문장
        </div>
        <div className="flex justify-center">
          <Slider
            elements={items.map((item) => <SliderItem url={item.url} contents={item.contents} link={item.link}/>)}
          />
        </div>
      </div>
    </section>
  );
}

const SliderItem = ({
  url,
  contents,
  link,
}: SliderItemType) => {
  return (
    <div
      className="flex justify-center mt-12 w-[928px] h-[525px]"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
      }}
    >
      <Link
        className="button button--secondary button--lg mt-[420px] mb-[60px] bg-[#666666]"
        to={link}
      >
        <span className="text-white">{contents}</span>
      </Link>
    </div>
  );
};
