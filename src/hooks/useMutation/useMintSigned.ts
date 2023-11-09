import { useMutation } from '@tanstack/react-query';
import axios from "axios"
import useUserAddress from '../Zustand/useUserAddress';

interface Response {
    returnCode: string;
    returnMsg: string;
    txhash: string;
}

interface Request {
    tid: number;
    userTx: string;
}

const useMintSigned = () => {
    const { userAddress } = useUserAddress();
    const walletUrl = `${process.env.REACT_APP_SERVERURL}wallet/wallet-minting`;

    const fetchData = async (param: Request) => {
        const convertPost: any = {
            wallet: userAddress,
            tid: param.tid,
            userTx: param.userTx,
        };

        const res = await axios.post(
            walletUrl,
            convertPost
        );

        return res.data;
    };

    const res = useMutation({
        mutationFn: fetchData,
        mutationKey: ['useMintSigned', userAddress, Date.now()],
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

export default useMintSigned