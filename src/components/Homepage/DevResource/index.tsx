import clsx from "clsx";
import React, { useCallback, useState } from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export async function copyToClipboard(text?: string | number) {
  if (text === undefined) return false;

  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text.toString());
  }
  return true;
}

type ResourceItem = {
  title: string;
  link: string;
  color: string;
};

type EndpointItem = {
  title: string;
  link: string;
};

const ResourceList: ResourceItem[] = [
  {
    title: "Github",
    link: "https://github.com/xpladev",
    color: "#00B2FC",
  },
  {
    title: "Vault",
    link: "https://vault.xpla.io/",
    color: "#1277FF",
  },
  {
    title: "Explorer",
    link: "https://explorer.xpla.io/",
    color: "#00B2FC",
  },
  {
    title: "API Swagger",
    link: "https://dimension-lcd.xpla.dev/swagger/#/",
    color: "#1277FF",
  },
  {
    title: "XPLA.js",
    link: "https://www.npmjs.com/package/@xpla/xpla.js",
    color: "#00B2FC",
  },
  {
    title: "Faucet",
    link: "https://faucet.xpla.io/",
    color: "#1277FF",
  },
];

function Resource({ title, link, color }: ResourceItem) {
  return (
    <Link
      to={link}
      className={clsx("flex flex-col p-5 gap-5", styles.devResourceButton)}
      style={{ backgroundColor: color, textDecoration: "none" }}
    >
      <div className="font-bold text-[20px] text-[#ffffff]">{title}</div>
      <div className="flex justify-end">
        <ArrowForwardIosIcon sx={{ color: "white" }} />
      </div>
    </Link>
  );
}

const MainnetEndpointList: EndpointItem[] = [
  {
    title: "LCD",
    link: "https://dimension-lcd.xpla.dev",
  },
  {
    title: "RPC",
    link: "https://dimension-rpc.xpla.dev",
  },
  {
    title: "FCD",
    link: "https://dimension-fcd.xpla.dev",
  },
  {
    title: "GRPC",
    link: "dimension-grpc.xpla.dev:9090",
  },
  {
    title: "Websocket",
    link: "wss://dimension-rpc.xpla.dev/websocket",
  },
];

const TestnetEndpointList: EndpointItem[] = [
  {
    title: "LCD",
    link: "https://cube-lcd.xpla.dev",
  },
  {
    title: "RPC",
    link: "https://cube-rpc.xpla.dev",
  },
  {
    title: "FCD",
    link: "https://cube-fcd.xpla.dev",
  },
  {
    title: "GRPC",
    link: "cube-grpc.xpla.dev:9090",
  },
  {
    title: "Websocket",
    link: "wss://cube-rpc.xpla.dev/websocket",
  },
];

function Endpoint({ title, link }: EndpointItem) {
  const handleClickCopy = useCallback(() => {
    copyToClipboard(link);
  }, []);

  return (
    <div className="flex justify-between">
      <div className="flex">
        <span className="text-[18px] font-bold w-[175px]">{title}</span>
        <span className="text-[18px] font-medium">{link}</span>
      </div>
      <img
        onClick={handleClickCopy}
        src="/xpla-academy-dev/img/DevResource/CopyButton.svg"
        className="hover:cursor-pointer hover:opacity-60"
      />
    </div>
  );
}

export default function DevResource({
  moveToElement,
}: {
  moveToElement: React.MutableRefObject<HTMLDivElement>;
}): JSX.Element {
  const [openMainnet, setOpenMainnet] = useState<boolean>(false);
  const [openTestnet, setOpenTestnet] = useState<boolean>(false);
  return (
    <section
      ref={moveToElement}
      className="bg-[#F5F4F4] px-[16px] pt-[117px] pb-[147px] flex flex-col gap-[55px] items-center"
    >
      <div className="#333333 font-bold text-[50px]">
        Tap into the DEV Resources
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 max-w-[1180px] w-[100%]">
        {ResourceList.map((props, idx) => (
          <Resource key={idx} {...props} />
        ))}
      </div>
      <div className={clsx("max-w-[1180px] w-[100%]", styles.endpointShadow)}>
        <div
          onClick={() => setOpenMainnet(!openMainnet)}
          className={clsx(
            "hover:cursor-pointer bg-[#C9FF00]",
            "text-[20px] flex justify-between items-center",
            styles.endpointMainnet
          )}
        >
          <span>
            ENDPOINT<span className="font-bold">(MAINNET)</span>
          </span>
          <ArrowDropDownIcon
            sx={{ color: "black", fontSize: 60 }}
            className={clsx(openMainnet ? styles.dropdownRotate : "")}
          />
        </div>

        {openMainnet && (
          <div className={styles.endpointURL}>
            <div className="flex flex-col w-[100%] gap-5">
              {MainnetEndpointList.map((props, idx) => (
                <Endpoint key={idx} {...props} />
              ))}
            </div>
          </div>
        )}

        <div
          onClick={() => setOpenTestnet(!openTestnet)}
          className={clsx(
            "hover:cursor-pointer bg-[#004FFF]",
            "text-[#ffffff] text-[20px] flex justify-between items-center",
            styles.endpointTestnet
          )}
        >
          <span>
            ENDPOINT<span className="font-bold">(TESTNET)</span>
          </span>
          <ArrowDropDownIcon
            sx={{ color: "white", fontSize: 60 }}
            className={clsx(openMainnet ? styles.dropdownRotate : "")}
          />
        </div>
        {openTestnet && (
          <div className={styles.endpointURL}>
            <div className="flex flex-col w-[100%] gap-5">
              {TestnetEndpointList.map((props, idx) => (
                <Endpoint key={idx} {...props} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
