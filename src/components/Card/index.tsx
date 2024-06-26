/** @jsxImportSource @emotion/react */

'use client';

import { useRef, useState } from 'react';

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
  const dialog = useRef<HTMLDialogElement>(null);

  const { isDark } = useDarkState();

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleOpenModal = (id: string) => {
    setSelectedId(id);
    dialog.current?.showModal();
  };

  return (
    <S.CardWrapper>
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
      <S.ModalWrapper ref={dialog}>
        {selectedId === data.id && <C.Modal data={data} index={selectedId} />}
      </S.ModalWrapper>

      <S.CardLinker target="_blank" href={data.projectUrl}>
        <S.LogoWrapper>
          <Image
            src={data.projectLogoUri}
            alt={data.projectName + 'Logo'}
            fill
          />
        </S.LogoWrapper>
        <S.Title>{data.projectName}</S.Title>
        <S.Create>
          <PersonIcon />
          <S.Creater>{data.createrName}</S.Creater>
        </S.Create>
        <S.Categories>
          <S.Slide>
            {data.categories.map(category => (
              <C.Category key={category} category={category} isDark={isDark} />
            ))}
          </S.Slide>
        </S.Categories>
      </S.CardLinker>
    </S.CardWrapper>
  );
};

export default Card;
