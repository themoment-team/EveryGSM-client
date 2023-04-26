import * as S from './style';
import * as I from 'assets/imgs';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useWidthState } from 'Stores';

interface Props {
  isDark: boolean;
  setIsDark: Function;
}

const Nav = ({ isDark, setIsDark }: Props) => {
  const width = useWidthState(state => state.width);
  const [svgSize, setSvgSize] = useState<number>(17.89);

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
          @media (max-width: 38.75rem) {
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
              <Image
                src={isDark ? I.Moon : I.Sun}
                alt=""
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
