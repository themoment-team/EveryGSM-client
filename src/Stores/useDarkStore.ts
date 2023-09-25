import { create } from 'zustand';

interface DarkState {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const useDarkState = create<DarkState>(set => ({
  isDark: false,
  setIsDark: value => set({ isDark: value }),
}));

export default useDarkState;
