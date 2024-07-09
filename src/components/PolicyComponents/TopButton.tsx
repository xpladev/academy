import clsx from "clsx";
import React from "react";

const TopButton = () => {
    return <div className={clsx("sticky bottom-[74px] mb-[74px]")}
    >
        <div className={clsx("absolute",
            "bottom-[0px]",
            "hover:cursor-pointer",
            "right-[calc(50%-960px+35px)]",
            "max-[1920px]:right-[35px]",
            "drop-shadow-[8px_16px_20px_rgba(0,0,0,0.15)]", ""
        )} onClick={() => {
            window.scrollTo(0, 0)
        }}>

            <div className="rounded-full bg-[#00B1FF] px-[20px] py-[28px]">
                <span className="font-bold text-[20px] leading-[24px] text-white">
                    TOP
                </span>
            </div>
        </div>
    </div>
}

export default TopButton;