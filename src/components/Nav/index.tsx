'use client';
import * as S from './style';
import * as I from 'src/assets/svgs';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Nav = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {domLoaded && (
        <S.NavContainer>
          <S.IconContainer>
            <Image src={I.LogoIcon} alt="" />
            <S.Title>EveryGSM</S.Title>
          </S.IconContainer>
        </S.NavContainer>
      )}
    </>
  );
};

export default Nav;
