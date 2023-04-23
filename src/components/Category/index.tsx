'use client';
import * as S from './style';
import React, { useState } from 'react';
const Category = ({ data }: { data: any }) => {
  return <S.Categories>{data}</S.Categories>;
};

export default Category;
