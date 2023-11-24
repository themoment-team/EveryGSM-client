/** @jsxImportSource @emotion/react */

'use client';

import { useEffect } from 'react';

import { css } from '@emotion/react';

import { LogoIcon, MoonIcon, SunIcon } from 'assets';
import { SearchBar } from 'components';
import { useDarkState } from 'stores';

import * as S from './style';

const Nav = () => {
  const { isDark, setIsDark } = useDarkState();

  const handleClick = () => {
    setIsDark(!isDark);
    localStorage.setItem('dark', String(isDark));
  };

  useEffect(() => {
    setIsDark(localStorage.getItem('dark') === 'false');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <S.NavContainer
        css={css`
          @media (max-width: 620px) {
            border: none;
            background-color: ${isDark ? '#191919' : '#f1f1f5'};
          }
        `}
      >
        <S.ItemContainer>
          <S.IconContainer>
            <LogoIcon />
            <S.Title isDark={isDark}>EveryGSM</S.Title>
          </S.IconContainer>
          <SearchBar />
          <S.ToggleButton onClick={handleClick}>
            <S.ToggleIcon isDark={isDark}>
              {isDark ? <MoonIcon /> : <SunIcon />}
            </S.ToggleIcon>
          </S.ToggleButton>
        </S.ItemContainer>
      </S.NavContainer>
    </>
  );
};

export default Nav;
