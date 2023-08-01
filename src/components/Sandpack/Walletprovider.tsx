import { Sandpack } from "@codesandbox/sandpack-react";
import React from "react";
import {wpAppCode} from "../CodeBlock/CodeWPApp";
import {wpIndexCode} from "../CodeBlock/CodeWPIndex";
import {wpCssCode} from "../CodeBlock/CodeWPCss";

const WalletProvider = () => {
  const files = {
    "App.js": wpAppCode,
    "index.js" : wpIndexCode,
    "index.css" : wpCssCode
  };

  return (
    <Sandpack
      theme="light"
      template="react"
      customSetup={{
        dependencies: {
          "@xpla/xpla.js": "^0.3.1",
          "@xpla/wallet-provider": "^0.4.1",
          "react-scripts": "^4.0.3",
        },
      }}
      options={{
        visibleFiles: ["App.js", "/package.json", "index.js", "index.css"],
        editorHeight: 600,
        showTabs: true,
        showLineNumbers: true,
        // showConsole: true,
      }}
      files={files}
    ></Sandpack>
  );
};

export default WalletProvider;
