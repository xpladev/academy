import React, { useEffect, useState } from "react";
import clsx from "clsx";
import _ from "lodash";
import getNumberFormat from "@site/src/util/getNumberFormat";
import { RANKRESPONSE, RANKINFO } from "./index";

const Ranking = ({ rankinglist }: { rankinglist: RANKRESPONSE }) => {
  const myRank =
    rankinglist.myRanking.length > 0
      ? rankinglist.myRanking[0].chain_ranking
      : 0;

  return (
    <div className="flex flex-1 flex-col justify-between">
      <div className="flex gap-[7px] h-[46px]">
        <div className="w-[46px] flex justify-center items-center text-[26px] leading-[14px] font-medium bg-[#FF3C24] border-[1px] border-solid">
          1
        </div>
        <div className="flex flex-1 bg-[#FFDDD9] p-[6px] items-center justify-between leading-[14px] text-[12px] font-medium border-[1px] border-solid">
          {rankinglist.ranking.length > 0 ? (
            <>
              <span>{rankinglist.ranking[0].id || ""}</span>
              <span>
                {getNumberFormat(
                  rankinglist.ranking[0].chain_high_score || "0"
                )}
              </span>
            </>
          ) : (
            <>
              <span>-</span>
              <span>-</span>
            </>
          )}
        </div>
      </div>

      <div className="flex gap-[7px] h-[38px]">
        <div className="w-[38px] flex justify-center items-center text-[20px] leading-[14px] font-medium bg-[#FFE200] border-[1px] border-solid">
          2
        </div>
        <div className="flex flex-1 bg-[#FFFACF] p-[6px] items-center justify-between leading-[12px] text-[10px] font-medium border-[1px] border-solid">
          {rankinglist.ranking.length > 1 ? (
            <>
              <span>{rankinglist.ranking[1].id || ""}</span>
              <span>
                {getNumberFormat(
                  rankinglist.ranking[1].chain_high_score || "0"
                )}
              </span>
            </>
          ) : (
            <>
              <span>-</span>
              <span>-</span>
            </>
          )}
        </div>
      </div>

      <div className="flex gap-[7px] h-[30px]">
        <div className="w-[30px] flex justify-center items-center text-[12px] leading-[14px] font-medium bg-[#979797] border-[1px] border-solid">
          3
        </div>

        <div className="flex flex-1 bg-[#F5F4F4] p-[6px] items-center justify-between leading-[11px] text-[9px] font-medium border-[1px] border-solid">
          {rankinglist.ranking.length > 2 ? (
            <>
              <span>{rankinglist.ranking[2].id || ""}</span>
              <span>
                {getNumberFormat(
                  rankinglist.ranking[2].chain_high_score || "0"
                )}
              </span>
            </>
          ) : (
            <>
              <span>-</span>
              <span>-</span>
            </>
          )}
        </div>
      </div>

      {rankinglist.ranking.slice(3).map((rank: RANKINFO) => (
        <div key={rank.id} className="flex gap-[7px] h-[26px]">
          <div
            className={clsx(
              "w-[26px] flex justify-center items-center text-[12px] leading-[14px] font-bold",
              rank.chain_ranking === myRank
                ? "bg-[#00B2FC]"
                : "bg-[#F5F4F4] text-[#555454]"
            )}
          >
            {rank.chain_ranking}
          </div>
          <div
            className={clsx(
              "flex flex-1 p-[6px] itmes-center justify-between leading-[12px] text-[10px] font-bold",
              rank.chain_ranking === myRank
                ? "bg-[#00B2FC]"
                : "bg-[#F5F4F4] text-[#838383]"
            )}
          >
            <span>{rank.id || ""}</span>
            <span>{rank.chain_high_score}</span>
          </div>
        </div>
      ))}

      {_.range(10 - rankinglist.ranking.length).map((idx) => (
        <div key={idx} className="flex gap-[7px] h-[26px]">
          <div className="w-[26px] flex justify-center items-center text-[12px] leading-[14px] font-bold bg-[#F5F4F4] text-[#555454]">
            {rankinglist.ranking.length + idx + 1}
          </div>
          <div className="flex flex-1 bg-[#F5F4F4] p-[6px] itmes-center justify-between leading-[12px] text-[#838383] text-[10px] font-bold">
            <span>-</span>
            <span>-</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ranking;
