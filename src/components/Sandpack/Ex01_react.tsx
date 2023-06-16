import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import React from "react";

const Ex01_react = () => {
  return (
    <SandpackProvider
      files={{
        "/App.js": `import { LCDClient, MnemonicKey } from '@xpla/xpla.js';

export default function App() {
    const newKey = new MnemonicKey();

    const lcd = new LCDClient({
      chainID : 'cube_47-5', // xpla testnet network의 이름
      URL : 'https://cube-lcd.xpla.dev' // xpla testnet LCD URL
    });

    return <>
    <h3>mnemonic: {newKey.mnemonic}</h3>
    <h3>accAddress: {lcd.wallet(newKey).key.accAddress}</h3>
    </> 
}`,
      }}
      theme="light"
      template="react"
      customSetup={{
        dependencies: {
          "@xpla/xpla.js": "^0.3.1",
          "crypto-browserify": "latest",
        },
      }}
    >
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor closableTabs showTabs />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default Ex01_react;
