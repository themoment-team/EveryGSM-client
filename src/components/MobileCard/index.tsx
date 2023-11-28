/** @jsxImportSource @emotion/react */

'use client';

import { useState } from 'react';

import Image from 'next/image';

import { css } from '@emotion/react';

import * as C from 'components';
import { useDarkState } from 'stores';

import * as S from './style';

import type { DataType } from 'interface';

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

      <S.MobileCard /*target="_blank" href={data.projectUrl}*/ isDark={isDark}>
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
            />
          </S.Logo>
          <S.CardContents>
            <S.Title>{data.projectName}</S.Title>
            <S.Categories>
              <S.Slide>
                {data.categories.map(category => (
                  <C.Category
                    key={category}
                    category={category}
                    isDark={isDark}
                  />
                ))}
              </S.Slide>
            </S.Categories>
          </S.CardContents>
        </S.ContentWrap>
      </S.MobileCard>
    </>
  );
};

export default MobileCard;
