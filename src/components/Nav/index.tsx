import * as S from './style';
import Image from 'next/image';
import { useEffect } from 'react';

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
      <S.NavContainer isDark={isDark}>
        <S.ItemContainer>
          <S.IconContainer>
            <Image
              src="/images/LogoIcon.svg"
              width={44}
              height={44}
              alt="logo"
            />
            <S.Title isDark={isDark}>EveryGSM</S.Title>
          </S.IconContainer>
          <S.ToggleButton onClick={handleClick}>
            <S.ToggleIcon isDark={isDark}>
              <Image
                src={isDark ? '/images/Moon.svg' : '/images/Sun.svg'}
                alt=""
                width={20}
                height={20}
              />
            </S.ToggleIcon>
          </S.ToggleButton>
        </S.ItemContainer>
      </S.NavContainer>
    </>
  );
};

export default Nav;
