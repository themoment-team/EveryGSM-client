/** @jsxImportSource @emotion/react */

'use client';

import { useRef, useState } from 'react';

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
        상세보기
      </S.DetailBtn>
      <S.ModalWrapper ref={dialog}>
        {selectedId === data.id && <C.Modal data={data} index={selectedId} />}
      </S.ModalWrapper>

      <S.MobileCard target="_blank" href={data.projectUrl} isDark={isDark}>
        <S.ContentWrap>
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
    </S.CardWrapper>
  );
};

export default MobileCard;
