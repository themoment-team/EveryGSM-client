'use client';

import { Card, SlideController } from 'components';
import { useFilterProjects, useHandleSlide } from 'hooks';
import { Device } from 'utils';
import { Direction } from 'utils';

import * as S from './style';

const CARDS_PER_PAGE = 4 as const;

const Tablet = () => {
  const projects = useFilterProjects();

  const maxIndex = Math.ceil(projects.length / CARDS_PER_PAGE) - 1;

  const { slideIndex, handleNextSlide, handlePrevSlide } =
    useHandleSlide(maxIndex);

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
