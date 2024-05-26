'use client';

import { Card, SlideController } from 'components';
import { useFilterProjects, useHandleSlide } from 'hooks';
import { Device } from 'utils';
import { Direction } from 'utils';

import * as S from './style';

const CARDS_PER_PAGE = 3 as const;

const PC = () => {
  const projects = useFilterProjects();

  const maxIndex = Math.ceil(projects.length / CARDS_PER_PAGE) - 1;

  const { slideIndex, handleNextSlide, handlePrevSlide } = useHandleSlide(
    maxIndex,
    projects,
  );

  return (
    <S.CardContainer>
      <SlideController
        view={Device.PC}
        onClick={handlePrevSlide}
        direction={Direction.LEFT}
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
        direction={Direction.RIGHT}
      />
    </S.CardContainer>
  );
};

export default PC;
