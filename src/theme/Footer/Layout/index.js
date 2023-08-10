import React from 'react';
import clsx from 'clsx';
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import NorthIcon from '@mui/icons-material/North';

const LinkList = [
  {
    title: 'SERVICE',
    content: [
      {
        description: 'XPLA VAULT',
        link: 'https://vault.xpla.io/'
      },
      {
        description: 'XPLA EXPLORER',
        link: 'https://explorer.xpla.io/'
      },
      {
        description: 'XPLA AIRDROP',
        link: 'https://airdrop.xpla.io/'
      },
    ]
  },
  {
    title: 'COMMUNITY',
    content: [
      {
        description: 'TWITTER',
        link: 'https://twitter.com/XPLA_Official'
      },
      {
        description: 'MEDIUM',
        link: 'https://medium.com/@XPLA_Official'
      },
      {
        description: 'TELEGRAM',
        link: 'https://t.me/Official_XPLA'
      },
    ]
  },
  {
    title: 'DEV RESOURCES',
    content: [
      {
        description: 'XPLA DOCS',
        link: 'https://docs.xpla.io/docs/learn/about-xpla-chain/'
      },
      {
        description: 'XPLA.JS',
        link: 'https://www.npmjs.com/package/@xpla/xpla.js'
      },
      {
        description: 'XPLAD',
        link: 'https://docs.xpla.io/docs/develop/tools/xplad/about-xplad/'
      },
      {
        description: 'ENDPOINTS',
        link: 'https://docs.xpla.io/docs/full-node/resources/public-and-private-endpoints/'
      },
      {
        description: 'XPLA FAUCET',
        link: 'https://faucet.xpla.io/'
      },
      {
        description: 'XPLA DEV GITHUB',
        link: 'https://github.com/xpladev'
      },
    ]
  },
  {
    title: 'LEARN MORE',
    content: [
      {
        description: 'COSMOS HUB',
        link: 'https://hub.cosmos.network/main/hub-overview/overview.html'
      },
      {
        description: 'TENDERMINT',
        link: 'https://tendermint.com/'
      },
      {
        description: 'COSMWASM',
        link: 'https://book.cosmwasm.com/'
      },
      {
        description: 'HERMES',
        link: 'https://hermes.informal.systems/'
      },
    ]
  },
];


export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('bg-[#000000] h-[510px] flex flex-col p-0 items-center')}>
      <div className="max-w-[1180px] w-[100%] py-10">


        <div className="flex justify-between">
          {
            LinkList.map((LinkSubject, subjectIdx) => (
              <div key={subjectIdx} className="flex flex-col gap-9">
                <span className="text-[#D9D9D9] font-bold text-[18px]">{LinkSubject.title}</span>
                <div className="flex flex-col gap-3">
                  {
                    LinkSubject.content.map((LinkInfo, infoIdx) => (
                      <Link key={infoIdx} to={LinkInfo.link} className="hover:opacity-60" style={{ textDecoration: 'none' }}>
                        <span className="text-[#D9D9D9] font-bold text-[16px]">{LinkInfo.description}</span>
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#00b2fc] w-[80px] h-[80px] flex justify-center items-center hover:cursor-pointer hover:opacity-60">
            <NorthIcon sx={{ fontSize: 50 }} />
          </div>
        </div>

      </div>
      <div className={clsx(styles.footerBorder, "")} />

      <div className="max-w-[1180px] w-[100%]">




      </div>
    </footer>
  );
}
