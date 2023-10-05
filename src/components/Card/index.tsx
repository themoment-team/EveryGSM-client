/** @jsxImportSource @emotion/react */

'use client';

import { useState } from 'react';

import Image from 'next/image';

import { css } from '@emotion/react';

import { PersonIcon } from 'assets';
import * as C from 'components';
import { useDarkState } from 'stores';

import * as S from './style';

import type { DataType } from 'interface';

interface CardProps {
  data: DataType;
}

const Card: React.FC<CardProps> = ({ data }) => {
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
    <S.CardWrapper>
      {showModal && selectedId === data.id && (
        <C.Modal
          show={showModal}
          data={data}
          onClose={handleCloseModal}
          index={selectedId}
        />
      )}
      <S.DetailBtn onClick={() => handleOpenModal(data.id)}>
        <Image
          src="/images/Detail.svg"
          fill
          css={css`
            width: 3.2188rem;
            height: 1.2188rem;
            margin-left: 0.75rem;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
          alt="Vector"
        />
      </S.DetailBtn>
      <S.LogoWrapper>
        <Image src={data.projectLogoUri} alt={data.projectName + 'Logo'} fill />
      </S.LogoWrapper>
      <S.Title>{data.projectName}</S.Title>
      <S.Create>
        <PersonIcon isDark={isDark} />
        <S.Creater>{data.createrName}</S.Creater>
      </S.Create>
      <S.Categories>
        <S.Slide>
          {data.categories.map(category => (
            <C.Category key={category} category={category} isDark={isDark} />
          ))}
        </S.Slide>
      </S.Categories>
    </S.CardWrapper>
  );
};

export default Card;
