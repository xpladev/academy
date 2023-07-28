import { ConnectType, useWallet, WalletStatus } from "@xpla/wallet-provider";
import React from "react";
import Translate, {translate} from '@docusaurus/Translate';
import { selectConnection } from './ConnectModal';

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
      try{
        const selected = await selectConnection(availableConnections.filter((connection) => connection.type != ConnectType.READONLY));
        if (!selected) {
          console.log("Wallet Connect Error");
          throw new Error('Wallet Connect Error');
        }
        
        const type = selected[0];
        const identifier = selected[1] || '';
        connect(type, identifier);
      } catch(e) {
        console.log(e)
      }
    } else {
      disconnect();
    }
  };
  return (
    <div
    className="buttonContainer"
    onClick={clickConnect}
  >
    <div className="connectwallet">
      {status === WalletStatus.WALLET_NOT_CONNECTED ? (
        <Translate id="ddd">Connect Wallet</Translate>
      ) : wallets.length == 0 ? (
        'Loading...'
      ) : (
        <span>{(wallets[0].xplaAddress)}</span>
      )}
    </div>
  </div>
  );
}