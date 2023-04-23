import * as C from 'components';
import * as S from './style';
import Image from 'next/image';
import { Vector } from 'assets/imgs';
import { css } from '@emotion/react';

const MainContainer = () => {
  return (
    <S.MainBox>
      <C.Banner />
      <S.CardContainer>
        <Image src={Vector} style={{ marginRight: '3.125rem' }} alt="" />
        <S.Cards></S.Cards>
        <Image
          src={Vector}
          alt=""
          css={css`
            transform: 'matrix(-1, 0, 0, 1, 0, 0)';
            margin-left: '3.125rem';
          `}
        />
      </S.CardContainer>
    </S.MainBox>
  );
};

export default MainContainer;
