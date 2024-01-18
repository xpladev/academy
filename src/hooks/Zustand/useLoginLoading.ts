import { create } from 'zustand';

interface LoginLoadingState {
    loginLoading: boolean;
    setLoginLoading: (input: boolean) => void;
}

const useLoginLoading = create<LoginLoadingState>(set => ({
    loginLoading : false,
    setLoginLoading: (input) => set({ loginLoading: input }),
}));

export default useLoginLoading;