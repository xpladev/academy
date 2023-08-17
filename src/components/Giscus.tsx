import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";
import React from "react";

const GiscusComponent = ({term } : {term : string}) => {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      id="Comments"
      repo="nglsena0722c/academy"
      repoId="R_kgDOJvLd5A"
      category="Announcements"
      categoryId="DIC_kwDOJvLd5M4CXagy"
      mapping="specific"
      term={term}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={colorMode}
      lang="en"
    />
  );
};

export default GiscusComponent;
