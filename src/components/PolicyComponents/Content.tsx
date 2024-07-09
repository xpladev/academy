import React, { useRef } from "react";
import DateSelect from "./DateSelect";
import { PoliciesData, TableData } from "../../type";
import useLanguage from "@site/src/hooks/Zustand/useLanguage";

const Content = ({ title,
    policiesData, index, setIndex
}: {
    title: string,
    policiesData: PoliciesData[],
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>
}) => {
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const { language } = useLanguage();

    const onMoveToContentElement = (i: number) => {

        var headerOffset = 80;
        var elementPosition = contentRefs.current[i]?.getBoundingClientRect().top;
        var offsetPosition = (elementPosition || 0) + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };

    return <div className="flex flex-col max-w-[1180px] w-full">
        <div className="flex justify-start items-start md:items-end flex-col md:flex-row">
            <div className="text-black text-[40px] font-bold leading-[48px] mr-[16px]">
                {title}
            </div>
            <div className="text-[16px] leading-[19px] text-[#878D96] font-normal mb-[3px] mt-[10px] md:mt-0">  
                Last modified: {getDateFormat(policiesData[0].date)}
            </div>
        </div>
        <div className="mt-[30px] bg-[#EEF7FF] rounded-[10px] px-[40px] py-[30px] mb-[40px]">
            <div className="font-semibold text-[24px] leading-[29px] text-black mb-[6px]">
                Index
            </div>
            {
                policiesData[index].article.filter((data) => data.index).map((data) => <div
                    className="text-[18px] text-[#004FFF] leading-[26px] font-normal mt-[12px] "
                >
                    <span
                        onClick={() => onMoveToContentElement(data.index!)}
                        className="hover:underline hover:cursor-pointer">{`${data[language].title}`}</span>

                </div>)
            }
        </div>
        {
            policiesData[index].article.map((data) => <div className={data[language].noborder ? "mb-[15px]" : "mb-[39px]"}
                ref={(el) => {
                    if (data.index) {
                        (contentRefs.current[data.index] = el)
                    }
                }}
            >
                {
                    data[language].title &&
                    <div className="mb-[18px] font-bold text-[26px] leading-[31px]">
                        {data[language].title}
                    </div>
                }
                {
                    data[language].content &&
                        data[language].contentInnerhtml ? <div className="font-normal text-[18px] leading-[26px] text-[#4D5358] whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: data[language].content }}>
                    </div> : <div className="font-normal text-[18px] leading-[26px] text-[#4D5358] whitespace-pre-wrap">
                        {data[language].content}
                    </div>
                }
                {
                    data[language].table &&
                    <Table tabledata={data[language].table} />
                }
                {
                    !(data[language].noborder) &&
                    <div className="mt-[40px] border bordre-[1px] border-t-0 border-black" />
                }
            </div>)
        }
        <div>
            <div className="mb-[18px] font-bold text-[26px] leading-[31px]">
                Past Policy
            </div>
            <DateSelect
                policiesData={policiesData}
                index={index}
                setIndex={setIndex}
            />
        </div>
    </div>
}

export default Content

const getDateFormat = (date: string) => {
    const d = new Date(date);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}

const Table = ({ tabledata }: { tabledata: TableData[][] | undefined }) => {
    if (!tabledata) return <></>
    return <div className="border border-[#878D96]  w-full overflow-auto ">
        <div className="bg-[#F2F4F8] flex px-[20px] min-w-[1080px] py-[12px]">
            {
                tabledata[0].map((headerData) => {
                    return <div style={headerData.style}>
                        {headerData.content}
                    </div>
                })
            }
        </div>
        {
            tabledata.filter((d, i) => i > 0).map((data) => {
                return <div className="bg-white flex items-center min-w-[1080px] relative">
                    {
                        data.map((contentData) => {
                            return <div style={contentData.style}>
                                {contentData.content}
                            </div>
                        })
                    }
                </div>
            })
        }

    </div>
}