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

const useConvertSigned = (dia2tkn: boolean) => {
    const { userAddress } = useUserAddress();
    const walletUrl = dia2tkn
        ? `${process.env.REACT_APP_SERVERURL}wallet/wallet-gamecurrency-to-coin`
        : `${process.env.REACT_APP_SERVERURL}wallet/wallet-coin-to-gamecurrency`;

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
        mutationKey: ['useConvertSigned', userAddress, Date.now()],
        onSuccess: (data: Response) => {
            if (data.txhash === undefined) {
                throw new Error(data.returnMsg);
            }
        },
        onError : (err) => {
            throw err;
        }
    })

    return res;
}

export default useConvertSigned