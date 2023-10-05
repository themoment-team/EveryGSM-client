'use client';

import * as S from './style';

interface CardProps {
  category: string;
  isDark: boolean;
}

const Category: React.FC<CardProps> = ({ category, isDark }) => <S.Categories isDark={isDark}>#{category}</S.Categories>;

export default Category;
