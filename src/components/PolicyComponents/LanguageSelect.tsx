import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import useLanguage from "@site/src/hooks/Zustand/useLanguage";
import clsx from "clsx";

const LanguageSelect = ({ classname = "" }: { classname?: string }) => {
    const selectRef = useRef<HTMLDivElement | null>(null);
    const { language, setLanguage } = useLanguage();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleOutsideClose = (e: { target: any }) => {
            if (open && (!selectRef.current?.contains(e.target))) setOpen(false);
        };
        document.addEventListener('click', handleOutsideClose);

        return () => document.removeEventListener('click', handleOutsideClose);
    }, [open]);

    return <div className={clsx(classname, "absolute right-0 top-0 ", open && "border border-solid border-black ")}>
        <div
            ref={selectRef}
            onClick={() => setOpen(!open)}
            className={clsx(
                "relative w-[120px] ",
                "hover:cursor-pointer hover:bg-white ",
                open ? " bg-white" : " bg-[#F2F2F2] hover:border hover:border-solid hover:border-[#878D96]"
            )}>
            <div className="  flex justify-between items-center py-[4.5px] pl-[10px] text-[#878D96] hover:text-black ">

                <span className="text-[16px] leading-[19px] font-medium">
                    {
                        language === "english" ? "English" : "한국어"
                    }
                </span>
                <KeyboardArrowDownRoundedIcon className={clsx("scale-[1.2] mr-[4.3px]",
                    open && "rotate-180"
                )} />
            </div>
            <div className={clsx("w-[120px] bg-white",
                open ? "" : "hidden"
            )}>
                <div
                    onClick={() => setLanguage(language === "english" ? "korean" : "english")}
                    className="pl-[10px] py-[7px] text-[#878D96] hover:text-black">

                    <span className="text-[16px] leading-[19px] font-medium  ">
                        {
                            language !== "english" ? "English" : "한국어"
                        }
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default LanguageSelect