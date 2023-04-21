'use client';
import * as S from './style';
import * as I from 'assets/imgs';
import * as C from 'components';
import Image from 'next/image';
import projectData from 'interface/projectData';
import React, { useState } from 'react';
import { Detail, Vector } from 'assets/imgs';
import Link from 'next/link';
const Card = ({ data }: { data: any }) => {
  const [projectList, setProjectList] = useState<projectData[]>(data);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState<number>(0); // 슬라이드 인덱스 상태 추가
  const handleOpenModal = (id: number) => {
    setSelectedId(id);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handlePrevSlide = () => {
    if (slideIndex === 0) {
      setSlideIndex(projectList.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };
  const handleNextSlide = () => {
    if (slideIndex === projectList.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  /* flip 애니메이션(논의중) */
  // const handleFlip = () => {
  //   setIsFlip(!isFlip);
  // };
  // const [isFlip, setIsFlip] = useState(false);
  return (
    <S.Container>
      <Image
        src={Vector}
        style={{
          marginRight: '3.125rem',
          zIndex: '1000000000',
          cursor: 'pointer',
        }}
        alt=""
        onClick={handlePrevSlide}
      />
      <S.Cards>
        <S.SlideBox
          style={{
            display: 'flex',
            position: 'absolute',
            left: `${-slideIndex * 100}%`, // 슬라이드 이동에 따라 left 값을 변경
            top: '0',
            transition: 'left 0.3s ease-in-out',
          }}
        >
          {projectList.map((data, i) => (
            <div key={i} /* style={{ perspective: '10000px' }}*/>
              <S.Card
                /* isFlip={isFlip}*/ style={{
                  marginRight: (i + 1) % 3 === 0 ? '3px' : '25px',
                }}
              >
                <S.Front>
                  <S.Desc>
                    {showModal && selectedId === data.id && (
                      <C.Modal
                        show={showModal}
                        onClose={handleCloseModal}
                        index={selectedId}
                      />
                    )}
                    {/* <S.DetailBtn onClick={handleFlip}>
                      <div>Back</div>
                      <Image
                      src={I.Vector}
                      style={{
                        width: '6.25px',
                        height: '12.5px',
                        transform: 'rotateY(180deg)',
                        marginLeft: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      alt="Vector"
                      />
                    </S.DetailBtn> */}
                    <S.DetailBtn onClick={() => handleOpenModal(data.id)}>
                      <Image
                        src={I.Detail}
                        style={{
                          width: '19.5px',
                          height: '19.5px',
                          marginLeft: '12px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        alt="Vector"
                      />
                    </S.DetailBtn>
                    <Link href={data.projectUrl} target="_blank">
                      <S.CardContents>
                        <S.Logo>
                          <Image
                            src={data.imageURL}
                            width={72}
                            height={72}
                            alt="로고이미지"
                            style={{ borderRadius: '100%' }}
                          ></Image>
                        </S.Logo>
                        <S.Title>{data.projectName}</S.Title>
                        <S.Create style={{ display: 'flex' }}>
                          <Image
                            src={I.Person}
                            style={{
                              width: '25px',
                              height: '24px',
                              marginRight: '13px',
                            }}
                            alt="Person"
                          />
                          <S.Creater>{data.createrName}</S.Creater>
                        </S.Create>
                        <S.Categories>
                          <C.Category data={data}></C.Category>
                        </S.Categories>
                      </S.CardContents>
                    </Link>
                  </S.Desc>
                </S.Front>
                {/* <S.Back>
                  <S.Title>{data.projectName}</S.Title>
                  <S.Description>{data.createrDescription}</S.Description>
                  <S.DetailBtn onClick={() => handleOpenModal(data.id)}>
                  <div>상세보기</div>
                  <Image
                  src={I.Vector}
                  style={{
                    width: '6.25px',
                    height: '12.5px',
                    transform: 'rotateY(180deg)',
                    marginLeft: '12px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  alt="Vector"
                  />
                  </S.DetailBtn>
                </S.Back> */}
              </S.Card>
            </div>
          ))}
        </S.SlideBox>
      </S.Cards>
      <Image
        src={Vector}
        alt=""
        style={{
          transform: 'matrix(-1, 0, 0, 1, 0, 0)',
          marginLeft: '3.125rem',
          zIndex: '1000000000',
          cursor: 'pointer',
        }}
        onClick={handleNextSlide}
      />
    </S.Container>
  );
};

export default Card;
