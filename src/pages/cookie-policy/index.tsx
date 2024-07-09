import Layout from "@theme/Layout";
import React, { useState } from "react";
import Header from "@site/src/components/PolicyComponents/Header";
import PolicySidebar from "@site/src/components/PolicyComponents/PolicySidebar";
import Content from "@site/src/components/PolicyComponents/Content";
import cookieData from "/cookie.json";
import TopButton from "@site/src/components/PolicyComponents/TopButton";
import LanguageSelect from "@site/src/components/PolicyComponents/LanguageSelect";

const Cookie = () => {
    const [cookieIndex, setCookieIndex] = useState<number>(0);

    return <Layout
        title={`XPLA ACADEMY`}
        description="Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."
    >
        <Header />
        <div className="w-full flex justify-center items-start">
            <div className="w-full max-w-[1920px] pl-[40px] pt-[30px] pb-[200px] pr-[35px] flex flex-col justify-start items-center">
                <div className="mb-[30px] w-full max-w-[1180px] flex justify-start items-start relative">
                    <PolicySidebar />
                    {/* <LanguageSelect classname="" /> */}
                </div>
                <Content
                    title="Cookie Policy"
                    policiesData={cookieData}
                    index={cookieIndex}
                    setIndex={setCookieIndex}
                />
            </div>
        </div>
        <TopButton />
    </Layout>
}

export default Cookie;