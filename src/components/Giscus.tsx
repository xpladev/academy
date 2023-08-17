import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";
import React from "react";

const GiscusComponent = ({term } : {term : string}) => {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      id="Comments"
      repo="xpladev/academy"
      repoId="R_kgDOKHsLWQ"
      category="Announcements"
      categoryId="DIC_kwDOKHsLWc4CYqUw"
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
