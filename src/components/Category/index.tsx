'use client';

import * as S from './style';

const Category = ({ data, isDark }: { data: any; isDark: boolean }) => {
  return <S.Categories isDark={isDark}>#{data}</S.Categories>;
};

export default Category;
