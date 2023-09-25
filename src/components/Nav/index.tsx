/** @jsxImportSource @emotion/react */

'use client';

import * as S from './style';
import Image from 'next/image';

import { css } from '@emotion/react';
import { useWidthState, useDarkState } from 'Stores';

const Nav = () => {
  const { isDark, setIsDark } = useDarkState();
  const width = useWidthState(state => state.width);

  const handleClick = () => {
    setIsDark(!isDark);
    localStorage.setItem('dark', String(isDark));
  };

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
            <S.LogoContainer>
              <Image
                src="/images/LogoIcon.svg"
                width={20}
                height={20}
                alt="logo"
              />
            </S.LogoContainer>
            <S.Title isDark={isDark}>EveryGSM</S.Title>
          </S.IconContainer>
          <S.ToggleButton onClick={handleClick}>
            <S.ToggleIcon isDark={isDark}>
              <Image
                src={isDark ? '/images/Moon.svg' : '/images/Sun.svg'}
                alt="icon"
                width={width < 1150 ? (width > 390 ? 16.5 : 15.12) : 17.89}
                height={width < 1150 ? (width > 390 ? 16.5 : 15.12) : 17.89}
                // height={svgSize}
              />
            </S.ToggleIcon>
          </S.ToggleButton>
        </S.ItemContainer>
      </S.NavContainer>
    </>
  );
};

export default Nav;
