'use client';
import * as S from './style';
import Image from 'next/image';
import { Rocket } from 'assets/imgs';

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
        src={Rocket}
        style={{
          width: '21.875rem',
          height: '19.375rem',
          marginRight: '1.25rem',
        }}
        alt="Rocket"
      />
    </S.BannerContainer>
  );
};

export default Home;
