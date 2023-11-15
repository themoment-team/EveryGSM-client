/** @jsxImportSource @emotion/react */

'use client';

import Image from 'next/image';

import { css } from '@emotion/react';

import { XIcon } from 'assets';
import * as C from 'components';
import project from 'constants/project.json';
import { useDarkState, useWidthState } from 'stores';

import * as S from './style';

import type { DataType } from 'interface';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  index: string;
  data?: DataType;
}

const MOBILE_SIZE = 620 as const;

const Modal: React.FC<ModalProps> = ({ show, onClose, index, data }) => {
  const { isDark } = useDarkState();
  const { width } = useWidthState();

  const isMobile = width >= MOBILE_SIZE;

  const selectedProject = project.find(item => item.id === `${index}`);

  return (
    <S.ModalContainer show={show}>
      <S.ModalContent>
        <S.Back onClick={onClose}>
          <XIcon />
        </S.Back>
        <S.Img>
          <Image
            src={selectedProject?.projectLogoUri ?? ''}
            width={70}
            height={70}
            css={css`
              border-radius: 100%;

              @media (max-width: 620px) {
                width: 4rem;
                height: 4rem;
              }
            `}
            alt="로고이미지"
          />
        </S.Img>
        <S.Title isDark={isDark}>{selectedProject?.projectName}</S.Title>
        <S.Creater>{selectedProject?.createrName}</S.Creater>
        <S.Categories>
          <S.Slide>
            {data?.categories.map(category => (
              <C.Category key={category} category={category} isDark={isDark} />
            ))}
          </S.Slide>
        </S.Categories>
        {isMobile ? (
          <>
            <S.Profile>
              <S.ProjectName>Github profile</S.ProjectName>
            </S.Profile>
            <S.GithubBox>
              <S.Repo
                href={selectedProject?.githubURL ?? ''}
                target="_blank"
                isDark={isDark}
              >
                {selectedProject?.githubURL}
              </S.Repo>
            </S.GithubBox>
          </>
        ) : (
          <S.Desc isDark={isDark}>{selectedProject?.projectDescription}</S.Desc>
        )}

        <S.Profile>
          {!isMobile && (
            <S.ProfileImg>
              <Image
                src={selectedProject?.githubProfileURL ?? ''}
                width={24}
                height={24}
                alt="로고이미지"
              />
            </S.ProfileImg>
          )}
          <S.ProjectName>
            {isMobile ? 'Repository' : selectedProject?.createrName}
          </S.ProjectName>
        </S.Profile>
        <S.GithubBox>
          {selectedProject?.githubRepoURL.map((data, i) => (
            <S.Repo href={data} target="_blank" key={i + data} isDark={isDark}>
              {data}
            </S.Repo>
          ))}
        </S.GithubBox>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;
