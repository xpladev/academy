import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import WalletWrap from "@site/src/components/Wallet/WalletWrap";
import Login from "./Login";
import Main from "./Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useShowTool from "@site/src/hooks/Zustand/useShowTool";

export default function Tool(): JSX.Element {
  const queryClient = new QueryClient();
  const { showTool, setShowTool } = useShowTool();
  useEffect(() => {
    setShowTool(false);
  }, [])

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
            {showTool ? (
              <Main  />
            ) : (
              <Login />
            )}
            {/* <Main userInfo={userInfo}/> */}
          </WalletWrap>
        </main>
      </QueryClientProvider>
    </Layout>
  );
}
