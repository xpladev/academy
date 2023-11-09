import { useMutation } from '@tanstack/react-query';
import axios from "axios"
import useUserAddress from '../Zustand/useUserAddress';
import { LCDClient, SimplePublicKey } from '@xpla/xpla.js';

interface Response {
    returnCode: string;
    returnMsg: string;
    tid: number;
    unsignedTx: string;
}

const chainID = "cube_47-5";
const URL = "https://cube-lcd.xpla.dev";
const lcd = new LCDClient({ chainID, URL });

const useConvertUnsigned = (dia2tkn: boolean) => {
    const { userAddress } = useUserAddress();
    const unsignedUrl = dia2tkn
        ? `${process.env.REACT_APP_SERVERURL}wallet/wallet-gamecurrency-to-coin-unsigned`
        : `${process.env.REACT_APP_SERVERURL}wallet/wallet-coin-to-gamecurrency-unsigned`;

    const fetchData = async (amount: number | string) => {
        const addressinfo = await lcd.auth.accountInfo(userAddress);
        const pubkey = addressinfo.getPublicKey() as SimplePublicKey;

        const unsignedPost = {
            wallet: userAddress,
            amount,
            userPubKey: pubkey.key,
            userSeq: addressinfo.getSequenceNumber(),
        };

        const res = await axios.post(
            unsignedUrl,
            unsignedPost
        );

        return res.data;
    };

    const res = useMutation({
        mutationFn: fetchData,
        mutationKey: ['useConvertUnsigned', userAddress, Date.now()],
        onSuccess: (data: Response) => {
            if (data.returnCode !== "0") {
                if (data.returnCode === "499" && data.returnMsg.includes("insufficient funds")) {
                    throw new Error("601");
                } else {
                    throw new Error(data.returnCode);
                }
            }
        },
        onError : (err) => {
            throw err;
        }
    })

    return res;
}

export default useConvertUnsigned