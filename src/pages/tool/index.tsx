import React, { useState } from "react";
import Layout from "@theme/Layout";
import WalletWrap from "@site/src/components/Wallet/WalletWrap";
import Login from "./Login";
import Main from "./Main";

export interface USERINFO {
  diamond: number;
  id: string;
  clearStage : number;
  xplaBalance: string;
  tokenBalance: string;
}

export default function Tool(): JSX.Element {
  const [showTool, setShowTool] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<USERINFO>({
    diamond : 0,
    id : "",
    clearStage : 0,
    xplaBalance : "0",
    tokenBalance : "0",
  });

  return (
    <Layout
      title={`XPLA ACADEMY`}
      description="Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."
    >
      <main>
        {/* // mediaquery로 모바일일 떄 여기서 분기 */}
        {/* // 그냥 여기서 메인이랑 로그인 나누는 컴포넌트를 하나 더 추가해도 괜찮을듯? */}
        <WalletWrap>
          {showTool ? <Main 
          userInfo={userInfo} 
          setUserInfo={setUserInfo}
          setShowTool={setShowTool} /> : <Login setShowTool={setShowTool} setUserInfo={setUserInfo}/>}
          {/* <Main userInfo={userInfo}/> */}
        </WalletWrap>
      </main>
    </Layout>
  );
}
