'use client';
import * as S from './style';
import * as I from 'assets/imgs';
import * as C from 'components';
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import project from '../../../public/data/project.json';
import Link from 'next/link';
import { Back } from 'assets/imgs';
const Modal = ({
  show,
  onClose,
  index,
}: {
  show: boolean;
  onClose: () => void;
  index: number;
}) => {
  const selectedProject = project.find(item => item.id === `${index}`);
  return (
    <S.ModalContainer show={show}>
      <S.ModalContent>
        <S.Back onClick={onClose}>
          <Image src={Back} width={18} height={18} alt="로고이미지" />
        </S.Back>
        <S.Img>
          <Image
            src={selectedProject?.imageURL ?? ''}
            width={80}
            height={80}
            alt="로고이미지"
            style={{ borderRadius: '100%' }}
          ></Image>
        </S.Img>
        <S.Title>{selectedProject?.projectName}</S.Title>
        <S.Creater>{selectedProject?.createrName}</S.Creater>
        <S.Categories>
          <C.Category data={selectedProject}></C.Category>
        </S.Categories>
        <S.Desc>
          <div
            style={{
              width: '350px',
              textAlign: 'left',
            }}
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
              style={{ borderRadius: '100%' }}
            ></Image>
          </S.ProfileImg>
          <S.ProjectName>{selectedProject?.projectName}</S.ProjectName>
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
