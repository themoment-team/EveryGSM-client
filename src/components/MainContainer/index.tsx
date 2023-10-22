/** @jsxImportSource @emotion/react */

'use client';

import { Banner, TabletSlide, PCSlide, MobileSlide } from 'components';
import { useWidthState } from 'stores';

import * as S from './style';

const MainContainer = () => {
  const { width } = useWidthState();

  function getComponentByWidth(width: number) {
    if (width > 1150) {
      return <PCSlide />;
    } else if (width > 620) {
      return <TabletSlide />;
    } else {
      return <MobileSlide />;
    }
  }

  return (
    <S.MainBox>
      <Banner />
      <S.CardContainer>{getComponentByWidth(width)}</S.CardContainer>
    </S.MainBox>
  );
};

export default MainContainer;
