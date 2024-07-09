import { create } from 'zustand';

interface LanguageState {
    language: "english" | "korean";
    setLanguage: (input: "english" | "korean") => void;
}

const useLanguage = create<LanguageState>(set => ({
    language: "english",
    setLanguage: (input) => set({ language: input }),
}));

export default useLanguage;