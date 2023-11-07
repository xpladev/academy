import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import WalletWrap from "@site/src/components/Wallet/WalletWrap";
import Login from "./Login";
import Main from "./Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useUserAddress from "@site/src/hooks/Zustand/useUserAddress";
import useLoginLoading from "@site/src/hooks/Zustand/useLoginLoading";
import useLoginModalOpen from "@site/src/hooks/Zustand/useLoginModalOpen";
import { MODALTYPE } from "@site/src/hooks/Zustand/useLoginModalOpen";
import useUserInfo from "@site/src/hooks/useQuery/useUserInfo";
import { CircularProgress } from "@mui/material";
import { useWallet } from "@xpla/wallet-provider";

export default function Tool(): JSX.Element {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <Layout
      title={`XPLA ACADEMY`}
      description="Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."
    >
      <QueryClientProvider client={queryClient}>
        <main>
          {/* // mediaquery로 모바일일 떄 여기서 분기 */}
          {/* // 그냥 여기서 메인이랑 로그인 나누는 컴포넌트를 하나 더 추가해도 괜찮을듯? */}
          <WalletWrap>
            <ToolContent />
          </WalletWrap>
        </main>
      </QueryClientProvider>
    </Layout>
  );
}

const ToolContent = () => {
  const { userAddress, setUserAddress } = useUserAddress();
  const { data: userInfo, status } = useUserInfo();
  const { disconnect, status : walletstatus, wallets, refetchStates } = useWallet();
  const { loginModalOpen, setLoginModalOpen } = useLoginModalOpen();
  const { loginLoading, setLoginLoading } = useLoginLoading();
  // console.log("toolcontent :", walletstatus, wallets);
  
  useEffect(() => {
    setLoginLoading(false);
  }, []);

  useEffect(() => {
    // TODO
    if (userAddress && status === "success" && userInfo.returnMsg !== "success") {
      disconnect();
      setLoginModalOpen(MODALTYPE.OPENWITHNOTLINKERROR);
      setUserAddress(undefined);
    }
  }, [status]);

  useEffect(() => {
    if (userAddress && status === "pending") {
      // console.log(userAddress, status);
      setLoginLoading(true);
    }
  }, [userAddress, status]);

  return (
    <>
      {userAddress &&
      status === "success" &&
      userInfo.returnMsg === "success" ? (
        <Main />
      ) : (
        <Login />
      )}
    </>
  );
};
