/** @jsxImportSource @emotion/react */

'use client';
import * as S from './style';
import projectData from 'interface/projectData';
import { css } from '@emotion/react';
import Image from 'next/image';
import * as C from 'components';
import { useState } from 'react';

export const MobileCard = ({
  data,
  isDark,
}: {
  data: projectData;
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
  return (
    <>
      {showModal && selectedId === data.id && (
        <C.Modal
          data={data}
          isDark={isDark}
          show={showModal}
          onClose={handleCloseModal}
          index={selectedId}
        />
      )}

      <S.MobileCard isDark={isDark}>
        <S.DetailBtn onClick={() => handleOpenModal(data.id)}>
          상세보기
        </S.DetailBtn>

        <S.ContentWrap onClick={() => window.open(`${data.projectUrl}`)}>
          <S.Logo>
            <Image
              src={data.projectLogoUri}
              fill
              sizes="1000"
              alt="11"
              css={css`
                border-radius: 100%;
              `}
            ></Image>
          </S.Logo>
          <S.CardContents>
            <S.Title>{data.projectName}</S.Title>
            <S.Categories>
              <S.Slide>
                {data.categories.map(index => (
                  <div key={index}>
                    <C.Category data={index} isDark={isDark} />
                  </div>
                ))}
              </S.Slide>
            </S.Categories>
          </S.CardContents>
        </S.ContentWrap>
        {/* </Link> */}
      </S.MobileCard>
    </>
  );
};

export default MobileCard;
