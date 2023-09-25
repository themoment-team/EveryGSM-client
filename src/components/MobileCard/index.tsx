/** @jsxImportSource @emotion/react */

'use client';
import * as S from './style';
import { DataType } from 'interface';

import { css } from '@emotion/react';
import Image from 'next/image';
import * as C from 'components';
import { useState } from 'react';
import { useDarkState } from 'Stores';

interface MobileCardProps {
  data: DataType;
}

export const MobileCard: React.FC<MobileCardProps> = ({ data }) => {
  const { isDark } = useDarkState();
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
