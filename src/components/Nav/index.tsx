import * as S from './style';
import * as I from 'assets/imgs';
import Image from 'next/image';
import { useEffect } from 'react';
import { css } from '@emotion/react';

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

  return (
    <>
      <S.NavContainer
        css={css`
          @media (max-width: 24.375rem) {
            border: none;
            background-color: ${isDark ? '#191919' : '#f1f1f5'};
          }
        `}
      >
        <S.ItemContainer>
          <S.IconContainer>
            <S.Dlwjddn>
              <Image src={I.LogoIcon} alt="" />
            </S.Dlwjddn>
            <S.Title>EveryGSM</S.Title>
          </S.IconContainer>
          <S.ToggleButton onClick={handleClick}>
            <S.ToggleIcon
              css={css`
                translate: ${isDark ? '2.4375rem' : '0'};
              `}
            >
              <Image src={isDark ? I.Moon : I.Sun} alt="" fill />
            </S.ToggleIcon>
          </S.ToggleButton>
        </S.ItemContainer>
      </S.NavContainer>
    </>
  );
};

export default Nav;
