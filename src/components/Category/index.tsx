'use client';

import * as S from './style';

interface CardProps {
  data: any;
  isDark: boolean;
}

const Category: React.FC<CardProps> = ({ data, isDark }) => {
  return <S.Categories isDark={isDark}>#{data}</S.Categories>;
};

export default Category;
