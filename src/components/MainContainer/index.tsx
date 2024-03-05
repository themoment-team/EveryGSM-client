'use client';

import { Banner, TabletSlide, PCSlide, MobileSlide } from 'components';
import { useWidthState } from 'stores';
import { WindowSize } from 'utils/windowSize';

import * as S from './style';

const MainContainer = () => {
  const { width } = useWidthState();

  const getSlideByWidth = () => {
    if (width > WindowSize.TABLET_SIZE) {
      return <PCSlide />;
    } else if (width > WindowSize.MOBILE_SIZE) {
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
