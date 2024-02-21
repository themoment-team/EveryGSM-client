'use client';

import type { Dispatch, SetStateAction } from 'react';

const useHandleSlide = (
  maxIndex: number,
  setSlideIndex: Dispatch<SetStateAction<number>>,
) => {
  const handlePrevSlide = () => {
    setSlideIndex(curIndex => (curIndex === 0 ? maxIndex : curIndex - 1));
  };

  const handleNextSlide = () => {
    setSlideIndex(curIndex => (curIndex === maxIndex ? 0 : curIndex + 1));
  };

  return {
    handlePrevSlide,
    handleNextSlide,
  };
};

export default useHandleSlide;
