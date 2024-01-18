import axios from "axios"
import { useQuery } from '@tanstack/react-query';
import useUserAddress from "../Zustand/useUserAddress";

export interface RANKRESPONSE {
    returnCode: number;
    returnMsg: string;
    id: string;
    score: number;
    date: string; // Date 형식
    ranking: RANKINFO[];
    myRanking: RANKINFO[];
    isRecoding: number;
  }
  
  export interface RANKINFO {
    chain_ranking: number;
    id: string;
    chain_high_score: number;
  }
  
const useRankingInfo = () => {
    const { userAddress } = useUserAddress();

    return useQuery({
        queryKey: ['useRankingInfo', userAddress],
        queryFn: async () => {
            const { data } = await axios.post<RANKRESPONSE>(`${process.env.REACT_APP_SERVERURL}wallet/wallet-ranking-info`, {
                wallet: userAddress,
            });

            return data;
        },
        staleTime: 60 * 1000,
        gcTime: 5 * 60 * 1000,
        enabled : !!userAddress,
    })

}

export default useRankingInfo