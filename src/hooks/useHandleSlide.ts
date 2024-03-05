'use client';

import { useState } from 'react';

const useHandleSlide = (maxIndex: number) => {
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

  return {
    slideIndex,
    handlePrevSlide,
    handleNextSlide,
  };
};

export default useHandleSlide;
