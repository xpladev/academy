import React from "react";
import styles from "../../../index.module.css";
import clsx from "clsx";
import { UseFormSetValue } from "react-hook-form";

import getNumberFormat from "@site/src/util/getNumberFormat";
import { CONVERTFORM } from "./index";

const ConvertInput = ({
  autoFocus = false,
  values,
  setValue,
  getTxFee,
}: {
  autoFocus? : boolean;
  values: CONVERTFORM;
  setValue: UseFormSetValue<CONVERTFORM>;
  getTxFee: (amount: number) => Promise<void>;
}) => {
  return (
    <>
      <input
        autoFocus={autoFocus}
        placeholder="0"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        value={
          values.amount === undefined || values.amount === ""
            ? ""
            : getNumberFormat(values.amount?.toString() || "")
        }
        onChange={async (e) => {
          const text = Number(e.target.value.replace(",", ""));
          if (!isNaN(text)) {
            setValue("amount",text );
            getTxFee(text);
          }
        }}
        maxLength={7}
        className={clsx(
          "mt-[44px] leading-[30px] font-normal text-center border-0 focus:outline-0 text-[30px] max-w-[280px] caret-[#00B2FC] placeholder-[#E7E6E6]",
          styles.gameFont
        )}
      />
      <div className="w-[203px] border-solid border-[1px] border-black"/>
      <span className="font-normal text-[14px] leading-[14px] text-[#00B2FC] mt-[15px] mb-[22px]">
        * No decimal point allowed.
      </span>
    </>
  );
};


export default ConvertInput;
