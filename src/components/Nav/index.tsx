/** @jsxImportSource @emotion/react */

import * as S from './style';
import Image from 'next/image';

import { useEffect } from 'react';
import { css } from '@emotion/react';
import { useWidthState } from 'Stores';

interface Props {
  isDark: boolean;
  setIsDark: Function;
}

const Nav = ({ isDark, setIsDark }: Props) => {
  const width = useWidthState(state => state.width);

  const handleClick = () => {
    setIsDark(!isDark);
    localStorage.setItem('dark', String(isDark));
  };

  useEffect(() => {
    const darkOption = localStorage.getItem('dark') === 'false';
    setIsDark(darkOption ?? true);
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
