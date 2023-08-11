import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import "./index.css";
import BrowserOnly from '@docusaurus/BrowserOnly';


export const getBannerClosed = (defaultPopup = false) => {
    return localStorage.getItem("popup") || defaultPopup;
}

export const setBannerClosed = (popupClose) => {
    localStorage.setItem("popup", popupClose);
}
const Banner = () => {
    const bannerClosed = getBannerClosed();
    const [bannerState, setBannerState] = React.useState(bannerClosed);
    if (bannerState) return <></>;
    return <BrowserOnly>
        {
            () => <div className="h-[60px] w-full flex justify-center items-center px-[16px]">
                <img className="absolute left-0" src="/xpla-academy-dev/img/Banner/left.svg" />
                <img className="absolute right-[6px]" src="/xpla-academy-dev/img/Banner/right.svg" />
                <div onClick={() => {
                    setBannerClosed(true);
                    setBannerState(true);
                }} className="right-[16px] font-medium absolute xl:right-[50px] flex items-center gap-2 hover:cursor-pointer ">Close <CloseIcon /> </div>
                <div className="relative flex items-center max-w-[1180px] w-[100%]">

                    <img className="absolute left-0 mt-2" src="/xpla-academy-dev/img/Banner/banner.svg" />
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
            </div>
        }
    </BrowserOnly>
}

export default Banner;