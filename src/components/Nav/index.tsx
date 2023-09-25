/** @jsxImportSource @emotion/react */

'use client';

import { css } from '@emotion/react';

import { LogoIcon, MoonIcon, SunIcon } from 'assets';
import { useWidthState, useDarkState } from 'Stores';
import * as S from './style';

import { useEffect } from 'react';

const Nav = () => {
  const { isDark, setIsDark } = useDarkState();
  const width = useWidthState(state => state.width);

  const handleClick = () => {
    setIsDark(!isDark);
    localStorage.setItem('dark', String(isDark));
  };

  useEffect(() => {
    setIsDark(localStorage.getItem('dark') === 'false');
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
