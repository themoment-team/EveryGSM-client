'use client';
import * as S from './style';
import { LogoIcon } from 'assets/imgs';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Nav = () => {
  return (
    <>
      <S.NavContainer>
        <S.IconContainer>
          <S.LogoImg>
            <Image
              src={LogoIcon}
              alt="Everygsm로고"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'relative',
              }}
            />
          </S.LogoImg>
          <S.Title>EveryGSM</S.Title>
        </S.IconContainer>
      </S.NavContainer>
    </>
  );
};

export default Nav;
