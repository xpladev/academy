import React from "react";
import styles from "../../../index.module.css";
import clsx from "clsx";
import { UseFormSetValue } from "react-hook-form";

import getNumberFormat from "@site/src/util/getNumberFormat";
import { CONVERTFORM } from "./index";

const ConvertInput = ({
  values,
  setValue,
  getTxFee,
}: {
  values: CONVERTFORM;
  setValue: UseFormSetValue<CONVERTFORM>;
  getTxFee: (amount: number) => Promise<void>;
}) => {
  return (
    <>
      <input
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
          setValue("amount", Number(e.target.value.replace(",", "")));
          getTxFee(Number(e.target.value.replace(",", "")));
        }}
        maxLength={7}
        className={clsx(
          "mt-[44px] leading-[30px] font-normal text-center border-0 focus:outline-0 text-[30px] max-w-[280px]",
          styles.gameFont
        )}
      />
      <span className="font-normal text-[14px] leading-[14px] text-[#00B2FC] mt-[15px] mb-[22px]">
        * No decimal point allowed.
      </span>
    </>
  );
};


export default ConvertInput;
