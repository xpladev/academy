import React, { useEffect } from "react";
import WalletWrap from "@site/src/components/Wallet/WalletWrap";
import Login from "./Login";
import Main from "./Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useUserAddress from "@site/src/hooks/Zustand/useUserAddress";
import useLoginLoading from "@site/src/hooks/Zustand/useLoginLoading";
import useLoginModalOpen from "@site/src/hooks/Zustand/useLoginModalOpen";
import { MODALTYPE } from "@site/src/hooks/Zustand/useLoginModalOpen";
import useUserInfo from "@site/src/hooks/useQuery/useUserInfo";
import { useWallet } from "@xpla/wallet-provider";

export default function ToolPage(): JSX.Element {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
      <QueryClientProvider client={queryClient}>
        <main>
          <WalletWrap>
            <ToolContent />
          </WalletWrap>
        </main>
      </QueryClientProvider>
  );
}

const ToolContent = () => {
  const { userAddress, setUserAddress } = useUserAddress();
  const { data: userInfo, status } = useUserInfo();
  const {
    disconnect,
    network,
  } = useWallet();
  const { setLoginModalOpen } = useLoginModalOpen();
  const { setLoginLoading } = useLoginLoading();

  useEffect(() => {
    setLoginLoading(false);
  }, []);

  useEffect(() => {
    if (
      userAddress &&
      status === "success" &&
      userInfo.returnMsg !== "success"
    ) {
      disconnect();
      setLoginModalOpen(MODALTYPE.OPENWITHNOTLINKERROR);
      setUserAddress(undefined);
    }
  }, [status]);

  useEffect(() => {
    if (userAddress && status === "pending") {
      setLoginLoading(true);
    }
  }, [userAddress, status]);

  useEffect(() => {
    if (network && network.name === "mainnet") {
      setLoginModalOpen(MODALTYPE.OPENMAINNETERROR);
    }
  }, [network]);

  return (
    <>
      {userAddress &&
      status === "success" &&
      userInfo.returnMsg === "success" &&
      network?.name === "testnet" ? (
        <Main />
      ) : (
        <Login />
      )}
    </>
  );
};
