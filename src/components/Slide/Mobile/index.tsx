'use client';

import { MobileCard } from 'components';
import { useDisplayProjectStore } from 'stores/useDisplayProjectStore';

import * as S from './style';

const Moblie = () => {
  const { projects } = useDisplayProjectStore();

  return (
    <S.MobileContainer>
      <S.MobileCardTitle>등록된 프로젝트</S.MobileCardTitle>
      <S.MobileCardWrap>
        {projects.map(data => (
          <MobileCard key={data.id} data={data} />
        ))}
      </S.MobileCardWrap>
    </S.MobileContainer>
  );
};

export default Moblie;
