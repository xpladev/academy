import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const CustomTranslation = ({ en, kr }: { en: string; kr: string }) => {
  const { i18n } = useDocusaurusContext();
  
  if (i18n.currentLocale === "en") return en;
  return kr;
};

export default CustomTranslation;
