/** @jsxImportSource @emotion/react */

'use client';

import { useState } from 'react';

import Image from 'next/image';

import project from 'constants/project.json';

import * as S from './style';

const PC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const handlePrevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex((project.length % 3) + 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleNextSlide = () => {
    if (slideIndex > Math.floor(project.length / 3) - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <S.CardContainer>
      <S.Container>
        <Image
          src="/images/Vector.svg"
          alt="Vector"
          onClick={handlePrevSlide}
        />
        <S.Cards>
          {project.map((data, slideIndex) => (
            <div key={slideIndex}>
              <C.Card key={slideIndex + data.id} data={data} />
            </div>
          ))}
        </S.Cards>
        <Image
          src="/images/Vector.svg"
          alt="Vector"
          onClick={handleNextSlide}
        />
      </S.Container>
    </S.CardContainer>
  );
};

export default PC;
