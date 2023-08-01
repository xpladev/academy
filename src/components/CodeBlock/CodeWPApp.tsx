import CodeBlock from "@theme/CodeBlock";
import React from "react";

export const wpAppCode = `import {
    useConnectedWallet,
    UserDenied,
    useWallet,
    WalletStatus,
} from "@xpla/wallet-provider";
import React, { useState, useEffect } from "react";
import { LCDClient, MsgSend } from "@xpla/xpla.js";

export default function App() {
    const lcd = new LCDClient({
        chainID: 'cube_47-5',
        URL: 'https://cube-lcd.xpla.dev'
    });

    const {
        status,
        network,
        wallets,
        connect,
        disconnect
    } = useWallet();

    const connectedWallet = useConnectedWallet();

    const [amount, setAmount] = useState("");
    const [recipient, setRecipient] = useState("");

    const [loading, setLoading] = useState(1);
    const [txResult, setTxResult] = useState(null);
    const [txError, setTxError] = useState(null);

    const handleSend = async () => {
        try {
            const transactionMsg = {
                msgs: [
                    new MsgSend(connectedWallet.walletAddress, recipient, {
                        axpla: amount
                    }),
                ],
            };
            const tx = await connectedWallet.post(transactionMsg);
            if (tx.success) {
                setLoading(true);
                setTxResult(tx);
            }
            else setTxError("Please Retry Send!");
        } catch (error) {
            if (error instanceof UserDenied) {
                setTxError("User Denied");
            } else {
                setTxError("Unknown Error: " + error instanceof Error ? error.message : String(error));
            }
        }
    };

    useEffect(() => {
        if (txResult && loading !== 0) {
            const timer = setTimeout(async () => {
                try {
                    const txInfo = await lcd.tx.txInfo(txResult.result.txhash);
                    if (txInfo.txhash) setLoading(0);
                } catch (err) {
                    setLoading(loading + 1);
                }
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [loading]);

    return <div className="example-container">
        {status === WalletStatus.WALLET_NOT_CONNECTED ? (
            <>
                <button
                    className="button-css width-full"
                    type="button"
                    onClick={() => connect()}
                >
                    Connect Wallet
                </button>
                <p className="warning">If there is no change even after clicking the button, please press the refresh button in the bottom right corner of the screen.</p>
            </>
        ) : (
            <>
                <div className="info-container">
                    <div className="info-title">Connected Address</div>
                    <div className="info-content">
                        {wallets.length === 0 ? "Loading..." : wallets[0].xplaAddress}
                    </div>
                </div>
                <div className="info-container">
                    <label className="info-title" for="recipient">
                        Recipient
                    </label>
                    <input
                        className="info-content"
                        id="recipient"
                        autoComplete="off"
                        type="text"
                        placeholder="xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"
                        onChange={(e) => setRecipient(e.target.value)}
                    />
                </div>
                <div className="info-container">
                    <label className="info-title" for="amount">
                        Amount (aXPLA)
                    </label>
                    <input
                        className="info-content"
                        autoComplete="off"
                        id="Amount"
                        placeholder="1"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="bottom-button-container">
                    <button className="button-css" type="button" onClick={handleSend}>
                        Send Tx
                    </button>
                    <button className="button-css" type="button" onClick={disconnect}>
                        Disconnect
                    </button>
                </div>
                {txResult && (
                    <div style={{ marginTop: 20 }}>
                        <div className="info-title">Send Transaction Hash</div>
                        <div className="info-content">
                            {
                                loading !== 0 ?
                                    <span>Loading...</span>
                                    :
                                    <a
                                        className="link"
                                        href={"https://explorer.xpla.io/" + network.name + "/tx/" + txResult.result.txhash}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {txResult.result.txhash}
                                    </a>
                            }
                        </div>
                    </div>
                )}
                {txError && (
                    <div style={{ marginTop: 20 }}>
                        <div className="info-title">Tx Error</div>
                        <div className="info-content">
                            <span>
                                {txError}
                            </span>
                        </div>
                    </div>
                )}
            </>
        )}
    </div>
}` 

export default function CodeWPApp() {
  return (
    <CodeBlock
      className="text-[12px]"
      language="jsx"
      title="src/App.js"
      showLineNumbers
    >
      {wpAppCode}
    </CodeBlock>
  );
}
