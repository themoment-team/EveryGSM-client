'use client';
import * as S from './style';
import Image from 'next/image';

const Home = () => {
  return (
    <S.BannerContainer>
      <S.TextContainer>
        <S.SmallText className="roboto">
          GSM의 모든 프로젝트를 한 곳에
        </S.SmallText>
        <S.BigText className="roboto">EveryGSM</S.BigText>
      </S.TextContainer>
      <Image
        src="/images/Rocket.png"
        width={323}
        height={268}
        style={{
          marginRight: '1.25rem',
        }}
        alt="Rocket"
      />
    </S.BannerContainer>
  );
};

export default Home;
