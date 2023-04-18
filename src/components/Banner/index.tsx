'use client';
import * as S from './style';
import * as I from '@/assets/imgs';
import Image from 'next/image';
import Rocket from 'public/images/Rocket.png';

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
