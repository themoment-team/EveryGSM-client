'use client';
import * as C from 'components';
import * as S from './style';
import { Vector } from 'assets/imgs';
import Image from 'next/image';
import project from '../../../public/data/project.json';
import React, { useRef, useState } from 'react';
// import Slide from './Slide';

const MainContainer = () => {
  return (
    <S.MainBox>
      <C.Banner />
      <S.CardContainer>
        <S.Cards>
          <C.Card data={project} />
        </S.Cards>
      </S.CardContainer>
    </S.MainBox>
  );
};

export default MainContainer;
