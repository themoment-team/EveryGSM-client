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
          @media (max-width: 620px) {
            border: none;
            background-color: ${isDark ? '#191919' : '#f1f1f5'};
          }
        `}
      >
        <S.ItemContainer>
          <S.IconContainer>
            <S.LogoContainer>
              <Image src={I.LogoIcon} alt="" />
            </S.LogoContainer>
            <S.Title>EveryGSM</S.Title>
          </S.IconContainer>
          <S.ToggleButton onClick={handleClick}>
            <S.ToggleIcon isDark={isDark}>
              <Image src={isDark ? I.Moon : I.Sun} alt="" fill />
            </S.ToggleIcon>
          </S.ToggleButton>
        </S.ItemContainer>
      </S.NavContainer>
    </>
  );
};

export default Nav;
