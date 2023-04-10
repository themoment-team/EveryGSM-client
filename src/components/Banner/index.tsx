'use client';
import * as S from './style';
import * as I from '@/assets/imgs';
import Image from 'next/image';

const Home = () => {
  return (
    <S.BannerContainer>
      <S.TextContainer>
        <S.SmallText className="roboto">
          GSM의 모든 프로젝트를 한곳에
        </S.SmallText>
        <S.BigText className="roboto">EveryGSM</S.BigText>
      </S.TextContainer>
      <Image
        src={I.Rocket}
        style={{
          width: '350px',
          height: '310px',
          marginRight: '20px',
        }}
        alt="Rocket"
      />
    </S.BannerContainer>
  );
};

export default Home;
