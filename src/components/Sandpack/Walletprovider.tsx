import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackConsole,
} from "@codesandbox/sandpack-react";
import React from "react";

const WalletProvider = () => {
  const files = {
    "Connect.jsx" : `import { ConnectType, useWallet, WalletStatus } from "@xpla/wallet-provider";
import React from "react";

export default function Connect() {
  const {
    status,
    network,
    wallets,
    availableConnections,
    availableConnectTypes,
    connect,
    disconnect,
  } = useWallet();

  const clickConnect = async () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      connect();
    } else {
      disconnect();
    }
  };
  return (
    <div className="buttonContainer" onClick={clickConnect}>
      {status === WalletStatus.WALLET_NOT_CONNECTED ? (
        <span>Connect Wallet</span>
      ) : wallets.length == 0 ? (
        'Loading...'
      ) : (
        <span>{(wallets[0].xplaAddress)}</span>
      )}
    </div>
  );
}`,
"SendTx.jsx" : `import { useConnectedWallet, UserDenied, useWallet, WalletStatus } from "@xpla/wallet-provider";
import React, { useState } from "react";
import { Fee,  MsgSend, TxResult } from '@xpla/xpla.js';

export default function SendTx() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    connect,
    disconnect,
  } = useWallet();
  const clickConnect = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      connect(availableConnectTypes[0]);
    } else {
      disconnect();
    }
  };
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const [txResult, setTxResult] = useState(null);
  const [txError, setTxError] = useState(null);
  
  const connectedWallet = useConnectedWallet();

  const handleSend = async () => {
    try{

    const transactionMsg = {
        fee: new Fee(500000, '500000000000000000axpla'),
        msgs: [
          new MsgSend(
            connectedWallet.walletAddress,
            recipient,
            {
                axpla : amount +"000000000000000000"
            }
          ),
        ],
      };
      const tx = await connectedWallet.post(transactionMsg);
      setTxResult(tx);
    } catch (error) {
      if (error instanceof UserDenied) {
        setTxError('User Denied');
      } else {
        setTxError(
          "Unknown Error: " + error instanceof Error ? error.message : String(error)
          ,
        );
      }
    }

  }

  return (
<>
<div
    className="buttonContainer"
  >
      <div className="mb-2">
        <label
          htmlFor="default-input"
          className="connectwallet"
        >
          Recipient
        </label>
        <input
          autoComplete="off"
          type="text"
          id="default-input"
          placeholder="Input Recipient's xpla address."
          onChange={(e) => setRecipient(e.target.value)}
          className="connectwallet"
          style={{
            width : '100%'
          }}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="default-input"
          className="connectwallet"
        >
          Amount
        </label>
        <input
          type="text"
          id="default-input"
          autoComplete="off"
          placeholder="Input number. If you want to send 1 Xpla, just input 1."
          onChange={(e) => setAmount(e.target.value)}
          className="connectwallet"
          style={{
            width : '100%'
          }}
        />
      </div>
  </div>
  <button onClick={handleSend}>
    send
  </button>
  <div className="connectwallet">
        <div className="connectwallet">
          Result
          {txResult && (
            <a
              href={"https://explorer.xpla.io/" + network.name + "/tx/" + txResult.result.txhash}
              target="_blank"
              rel="noreferrer"
            >
              {txResult.result.txhash}
            </a>
          )}
          <span>{txError}</span>
        </div>
      </div>
</>
  );
}`,


    "App.js": `import Connect from "./Connect";
import SendTx from "./SendTx";
    
export default function App() {
  return <>
    <Connect />
    <SendTx/>
  </>
}
    `,
    "index.js" : `import React from "react";
    import { createRoot } from "react-dom/client";
    import "./styles.css";
    import {
      getChainOptions,
      WalletProvider,
    } from "@xpla/wallet-provider";
    import App from "./App";
    
    const root = createRoot(document.getElementById('root'));
    getChainOptions().then((chainOptions) => {
      root.render(
        <WalletProvider {...chainOptions}>
          <App />
        </WalletProvider>
      );
    });`,
    "styles.css" : `body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}

.buttonContainer {
  display : flex;
  justify-content: center;
  background-color: white;
  cursor : pointer;
  border-radius: 24px;
  border : 1px solid black;
  padding : 8px;
}

`
  };

  return (
    <SandpackProvider
      theme="light"
      template="react"
      customSetup={{
        dependencies: {
          express: "^4.18.2",
          "stream-browserify": "latest",
          "@xpla/xpla.js": "^0.3.1",
          "@xpla/wallet-provider" : "^0.4.1",
          "react-scripts" : "^4.0.3",
        },
      }}
      options={{
        visibleFiles: ["App.js", "Connect.jsx", "SendTx.jsx"],
      }}
      files={files}
    >
      <SandpackLayout>
        <SandpackFileExplorer />
        <SandpackCodeEditor closableTabs showTabs />
      </SandpackLayout>

      {/* Layout 길이를 조금 늘릴 것 */}
      <SandpackLayout>
        <SandpackPreview />
      </SandpackLayout>
      <SandpackLayout>
        <SandpackConsole />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export default WalletProvider;
