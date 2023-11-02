import axios from "axios"
import { useQuery } from '@tanstack/react-query';
import { useWallet } from "@xpla/wallet-provider";
import useUserAddress from "../Zustand/useUserAddress";

interface UserInfoResponse {
    clearStage: number;
    diamond: number;
    id: string;
    returnCode: string;
    returnMsg: string;
    token: string;
    xpla: string;
}

const useUserInfo = () => {
    const { userAddress } = useUserAddress();

    return useQuery({
        queryKey: ['useUserInfo'],
        queryFn: async () => {
            const { data } = await axios.post<UserInfoResponse>(`${process.env.REACT_APP_SERVERURL}wallet/wallet-user-info`, {
                wallet: userAddress,
            });

            return data;
        },
        staleTime: 60 * 1000,
        gcTime: 5 * 60 * 1000,
        enabled : !!userAddress,
    })

}

export default useUserInfo