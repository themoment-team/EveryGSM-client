/** @jsxImportSource @emotion/react */

'use client';

import { Banner, TabletSlide, PCSlide, MobileSlide } from 'components';
import { useWidthState } from 'stores';

import * as S from './style';

const TABLET_SIZE = 1150;
const MOBILE_SIZE = 620;

const MainContainer = () => {
  const { width } = useWidthState();

  const getSlideByWidth = () => {
    if (width > TABLET_SIZE) {
      return <PCSlide />;
    } else if (width > MOBILE_SIZE) {
      return <TabletSlide />;
    } else {
      return <MobileSlide />;
    }
  };

  return (
    <S.MainBox>
      <Banner />
      <S.CardContainer>{getSlideByWidth()}</S.CardContainer>
    </S.MainBox>
  );
};

export default MainContainer;
