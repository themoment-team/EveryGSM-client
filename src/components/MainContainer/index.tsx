import * as C from 'components';
import * as S from './style';
import project from '../../../public/data/project.json';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { useWidthState } from 'Stores';

const MainContainer = ({ isDark }: { isDark: boolean }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [tabletCardBox, setTabletCardBox] = useState<number>(3);
  const { width } = useWidthState();

  useEffect(() => {
    if (width <= 1150) {
      setTabletCardBox(4);
    }
  }, [width]);

  const handlePrevSlide = () => {
    if (slideIndex === 0) {
      return;
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };
  const handleNextSlide = () => {
    if (slideIndex > Math.floor(project.length / tabletCardBox) - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <S.MainBox>
      <C.Banner />
      <S.CardContainer>
        <S.Container>
          <Image
            src="/images/Vector.svg"
            width={16}
            height={34}
            css={css`
              margin-right: 3.125rem;
              z-index: 1000000000;
              cursor: pointer;
              @media (max-width: 1150px) {
                margin-right: 1.875rem;
              }
            `}
            alt=""
            onClick={handlePrevSlide}
          />
          <S.Cards>
            <S.SlideBox
              style={{
                display: 'flex',
                position: 'absolute',
                // left: `${-(slideIndex * 100)}%`, // 슬라이드 이동에 따라 left 값을 변경
                left: `${
                  width > 1150 ? -(slideIndex * 100) : -(slideIndex * 103)
                }% `,
                top: '0',
                transition: 'left 0.3s ease-in-out',
              }}
            >
              {project.map((data, slideIndex) => (
                <div key={slideIndex}>
                  <C.Card isDark={isDark} data={data} index={slideIndex} />
                </div>
              ))}
            </S.SlideBox>
          </S.Cards>
          <Image
            src="/images/Vector.svg"
            width={16}
            height={34}
            alt=""
            css={css`
              transform: matrix(-1, 0, 0, 1, 0, 0);
              margin-left: 3.125rem;
              z-index: 1000000000;
              cursor: pointer;
              @media (max-width: 1150px) {
                margin-left: 1.875rem;
              }
            `}
            onClick={handleNextSlide}
          />
        </S.Container>
      </S.CardContainer>
    </S.MainBox>
  );
};

export default MainContainer;
