import { create } from 'zustand';

export const MODALTYPE = {
    NOTOPEN: 0,
    OPENWITHNOTLINKERROR: 1,
    OPENWITHSESSIONERROR: 2,
    OPENINFORMATION: 3,
} as const;
type MODALTYPE = (typeof MODALTYPE)[keyof typeof MODALTYPE];

interface LoginModalOpenState {
    loginModalOpen: MODALTYPE;
    setLoginModalOpen: (input: MODALTYPE) => void;
}

const useLoginModalOpen = create<LoginModalOpenState>(set => ({
    loginModalOpen: MODALTYPE.NOTOPEN,
    setLoginModalOpen: (input) => set({ loginModalOpen: input }),
}));

export default useLoginModalOpen;