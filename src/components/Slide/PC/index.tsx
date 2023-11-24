'use client';

import { useState } from 'react';

import { Vector } from 'assets';
import { Card } from 'components';
import project from 'constants/project.json';
import { useSearchState } from 'stores';

import * as S from './style';

const CARDS_PER_PAGE = 3 as const;

const PC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const { searchKeyword } = useSearchState();

  const maxIndex = Math.ceil(project.length / CARDS_PER_PAGE) - 1;

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

  const filteredProjects = project.filter(data => {
    const values = Object.values(data).flatMap(value => {
      if (typeof value === 'object' && value !== null) {
        return Object.values(value);
      }
      return value;
    });

    return values.some(value => {
      if (typeof value === 'string' && value.includes(searchKeyword)) {
        return true;
      }
    });
  });

  return (
    <S.CardContainer>
      <S.PrevController type="button" onClick={handlePrevSlide}>
        <Vector />
      </S.PrevController>
      <S.Cards>
        <S.MoveContainer slideIndex={slideIndex}>
          {filteredProjects.map((data, slideIndex) => (
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
