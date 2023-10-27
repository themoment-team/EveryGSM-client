/** @jsxImportSource @emotion/react */

'use client';

import { useState, useEffect } from 'react';

import { css } from '@emotion/react';

import { Vector } from 'assets';
import * as C from 'components';
import project from 'constants/project.json';
import { useWidthState } from 'stores';

import * as S from './style';

import type { DataType } from 'interface';

const MainContainer = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [tabletCardBox, setTabletCardBox] = useState<number>(3);
  const { width } = useWidthState();

  const getMaxIndex = () => Math.ceil(project.length / tabletCardBox) - 1;

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
      <C.Banner />
      <S.CardContainer>
        <S.Container>
          <S.PrevController type="button" onClick={handlePrevSlide}>
            <Vector />
          </S.PrevController>
          <S.Cards>
            <S.SlideBox slideIndex={slideIndex}>
              {width > 1150 ? (
                project.map((data, slideIndex) => (
                  <div key={slideIndex}>
                    <C.Card key={slideIndex + data.id} data={data} />
                  </div>
                ))
              ) : width <= 620 ? (
                <div
                  css={css`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <S.MobileCardTitle>등록된 프로젝트</S.MobileCardTitle>
                  <S.MobileCardWrap>
                    {project.map((data, slideIndex) => (
                      <div
                        key={slideIndex}
                        css={css`
                          width: 100%;
                        `}
                      >
                        <C.MobileCard data={data} />
                      </div>
                    ))}
                  </S.MobileCardWrap>
                </div>
              ) : (
                tabletCardShow(project, 4)
              )}
            </S.SlideBox>
          </S.Cards>
          <S.NextController type="button" onClick={handleNextSlide}>
            <Vector />
          </S.NextController>
        </S.Container>
      </S.CardContainer>
    </S.MainBox>
  );
};

export default MainContainer;
