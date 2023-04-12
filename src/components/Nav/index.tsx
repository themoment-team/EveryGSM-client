/** @jsxImportSource @emotion/react */
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

  const dark = theme.dark.color;
  const basic = theme.basic.color;

  return (
    <>
      <S.NavContainer
        css={css`
          background-color: ${isDark ? dark.charcoal : basic.white};
        `}
      >
        <S.ItemContainer>
          <S.IconContainer>
            <Image src={I.LogoIcon} alt="" />
            <S.Title
              css={css`
                color: ${isDark ? dark.white : basic.black};
              `}
            >
              EveryGSM
            </S.Title>
          </S.IconContainer>
          <S.ToggleButton
            css={css`
              background-color: ${isDark ? dark.slate_gray : basic.light_gray};
            `}
            onClick={handleClick}
          >
            <S.ToggleIcon
              css={css`
                background-color: ${isDark ? dark.medium_gray : basic.white};
                translate: ${isDark ? '2.4375rem' : '0'};
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
