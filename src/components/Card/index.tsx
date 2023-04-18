'use client';
import * as S from './style';
import * as I from '@/assets/imgs';
import * as C from 'src/components';
import Image from 'next/image';
import projectData from 'src/interface/projectData';
import React, { useEffect, useState, useCallback } from 'react';

const Card = ({ data }: { data: any }) => {
  const [projectList, setProjectList] = useState<projectData[]>(data);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const handleOpenModal = (id: number) => {
    setSelectedId(id);
    setShowModal(true);
    console.log('click');
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div style={{ display: 'flex', width: '1136px', overflow: 'hidden' }}>
      {projectList.map((data, i) => (
        <div key={i}>
          <S.Card>
            {/* <S.Front> */}
            <S.Desc>
              {showModal && selectedId === data.id && (
                <C.Modal
                  show={showModal}
                  onClose={handleCloseModal}
                  index={selectedId}
                />
              )}
              <S.DetailBtn onClick={() => handleOpenModal(data.id)}>
                <span>상세보기</span>
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
              {/* </S.Front> */}
              {/* <S.Back className="back"> */}
              {/* <S.Title>{data.projectName}</S.Title>
          <S.Description>{data.createrDescription}</S.Description> */}
              {/* </S.Back> */}
            </S.Desc>
          </S.Card>
        </div>
      ))}
    </div>
  );
};

export default Card;
