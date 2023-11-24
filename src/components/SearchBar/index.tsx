import { useState } from 'react';

import { SearchIcon } from 'assets';
import { useDarkState } from 'stores';

import * as S from './style';

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const { isDark } = useDarkState();

  return (
    <S.SearchBarWrapper>
      <SearchIcon />
      <S.Input
        isDark={isDark}
        value={searchKeyword}
        onChange={e => setSearchKeyword(e.target.value)}
        placeholder="검색"
      />
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
