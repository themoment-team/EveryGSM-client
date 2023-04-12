'use client';
import * as S from './style';
import React, { useEffect, useState } from 'react';
const Category = ({ data }: { data: any }) => {
  console.log(data);
  const arr = [...data];
  return <S.Container>{arr[0]}</S.Container>;
};

export default Category;
