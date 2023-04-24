import * as C from 'components';
import * as S from './style';
import project from '../../../public/data/project.json';
import Image from 'next/image';
import { Vector } from 'assets/imgs';
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';

const MainContainer = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [projectLength, setProjectLength] = useState<number>(
    Math.floor(project.length / 3),
  );

  useEffect(() => {
    setProjectLength(Math.floor(project.length / 3) + 1);
  }, [project.length]);

  const handlePrevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(projectLength - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };
  const handleNextSlide = () => {
    if (slideIndex === projectLength - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  return (
    <S.MainBox>
      <C.Banner />
      <S.CardContainer>
        <S.Container>
          <Image
            src={Vector}
            css={css`
              margin-right: 3.125rem;
              z-index: 1000000000;
              cursor: pointer;
            `}
            alt=""
            onClick={handlePrevSlide}
          />
          <S.Cards>
            <S.SlideBox
              style={{
                display: 'flex',
                position: 'absolute',
                left: `${-slideIndex * 100}%`, // 슬라이드 이동에 따라 left 값을 변경
                top: '0',
                transition: 'left 0.3s ease-in-out',
              }}
            >
              {project.map((data, slideIndex) => (
                <div key={slideIndex}>
                  <C.Card data={data} index={slideIndex} />
                </div>
              ))}
            </S.SlideBox>
          </S.Cards>
          <Image
            src={Vector}
            alt=""
            css={css`
              transform: matrix(-1, 0, 0, 1, 0, 0);
              margin-left: 3.125rem;
              z-index: 1000000000;
              cursor: pointer;
            `}
            onClick={handleNextSlide}
          />
        </S.Container>
      </S.CardContainer>
    </S.MainBox>
  );
};

export default MainContainer;
