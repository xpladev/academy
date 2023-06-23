import React from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import DocPaginator from '@theme/DocPaginator';
import GiscusComponent from "@site/src/components/Giscus";

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
    <DocPaginator previous={metadata.previous} next={metadata.next} />
  </>;
}
