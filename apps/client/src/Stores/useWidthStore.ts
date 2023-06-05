import { create } from 'zustand';

interface WidthState {
  width: number;
  setWidth: (value: number) => void;
}

const useWidthState = create<WidthState>(set => ({
  width: 0,
  setWidth: value => set({ width: value }),
}));

export default useWidthState;
