import axios from "axios"
import { useQuery } from '@tanstack/react-query';
import { useWallet } from "@xpla/wallet-provider";
import useUserAddress from "../Zustand/useUserAddress";

export interface NFTSHOPITEM {
    idx: number;
    name: string;
    price: number;
    imageUrl: string;
    width: number;
    count: number;
    ball: number;
    isHave: number;
  }

interface NFTSHOPResponse {
    returnCode: string;
    returnMsg: string;
    shopList : NFTSHOPITEM[]
}

const useNftShopList = () => {
    const { userAddress } = useUserAddress();

    return useQuery({
        queryKey: ['useNftShopList', userAddress],
        queryFn: async () => {
            const { data } = await axios.post<NFTSHOPResponse>(`${process.env.REACT_APP_SERVERURL}wallet//wallet-nft-shop-list`, {
                wallet: userAddress,
            });

            return data;
        },
        staleTime: 60 * 1000,
        gcTime: 5 * 60 * 1000,
        enabled : !!userAddress,
    })

}

export default useNftShopList