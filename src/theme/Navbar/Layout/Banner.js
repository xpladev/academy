import React, { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Link from "@docusaurus/Link";

export const getStorageBannerClosed = (defaultPopup = 'false') => {
    return localStorage.getItem("popup") || defaultPopup;
}

export const setStorageBannerClosed = (popupClose) => {
    localStorage.setItem("popup", popupClose);
}

const Banner = ({ bannerClosed, setBannerClosed }) => {
    const beforeBannerClosed = getStorageBannerClosed() === 'true';

    useEffect(() => {
        setBannerClosed(beforeBannerClosed);
    }, [])

    return bannerClosed ? <></> : <div className="fixed z-[200] top-0 h-[60px] w-full">
        <Link to="https://app.glitch-hack.com/" className="h-[60px] w-full flex justify-center items-center px-[16px] bg-white text-black hover:text-black" style={{ textDecoration: 'none' }}>
            <img className="absolute left-0 " src="/img/Banner/left.svg" />
            <img className="absolute right-[6px]" src="/img/Banner/right.svg" />

            <div className="relative flex items-center max-w-[1180px] w-[100%]">

                <img className="absolute left-0 mt-2" src="/img/Banner/banner.svg" />
                <div className="absolute right-0 flex items-center text-[16px] font-medium bannerWord">
                    Period&nbsp;
                    <span className="font-bold ">
                        Aug 18th-27th&nbsp;
                    </span>
                    | Demo Day&nbsp;
                    <span className="font-bold ">
                        Sep 3rd @Seoul
                    </span>
                </div>
            </div>
        </Link>
        <div onClick={() => {
            setStorageBannerClosed('true');
            setBannerClosed(true);
        }} className="hover:text-[#00b2fc] transition-all top-0 h-[60px] text-black right-[16px] font-medium absolute 2xl:right-[50px] flex items-center gap-2 hover:cursor-pointer ">Close <CloseIcon /> </div>
    </div>

}

export default Banner;
