'use client';

import { useEffect, useState } from 'react';

import type { DataType } from 'interface';

const useHandleSlide = (maxIndex: number, projects: DataType[]) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const increaseIndex = (index: number) => index + 1;
  const decreaseIndex = (index: number) => index - 1;

  const handlePrevSlide = () => {
    setSlideIndex(curIndex =>
      curIndex === 0 ? maxIndex : decreaseIndex(curIndex),
    );
  };

  const handleNextSlide = () => {
    setSlideIndex(curIndex =>
      curIndex === maxIndex ? 0 : increaseIndex(curIndex),
    );
  };

  useEffect(() => {
    setSlideIndex(0);
  }, [projects]);

  return {
    slideIndex,
    handlePrevSlide,
    handleNextSlide,
  };
};

export default useHandleSlide;
