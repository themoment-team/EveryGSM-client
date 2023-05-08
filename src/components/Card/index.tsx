'use client';
import * as S from './style';
import * as I from 'assets/imgs';
import * as C from 'components';
import Image from 'next/image';
import projectData from 'interface/projectData';
import { useState } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
const Card = ({
  data,
  index,
  isDark,
}: {
  data: projectData;
  index: number;
  isDark: boolean;
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleOpenModal = (id: string) => {
    setSelectedId(id);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  /* flip 애니메이션(논의중) */
  // const handleFlip = () => {
  //   setIsFlip(!isFlip);
  // };
  // const [isFlip, setIsFlip] = useState(false);
  return (
    <div /* style={{ perspective: '10000px' }}*/>
      <S.Card
        /* isFlip={isFlip}*/
        css={css`
          margin-right: ${(index + 1) % 3 === 0 ? '3px' : '25px'};
        `}
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
            <S.DetailBtn onClick={() => handleOpenModal(data.id)}>
              <Image
                src={I.Detail}
                css={css`
                  width: 19.5008px;
                  height: 19.5008px;
                  margin-left: 12px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
                alt="Vector"
              />
            </S.DetailBtn>
            <Link href={data.projectUrl}>
              <S.CardContents>
                <S.Logo>
                  <Image
                    src={data.imageURL}
                    width={72}
                    height={72}
                    alt="로고이미지"
                    css={css`
                      border-radius: 100%;
                    `}
                  ></Image>
                </S.Logo>
                <S.Title>{data.projectName}</S.Title>
                <S.Create style={{ display: 'flex' }}>
                  <I.Person
                    css={css`
                      transition: ease-in-out 0.3s;
                    `}
                    isDark={isDark}
                  />
                  <S.Creater>{data.createrName}</S.Creater>
                </S.Create>
                <S.Categories>
                  {data.categories.map(i => (
                    <div key={i}>
                      <C.Category data={i} />
                    </div>
                  ))}
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
                width: '6.2496px',
                height: '12.5008px',
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
  );
};

export default Card;
