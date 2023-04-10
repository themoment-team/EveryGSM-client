'use client';
import * as S from './style';
import * as I from '@/assets/imgs';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Nav = () => {
  return (
    <>
      <S.NavContainer>
        <S.IconContainer>
          <Image src={I.LogoIcon} alt="" />
          <S.Title>EveryGSM</S.Title>
        </S.IconContainer>
      </S.NavContainer>
    </>
  );
};

export default Nav;
