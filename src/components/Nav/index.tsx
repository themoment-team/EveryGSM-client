/** @jsxImportSource @emotion/react */
'use client';
import * as S from './style';
import * as I from 'assets/imgs';
import Image from 'next/image';
import { useEffect } from 'react';
import { css } from '@emotion/react';
import theme from 'styles/theme';

interface Props {
  isDark: boolean;
  setIsDark: Function;
}

const Nav = ({ isDark, setIsDark }: Props) => {
  const handleClick = () => {
    setIsDark(!isDark);
    localStorage.setItem('dark', String(isDark));
  };

  useEffect(() => {
    const darkOption = localStorage.getItem('dark') === 'false';
    setIsDark(darkOption ?? true);
  }, []);

  const dark = theme.dark.dark_div;
  const darkText = theme.dark.dark_text;
  const darkToggle = theme.dark.dark_toggle;

  return (
    <>
      <S.NavContainer
        css={css`
          ${isDark && dark}
        `}
      >
        <S.ItemContainer>
          <S.IconContainer>
            <Image src={I.LogoIcon} alt="" />
            <S.Title
              css={css`
                ${isDark && darkText}
              `}
            >
              EveryGSM
            </S.Title>
          </S.IconContainer>
          <S.ToggleButton onClick={handleClick}>
            <S.ToggleIcon
              css={css`
                ${isDark && darkToggle}
              `}
            >
              <Image src={isDark ? I.Moon : I.Sun} alt="" />
            </S.ToggleIcon>
          </S.ToggleButton>
        </S.ItemContainer>
      </S.NavContainer>
    </>
  );
};

export default Nav;
