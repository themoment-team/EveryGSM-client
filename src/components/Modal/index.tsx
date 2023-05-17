'use client';
import * as S from './style';
import * as C from 'components';
import Image from 'next/image';
import project from '../../../public/data/project.json';
import Link from 'next/link';
import { css } from '@emotion/react';
import projectData from 'interface/projectData';

interface Props {
  show: boolean;
  onClose: () => void;
  index: string;
  isDark: boolean;
  data?: projectData;
}

const Modal = ({ show, onClose, index, isDark, data }: Props) => {
  console.log(data);
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
            fill
            alt="로고이미지"
            css={css`
              border-radius: 100%;
            `}
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
        <S.Desc isDark={isDark}>
          <div
            css={css`
              width: 21.875rem;
              text-align: left;
              font-size: 0.0625rem;
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
          <S.ProjectName>{selectedProject?.projectName}</S.ProjectName>
        </S.Profile>
        <S.GithubBox>
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
