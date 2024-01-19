import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import DocPaginator from '@theme/DocPaginator';
import GiscusComponent from "@site/src/components/Giscus";
import i18n from "@generated/i18n";

/**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */
export default function DocItemPaginator() {
  const { metadata } = useDoc();

  return <>
    <br />
    <GiscusComponent term={metadata.id} />
    <br />
    <DocPaginator previous={considerTranslation(metadata.previous)} next={considerTranslation(metadata.next)} />
  </>;
}

const considerTranslation = (linkdata) => {
  if (!linkdata) return linkdata;
  if (i18n.currentLocale === "en") {
    return linkdata
  }

  switch (linkdata.title) {
    case "Let's get your Wallet ready!":
      return {
        title: "지갑 생성하기",
        permalink: linkdata.permalink
      }
    case "Time to Make Transactions!":
      return {
        title: "트랜잭션 생성하기",
        permalink: linkdata.permalink
      }
    case "Utilize Tokens (CW20)":
      return {
        title: "토큰(CW20) 다루기",
        permalink: linkdata.permalink
      }

    case "Utilize NFT(CW721)":
      return {
        title: "NFT(CW721) 다루기",
        permalink: linkdata.permalink
      }
    case "Advanced - Dive deep into XPLA blockchain":
      return {
        title: "심화 - XPLA 블록체인 깊게 이해하기",
        permalink: linkdata.permalink
      }
    default:
      return linkdata;

  }
}