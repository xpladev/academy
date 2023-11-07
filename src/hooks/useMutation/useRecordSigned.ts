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

const useRecordSigned = () => {
    const { userAddress } = useUserAddress();
    const walletUrl = `${process.env.REACT_APP_SERVERURL}wallet/wallet-score-record`;

    const fetchData = async (param: Request) => {
        const recordPost: any = {
            wallet: userAddress,
            tid: param.tid,
            userTx: param.userTx,
        };

        const res = await axios.post(
            walletUrl,
            recordPost
        );

        return res.data;
    };

    const res = useMutation({
        mutationFn: fetchData,
        mutationKey: ['useRecordSigned', userAddress, Date.now()],
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

export default useRecordSigned