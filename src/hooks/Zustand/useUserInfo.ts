import { create } from 'zustand';

export interface USERINFO {
    diamond: number;
    id: string;
    clearStage: number;
    xplaBalance: string;
    tokenBalance: string;
}

interface UserInfoState {
    userInfo: USERINFO;
    setUserInfo: (input: USERINFO) => void;
}

const useUserInfo = create<UserInfoState>(set => ({
    userInfo: {
        diamond: 0,
        id: "",
        clearStage: 0,
        xplaBalance: "0",
        tokenBalance: "0",
    },
    setUserInfo: (input) => set({ userInfo: input }),
}));

export default useUserInfo;