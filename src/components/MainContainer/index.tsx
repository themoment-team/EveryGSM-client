import * as C from 'components';
import * as S from './style';
import { Vector } from 'assets/imgs';
import Image from 'next/image';
import project from '../../../public/data/project.json';
import React, { useRef, useState } from 'react';

interface Props {
  isDark: boolean;
}

const MainContainer = ({ isDark }: Props) => {
  return (
    <S.MainBox>
      <C.Banner />
      <S.CardContainer>
        <C.Card data={project} />
      </S.CardContainer>
    </S.MainBox>
  );
};

export default MainContainer;
