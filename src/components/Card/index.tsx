'use client';
import * as S from './style';
import { Person } from '../../../public/images';
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
    <div /* style={{ perspective: '625rem' }}*/>
      <S.Card
        /* isFlip={isFlip}*/
        css={css`
          margin-right: ${(index + 1) % 3 === 0 ? '0.1875rem' : '1.5625rem'};
        `}
      >
        <S.Front>
          <S.Desc>
            {showModal && selectedId === data.id && (
              <C.Modal
                isDark={isDark}
                show={showModal}
                onClose={handleCloseModal}
                index={selectedId}
              />
            )}
            <S.DetailBtn onClick={() => handleOpenModal(data.id)}>
              <Image
                src="/images/Detail.svg"
                width={22}
                height={22}
                css={css`
                  width: 1.2188rem;
                  height: 1.2188rem;
                  margin-left: 0.75rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
                alt="Vector"
              />
            </S.DetailBtn>
            <Link href={data.projectUrl} target="_blank">
              <S.CardContents>
                <S.Logo>
                  <Image
                    src={data.projectLogoUri}
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
                  <Person isDark={isDark} />
                  <S.Creater>{data.createrName}</S.Creater>
                </S.Create>
                <S.Categories>
                  <S.Slide>
                    {data.categories.map(i => (
                      <div key={i}>
                        <C.Category data={i} isDark={isDark} />
                      </div>
                    ))}
                  </S.Slide>
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
                width: '0.3906rem',
                height: '0.7813rem',
                transform: 'rotateY(180deg)',
                marginLeft: '0.75rem',
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
