'use client';

import { useState } from 'react';

import { Card, SlideController } from 'components';
import { Device } from 'enums';
import { useFilterProjects, useHandleSlide } from 'hooks';

import * as S from './style';

const CARDS_PER_PAGE = 3 as const;

const PC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const projects = useFilterProjects({ setSlideIndex });

  const maxIndex = Math.ceil(projects.length / CARDS_PER_PAGE) - 1;

  const { handleNextSlide, handlePrevSlide } = useHandleSlide(
    maxIndex,
    setSlideIndex,
  );

  return (
    <S.CardContainer>
      <SlideController
        view={Device.PC}
        onClick={handlePrevSlide}
        direction="left"
      />
      <S.Cards>
        <S.MoveContainer slideIndex={slideIndex}>
          {projects.map((data, slideIndex) => (
            <Card key={slideIndex + data.id} data={data} />
          ))}
        </S.MoveContainer>
      </S.Cards>
      <SlideController
        view={Device.PC}
        onClick={handleNextSlide}
        direction="right"
      />
    </S.CardContainer>
  );
};

export default PC;
