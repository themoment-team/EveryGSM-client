'use client';
import * as S from './style';
import React, { useEffect, useState } from 'react';
const Category = ({ data }: { data: any }) => {
  return (
    <S.Container>
      {data.categories.map((i: number) => {
        return <S.Categories key={i}>{i}</S.Categories>;
      })}
    </S.Container>
  );
};

export default Category;
