import * as S from './style';
import Image from 'next/image';

import { useEffect } from 'react';
import { css } from '@emotion/react';
import { useWidthState } from 'Stores';
import { LogoIcon, MoonIcon, SunIcon } from 'assets';

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
