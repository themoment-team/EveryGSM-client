'use client';

import { SearchIcon } from 'assets';
import { useDarkState, useSearchState } from 'stores';

import * as S from './style';

const SearchBar = () => {
  const { searchKeyword, setSearchKeyword } = useSearchState();

  const { isDark } = useDarkState();

  return (
    <S.SearchBarWrapper isDark={isDark}>
      <SearchIcon />
      <S.Input
        value={searchKeyword}
        onChange={e => setSearchKeyword(e.target.value)}
        placeholder="검색"
      />
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
