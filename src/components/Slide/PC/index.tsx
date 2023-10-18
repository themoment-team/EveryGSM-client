/** @jsxImportSource @emotion/react */

'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Card } from 'components';
import project from 'constants/project.json';

import * as S from './style';

const CARDSPERPAGE = 3 as const;

const PC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const maxIndex = Math.ceil(project.length / CARDSPERPAGE) - 1;

  const handlePrevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(maxIndex);
    } else {
      setSlideIndex(curIndex => curIndex - 1);
    }
  };

  const handleNextSlide = () => {
    if (maxIndex === slideIndex) {
      setSlideIndex(0);
    } else {
      setSlideIndex(curIndex => curIndex + 1);
    }
  };

  return (
    <S.CardContainer>
      <S.VectorWrapper>
        <Image
          fill
          src="/images/Vector.svg"
          alt="Vector"
          onClick={handlePrevSlide}
        />
      </S.VectorWrapper>
      <S.Cards>
        <S.MoveContainer slideIndex={slideIndex}>
          {project.map((data, slideIndex) => (
            <Card key={slideIndex + data.id} data={data} />
          ))}
        </S.MoveContainer>
      </S.Cards>
      <S.VectorWrapper isRight={true}>
        <Image
          fill
          src="/images/Vector.svg"
          alt="Vector"
          onClick={handleNextSlide}
        />
      </S.VectorWrapper>
    </S.CardContainer>
  );
};

export default PC;
