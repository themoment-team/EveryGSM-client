'use client';
import * as S from './style';
import { Rocket } from 'assets/imgs';
import { Banner } from 'components';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Home = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const BannerText = ['GSM의 모든 프로젝트를', '한곳에, EveryGSM'];

  return (
    <S.BannerContainer>
      <S.TextContainer>
        <S.SmallText className="roboto">
          {windowSize.width > 720
            ? 'GSM의 모든 프로젝트를 한 곳에'
            : BannerText[0]}
        </S.SmallText>
        <S.BigText className="roboto">
          {windowSize.width > 720 ? 'Every GSM' : BannerText[1]}
        </S.BigText>
      </S.TextContainer>
      <S.BannerImg>
        <Image src={Rocket} fill alt="Rocket" />
      </S.BannerImg>
    </S.BannerContainer>
  );
};

export default Home;
