import { create } from 'zustand';

interface ShowToolState {
    showTool: boolean;
    setShowTool: (input: boolean) => void;
}

const useShowTool = create<ShowToolState>(set => ({
    showTool : false,
    setShowTool: (input) => set({ showTool: input }),
}));

export default useShowTool;