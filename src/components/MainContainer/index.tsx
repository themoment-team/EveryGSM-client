import * as C from 'components';
import * as S from './style';
import Image from 'next/image';
import { Vector } from 'assets/imgs';

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
          style={{
            transform: 'matrix(-1, 0, 0, 1, 0, 0)',
            marginLeft: '3.125rem',
          }}
        />
      </S.CardContainer>
    </S.MainBox>
  );
};

export default MainContainer;
