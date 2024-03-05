'use client';

import { useState } from 'react';

import { Card, SlideController } from 'components';
import { useFilterProjects, useHandleSlide } from 'hooks';
import { Device } from 'utils';
import { Direction } from 'utils';

import * as S from './style';

const CARDS_PER_PAGE = 4 as const;

const Tablet = () => {
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
        view={Device.TABLET}
        onClick={handlePrevSlide}
        direction={Direction.LEFT}
      />
      <S.Cards>
        <S.Slider slideIndex={slideIndex}>
          <S.MoveContainer maxIndex={maxIndex}>
            {projects.map((data, slideIndex) => (
              <Card key={slideIndex + data.id} data={data} />
            ))}
          </S.MoveContainer>
        </S.Slider>
      </S.Cards>
      <SlideController
        view={Device.TABLET}
        onClick={handleNextSlide}
        direction={Direction.RIGHT}
      />
    </S.CardContainer>
  );
};

export default Tablet;
