/** @jsxImportSource @emotion/react */
'use client';
import * as C from 'components';
import * as S from './style';
import { Vector } from 'assets/imgs';
import Image from 'next/image';
import { css } from '@emotion/react';
import theme from 'styles/theme';

interface Props {
  isDark: boolean;
}

const MainContainer = ({ isDark }: Props) => {
  const dark = theme.dark.dark_div;

  return (
    <S.MainBox
      css={css`
        ${isDark && dark}
      `}
    >
      <C.Banner />
      <S.CardContainer>
        <Image src={Vector} style={{ marginRight: '3.125rem' }} alt="" />
        <S.Cards></S.Cards>
        <Image
          src={Vector}
          alt=""
          style={{
            transform: 'matrix(-1, 0, 0, 1, 0, 0)',
            marginLeft: '3.125rem',
          }}
        />
      </S.CardContainer>
    </S.MainBox>
  );
};

export default MainContainer;
