import { create } from 'zustand';

interface UserAddressState {
    userAddress: string | undefined;
    setUserAddress: (input: string) => void;
}

const useUserAddress = create<UserAddressState>(set => ({
    userAddress: undefined,
    setUserAddress: (input) => set({ userAddress: input }),
}));

export default useUserAddress;