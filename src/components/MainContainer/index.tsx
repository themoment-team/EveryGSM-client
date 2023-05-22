import * as C from 'components';
import * as S from './style';
import project from '../../../public/data/project.json';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { useWidthState } from 'Stores';
import projectData from 'interface/projectData';
import Link from 'next/link';

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
      setSlideIndex((project.length % tabletCardBox) - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };
  const handleNextSlide = () => {
    if (
      slideIndex >
      Math.floor(project.length / tabletCardBox) - (width > 1150 ? 0 : 1)
    ) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const tabletCardShow = (data = [{}], size = 1) => {
    const arr = [];

    for (let i = 0; i < data.length; i += size) {
      arr.push(data.slice(i, i + size));
    }

    return arr.map(array => {
      return (
        <div
          css={css`
            display: flex;
            width: 81vw;
            height: 81vw;
            flex-wrap: wrap;
            justify-content: space-between;
            align-content: space-between;
          `}
        >
          {array.map((item, i) => {
            return (
              <C.Card
                isDark={isDark}
                data={item as projectData}
                index={i}
              ></C.Card>
            );
          })}
        </div>
      );
    });
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

              @media (max-width: 620px) {
                display: none;
              }
            `}
            alt=""
            onClick={handlePrevSlide}
          />
          <S.Cards>
            <S.SlideBox slideIndex={slideIndex}>
              {width > 1150 ? (
                project.map((data, slideIndex) => (
                  <div key={slideIndex}>
                    <C.Card isDark={isDark} data={data} index={slideIndex} />
                  </div>
                ))
              ) : width <= 620 ? (
                <div
                  css={css`
                    width: 100%;
                    height: 100%;
                  `}
                >
                  <S.MobileCardTitle>등록된 프로젝트</S.MobileCardTitle>
                  <S.MobileCardWrap>
                    {project.map((data, slideIndex) => {
                      return (
                        <div
                          key={slideIndex}
                          css={css`
                            width: 100%;
                          `}
                        >
                          <C.MobileCard isDark={isDark} data={data} />
                        </div>
                      );
                    })}
                  </S.MobileCardWrap>
                </div>
              ) : (
                tabletCardShow(project, 4)
              )}
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

              @media (max-width: 620px) {
                display: none;
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
