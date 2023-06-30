import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to follow',
    Svg: '/xpla-academy-dev/img/homepage/follow.svg',
    description: (
      <>
        따라하기 쉬운 난이도 Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Freely moddable',
    Svg: '/xpla-academy-dev/img/homepage/free.svg',
    description: (
      <>
        코드 이용의 높은 자유도 Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Game developer-friendly',
    Svg: '/xpla-academy-dev/img/homepage/friend.svg',
    description: (
      <>
        게임 개발자 친화적 Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container py-20">
        <div className='flex flex-1 justify-center text-3xl min-[996px]:text-4xl font-bold py-12'>
          Why XPLA Academy?
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
