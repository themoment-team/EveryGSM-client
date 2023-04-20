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
      <S.NavContainer>
        <S.ItemContainer>
          <S.IconContainer>
            <Image src={I.LogoIcon} alt="" />
            <S.Title>EveryGSM</S.Title>
          </S.IconContainer>
          <S.ToggleButton onClick={handleClick}>
            <S.ToggleIcon
              css={css`
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
