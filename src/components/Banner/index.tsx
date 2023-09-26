'use client';
import * as S from './style';
import Image from 'next/image';
import { useEffect } from 'react';
import { useWidthState } from 'Stores';

const Banner = () => {
  const { width, setWidth } = useWidthState();

  const handleResize = () => {
    setWidth(window.innerWidth);
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
        {width > 620 ? (
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
        <Image
          src="/images/projects/Rocket.png"
          fill
          alt="Rocket"
          sizes="1000"
        />
      </S.BannerImg>
    </S.BannerContainer>
  );
};

export default Banner;
