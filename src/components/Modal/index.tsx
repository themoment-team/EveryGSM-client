/** @jsxImportSource @emotion/react */

'use client';

import * as S from './style';
import * as C from 'components';
import Image from 'next/image';
import project from '../../../public/data/project.json';
import Link from 'next/link';
import { css } from '@emotion/react';
import { DataType } from 'interface';
import { useDarkState, useWidthState } from 'Stores';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  index: string;
  data?: DataType;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, index, data }) => {
  const { isDark } = useDarkState();
  const { width } = useWidthState();
  const selectedProject = project.find(item => item.id === `${index}`);

  return (
    <S.ModalContainer show={show}>
      <S.ModalContent>
        <S.Back onClick={onClose}>
          <Image
            src="/images/Back.svg"
            width={18}
            height={18}
            alt="로고이미지"
          />
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
          ></Image>
        </S.Img>
        <S.Title isDark={isDark}>{selectedProject?.projectName}</S.Title>
        <S.Creater>{selectedProject?.createrName}</S.Creater>
        <S.Categories>
          <S.Slide>
            {data?.categories.map(i => (
              <div key={i}>
                <C.Category data={i} isDark={isDark} />
              </div>
            ))}
          </S.Slide>
        </S.Categories>
        {width >= 620 ? (
          <S.Desc
            isDark={isDark}
            css={css`
              @media (min-width: 630px) {
                margin-bottom: 1.4375rem;
              }
            `}
          >
            <div
              css={css`
                width: 21.875rem;
                text-align: left;
                font-size: 1.125rem;
              `}
            >
              {selectedProject?.projectDescription}
            </div>
          </S.Desc>
        ) : (
          <>
            <S.Profile>
              {/* <S.ProfileImg>
                <Image
                  src={selectedProject?.githubProfileURL || ''}
                  width={24}
                  height={24}
                  alt="로고이미지"
                  css={css`
                    border-radius: 100%;
                  `}
                ></Image>
              </S.ProfileImg> */}
              <S.ProjectName>Github profile</S.ProjectName>
            </S.Profile>
            <S.GithubBox css={css``}>
              <Link href={selectedProject?.githubURL as string} target="_blank">
                <S.Repo isDark={isDark}>{selectedProject?.githubURL}</S.Repo>
              </Link>
            </S.GithubBox>
          </>
        )}

        <S.Profile
          css={css`
            margin-top: 0;
          `}
        >
          {width >= 620 ? (
            <S.ProfileImg>
              <Image
                src={selectedProject?.githubProfileURL || ''}
                width={24}
                height={24}
                alt="로고이미지"
                css={css`
                  border-radius: 100%;
                `}
              ></Image>
            </S.ProfileImg>
          ) : (
            ''
          )}

          <S.ProjectName>
            {width >= 620 ? selectedProject?.createrName : 'Repository'}
          </S.ProjectName>
        </S.Profile>
        <S.GithubBox css={css``}>
          {selectedProject?.githubRepoURL.map((data, i) => {
            return (
              <Link href={data} target="_blank" key={i}>
                <S.Repo isDark={isDark}>{data}</S.Repo>
              </Link>
            );
          })}
        </S.GithubBox>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;
