import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { Numeric } from "@xpla/xpla.js";
import clsx from "clsx";

interface NumberInput {
  decimals?: number;
}

const formatDecimals = (value: Numeric.Input, decimals = 18) => {
  const t = Numeric.parse(value).toString();
  return t.includes(".") && (t.split(".").pop()?.length || 0) > decimals
    ? t.slice(0, t.indexOf(".")) +
        t.slice(t.indexOf("."), t.indexOf(".") + decimals + 1)
    : t;
};

const NumberInput = forwardRef<HTMLInputElement, NumberInput>(
  ({ decimals = 18, ...InputProps }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);
    useEffect(() => {
      const elInput = inputRef.current;
      const handleKeydown = (event: Event) => {
        const target = event.target as HTMLInputElement;

        target.value = target.value.replace(/[^0-9.]/g, "");

        if (target.value?.split(".").length > 2) {
          event.preventDefault();
          const index = target.value.lastIndexOf(".");
          target.value =
            target.value.substring(0, index) +
            target.value.substring(index + 1, target.value.length);
        }
        if (
          target.value.includes(".") &&
          (target.value?.split(".").pop()?.length || 0) > decimals
        ) {
          event.preventDefault();
          target.value = formatDecimals(target.value, decimals);
        }
      };
      elInput?.addEventListener("keydown", handleKeydown);
      elInput?.addEventListener("keyup", handleKeydown);
      elInput?.addEventListener("keypress", handleKeydown);
      return () => {
        if (elInput) {
          elInput.removeEventListener("keydown", handleKeydown);
          elInput.removeEventListener("keyup", handleKeydown);
          elInput.removeEventListener("keypress", handleKeydown);
        }
      };
    }, [decimals]);

    return (
      <input
        placeholder="0"
        ref={inputRef}
        {...InputProps}
        className={clsx(
          "leading-[21px] font-semibold text-end border-0 focus:outline-0 text-[18px] w-[300px]"
        )}
      />
    );
  }
);

export default NumberInput;
