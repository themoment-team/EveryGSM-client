'use client';
import * as S from './style';
import * as C from 'components';
import Image from 'next/image';
import project from '../../../public/data/project.json';
import Link from 'next/link';
import { css } from '@emotion/react';
const Modal = ({
  show,
  onClose,
  index,
  isDark,
}: {
  show: boolean;
  onClose: () => void;
  index: string;
  isDark: boolean;
}) => {
  const selectedProject = project.find(item => item.id === `${index}`);
  return (
    <S.ModalContainer show={show}>
      <S.ModalContent isDark={isDark}>
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
            width={80}
            height={80}
            alt="로고이미지"
            css={css`
              border-radius: 100%;
            `}
          ></Image>
        </S.Img>
        <S.Title isDark={isDark}>{selectedProject?.projectName}</S.Title>
        <S.Creater>{selectedProject?.createrName}</S.Creater>
        <S.Categories>
          {selectedProject?.categories.map(category => (
            <div key={category}>
              <C.Category isDark={isDark} data={category} />
            </div>
          ))}
        </S.Categories>
        <S.Desc isDark={isDark}>
          <div
            css={css`
              width: 21.875rem;
              text-align: left;
            `}
          >
            {selectedProject?.projectDescription}
          </div>
        </S.Desc>
        <S.Profile>
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
          <S.ProjectName isDark={isDark}>
            {selectedProject?.projectName}
          </S.ProjectName>
        </S.Profile>
        <S.GithubBox>
          {selectedProject?.githubRepoURL.map((data, i) => {
            return (
              <Link href={data} target="_blank" key={i}>
                <S.Repo>{data}</S.Repo>
              </Link>
            );
          })}
        </S.GithubBox>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default Modal;