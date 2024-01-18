import BigNumber from "bignumber.js";

const getNumberFormat = (num: string | number) => {
  return new BigNumber(num).toFormat({
    decimalSeparator: ".",
    groupSeparator: ",",
    groupSize: 3,
  });
};

export default getNumberFormat;