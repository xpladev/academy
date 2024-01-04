import { Popup, PopupType } from "./Popup";

export class Utils {
    private static instance: Utils = null;

    public static getInstance(): Utils {
        if(Utils.instance == null) {
            Utils.instance = new Utils;
        }

        return Utils.instance
    }

    public getRandomInt(min: number, max: number) : number {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max-min+1)) + min;
    }

    public convertString(srcStr: string, insertStr: string, decimals: number): string {

        if(srcStr === "0" || srcStr === undefined)
            return "0";

        let index = 0;
        if(srcStr.length <= decimals) {
            srcStr = this.padStart(srcStr, 1+(decimals-srcStr.length), '0');
            index = 1;
        } else {
            index = srcStr.length-decimals;
        }

        return srcStr.slice(0, index) + insertStr + srcStr.slice(index);
    }

    public insertCommas(num: number): string {
        return new Intl.NumberFormat().format(num);
    }

    public convertRound(srcStr: string, decimals: number): string {
        const value: number = parseFloat(srcStr);
        const roundVal = value.toFixed(decimals);
        return roundVal;
    }

    public sleep(ms: number) {
        const wakeUpTime = Date.now() + ms;
        while(Date.now() < wakeUpTime) {}
    }

    public copyToClipboard(text: string) {
        if(navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                new Popup(PopupType.ALERT_AUTO_REMOVE, "Copied!").open();
            }).catch((error) => {
                new Popup(PopupType.OK, "ERROR", `Failed to copy text to clipboard\n(${error})`, ()=>{}, text).open();
            })
        } else {
            new Popup(PopupType.OK, "NOTIFICATIONS", "Clipboard API is not supported in this browser\nPlease manually copy and paste the text below", ()=>{}, text).open();
        }
    }

    public getPaddleIdx(width: number): number {
        let paddleIdx = 0;
        if(width >= 120 && width < 140) {
            paddleIdx = 1;
        } else if(width >= 140) {
            paddleIdx = 2;
        }
        return paddleIdx;
    }

    public padStart(srcStr: string, targetLength: number, padChar: string): string {
        if (targetLength <= 0) {
          return srcStr;
        }
      
        const padding = padChar.repeat(targetLength);
        return padding + srcStr;
    }

    public padLeft(value: string, length: number, char): string {
        const padding = Array(length).fill(char).join('');
        return (padding + value).slice(-length);
    }

    public padEnd(srcStr: string, targetLength: number, padChar: string): string {
        const strLength = srcStr.length;
        if (targetLength <= strLength) {
            return srcStr;
        }
        
        const padLen = targetLength - strLength;
        const padRepeat = Math.ceil(padLen / padChar.length);
        const paddedString = padChar.repeat(padRepeat).slice(0, padLen);
        
        return srcStr + paddedString;
    }


}

export const UTILS = Utils.getInstance();