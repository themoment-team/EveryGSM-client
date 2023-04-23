'use client';
import * as S from './style';
import { Rocket } from 'assets/imgs';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.BannerContainer>
      <S.TextContainer>
        {windowWidth > 620 ? (
          <>
            <S.SmallText className="roboto">
              GSM의 모든 프로젝트를 한 곳에
            </S.SmallText>
            <S.BigText className="roboto">EveryGSM</S.BigText>
          </>
        ) : (
          <S.MobileText>
            GSM의 모든 프로젝트를
            <br />한 곳에, EveryGSM
          </S.MobileText>
        )}
      </S.TextContainer>
      <S.BannerImg>
        <Image src={Rocket} fill alt="Rocket" />
      </S.BannerImg>
    </S.BannerContainer>
  );
};

export default Home;
