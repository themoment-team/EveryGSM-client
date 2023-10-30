/** @jsxImportSource @emotion/react */

'use client';

import { MobileCard } from 'components';
import project from 'constants/project.json';

import * as S from './style';

const Moblie = () => (
  <S.MobileContainer>
    <S.MobileCardTitle>등록된 프로젝트</S.MobileCardTitle>
    <S.MobileCardWrap>
      {project.map(data => (
        <MobileCard key={data.id} data={data} />
      ))}
    </S.MobileCardWrap>
  </S.MobileContainer>
);

export default Moblie;
