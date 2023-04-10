'use client';
import * as C from 'src/components';
import * as S from './style';
import { Vector } from '@/assets/imgs';
import Image from 'next/image';

const MainContainer = () => {
  return (
    <S.MainBox>
      <C.Banner />
      <S.CardContainer>
        <Image src={Vector} style={{ marginRight: '50px' }} alt="" />
        <S.Cards></S.Cards>
        <Image
          src={Vector}
          alt=""
          style={{
            transform: 'matrix(-1, 0, 0, 1, 0, 0)',
            marginLeft: '50px',
          }}
        />
      </S.CardContainer>
    </S.MainBox>
  );
};

export default MainContainer;
