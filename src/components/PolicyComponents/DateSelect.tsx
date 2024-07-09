import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import clsx from "clsx";
import { PoliciesData } from "../../type";

const DateSelect = ({ policiesData, index, setIndex }: {
    policiesData: PoliciesData[],
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>
}) => {
    const selectRef = useRef<HTMLDivElement | null>(null);

    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleOutsideClose = (e: { target: any }) => {
            if (open && (!selectRef.current?.contains(e.target))) setOpen(false);
        };
        document.addEventListener('click', handleOutsideClose);

        return () => document.removeEventListener('click', handleOutsideClose);
    }, [open]);

    return <div className={clsx("max-w-[300px]", open && "border border-black")}> 
    <div
        ref={selectRef}
        onClick={() => setOpen(!open)}
        className={clsx(
            "w-[300px]  bg-[#EEF7FF]",
            " hover:cursor-pointer",
            open ? "" : "hover:border hover:border-black "
        )}>
        <div className="flex justify-between items-center py-[6.5px] pl-[10px] text-black ">

            <span className="text-[16px] leading-[20px] font-normal">
                {getDateFormat(policiesData[index].date)} {
                    index === 0 && "(Latest Update)"
                }
            </span>
            <KeyboardArrowDownRoundedIcon className={clsx("scale-[1.2] mr-[11.3px]",
                open && "rotate-180"
            )} />
        </div>
        <div className={clsx("w-[300px] absolute bg-[#EEF7FF]",
            !open && "hidden"
        )}>
            {/* {
                policiesData.filter((d, i) => i !== index).map((data, i) => <div
                    onClick={() => {
                        (index <= i) ? setIndex(i + 1) : setIndex(i) 
                    }}
                    className="pl-[10px] py-[6.5px] text-black font-normal hover:font-semibold hover:bg-[#CBE8FF]">

                    <span className="text-[16px] leading-[20px]">
                        {getDateFormat(data.date)} {
                            index > 0 && i === 0 && "(Latest Update)"
                        }
                    </span>
                </div>)
            } */}

            {
                policiesData.map((data, i) => <div
                    onClick={() => {
                        setIndex(i)
                    }}
                    className="pl-[10px] py-[6.5px] text-black font-normal hover:font-semibold hover:bg-[#CBE8FF]">

                    <span className="text-[16px] leading-[20px]">
                        {getDateFormat(data.date)} {
                            i === 0 && "(Latest Update)"
                        }
                    </span>
                </div>)
            }
        </div>
    </div>
    </div>
}

export default DateSelect;

const getDateFormat = (date: string) => {
    const d = new Date(date);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

// document.write("The current month is " + );