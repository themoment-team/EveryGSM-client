import { create } from 'zustand';

interface SearchKeywordState {
  searchKeyword: string;
  setSearchKeyword: (value: string) => void;
}

const useSearchState = create<SearchKeywordState>(set => ({
  searchKeyword: '',
  setSearchKeyword: value => set({ searchKeyword: value }),
}));

export default useSearchState;
