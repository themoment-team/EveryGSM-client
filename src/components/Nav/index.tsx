'use client';
import * as S from './style';
import * as I from 'assets/imgs';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Nav = () => {
  return (
    <>
      <S.NavContainer>
        <S.ItemContainer>
          <S.IconContainer>
            <Image src={I.LogoIcon} alt="" />
            <S.Title>EveryGSM</S.Title>
          </S.IconContainer>
          <S.ToggleButton>
            <S.ToggleIcon>
              <Image src={I.Sun} alt="" />
            </S.ToggleIcon>
          </S.ToggleButton>
        </S.ItemContainer>
      </S.NavContainer>
    </>
  );
};

export default Nav;
