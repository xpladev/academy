import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from "axios"
import useShowTool from '../Zustand/useShowTool';
import useUserInfo from '../Zustand/useUserInfo';

interface UserInfoResponse {
    clearStage: number;
    diamond: number;
    id: string;
    returnCode: string;
    returnMsg: string;
    token: string;
    xpla: string;
}

const getUserInfo = (failFn: () => void) => {
    const { setShowTool } = useShowTool();
    const { setUserInfo } = useUserInfo();

    const fetchData = async (address: string) => {
        const res = await axios.post(
            `${process.env.REACT_APP_SERVERURL}wallet/wallet-user-info`,
            {
                wallet: address,
            }
        );
        return res.data;
    };


    const res = useMutation({
        mutationFn: fetchData,
        mutationKey: ['userInfo'],
        onSuccess: (data: UserInfoResponse) => {
            if (data.returnMsg === "success") {
                setShowTool(true);
                setUserInfo({
                    diamond: data.diamond,
                    id: data.id,
                    clearStage: data.clearStage,
                    xplaBalance: data.xpla,
                    tokenBalance: data.token,
                });
            } else {
                failFn();
            }
        },
    })

    return res;
}

export default getUserInfo