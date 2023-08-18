import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
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
});