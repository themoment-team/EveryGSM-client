/** @jsxImportSource @emotion/react */

'use client';

import { useEffect } from 'react';

import { css } from '@emotion/react';

import { LogoIcon, MoonIcon, SunIcon } from 'assets';
import { SearchBar } from 'components';
import { useDarkState, useWidthState } from 'stores';

import * as S from './style';

const PERMIT_SEARCH_BAR = 750 as const;

const Nav = () => {
  const { isDark, setIsDark } = useDarkState();
  const { width } = useWidthState();

  const handleClick = () => {
    setIsDark(!isDark);
    localStorage.setItem('dark', String(isDark));
  };

  useEffect(() => {
    const initialIsDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const localDark = localStorage.getItem('dark');

    if (localDark) setIsDark(localStorage.getItem('dark') === 'false');
    else setIsDark(initialIsDark);
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
          {width > PERMIT_SEARCH_BAR && <SearchBar />}
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
