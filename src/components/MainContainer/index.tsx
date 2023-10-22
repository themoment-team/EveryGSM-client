/** @jsxImportSource @emotion/react */

'use client';

import { useState, useEffect } from 'react';

import { css } from '@emotion/react';

import { Banner, TabletSlide, PCSlide, MobileSlide } from 'components';
import project from 'constants/project.json';
import { useWidthState } from 'stores';

import * as S from './style';

import type { DataType } from 'interface';

const MainContainer = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [tabletCardBox, setTabletCardBox] = useState<number>(3);
  const { width } = useWidthState();

  const getMaxIndex = () => Math.ceil(project.length / tabletCardBox) - 1;

  function getComponentByWidth(width: number) {
    if (width > 1150) {
      return <PCSlide />;
    } else if (width > 620) {
      return <TabletSlide />;
    } else {
      return <MobileSlide />;
    }
  }

  useEffect(() => {
    if (width <= 1150) {
      setTabletCardBox(4);
    }
  }, [width]);

  const handlePrevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(getMaxIndex());
    } else {
      setSlideIndex(curIndex => curIndex - 1);
    }
  };

  const handleNextSlide = () => {
    if (getMaxIndex() === slideIndex) {
      setSlideIndex(0);
    } else {
      setSlideIndex(curIndex => curIndex + 1);
    }
  };

  const tabletCardShow = (data = [{}], size = 1) => {
    const cardDatas = [];

    for (let i = 0; i < data.length; i += size) {
      cardDatas.push(data.slice(i, i + size));
    }

    return cardDatas.map((array, i) => (
      <div
        key={i}
        css={css`
          display: flex;
          width: 81vw;
          height: 81vw;
          flex-wrap: wrap;
          justify-content: space-between;
          align-content: space-between;
        `}
      >
        {array.map((item, i) => (
          <C.Card key={i} data={item as DataType} />
        ))}
      </div>
    ));
  };

  return (
    <S.MainBox>
      <Banner />
      <S.CardContainer>{getComponentByWidth(width)}</S.CardContainer>
    </S.MainBox>
  );
};

export default MainContainer;
