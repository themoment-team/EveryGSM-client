'use client';

import { useState } from 'react';

import { Vector } from 'assets';
import { Card } from 'components';
import { useFilterProjects } from 'hooks';

import * as S from './style';

const CARDS_PER_PAGE = 3 as const;

const PC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const projects = useFilterProjects({ setSlideIndex });

  const maxIndex = Math.ceil(projects.length / CARDS_PER_PAGE) - 1;

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
      <S.PrevController type="button" onClick={handlePrevSlide}>
        <Vector />
      </S.PrevController>
      <S.Cards>
        <S.MoveContainer slideIndex={slideIndex}>
          {projects.map((data, slideIndex) => (
            <Card key={slideIndex + data.id} data={data} />
          ))}
        </S.MoveContainer>
      </S.Cards>
      <S.NextController type="button" onClick={handleNextSlide}>
        <Vector />
      </S.NextController>
    </S.CardContainer>
  );
};

export default PC;
