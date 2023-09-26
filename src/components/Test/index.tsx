/** @jsxImportSource @emotion/react */
'use client';
import { css } from '@emotion/react';

import styled from '@emotion/styled';

const H1 = styled.h1`
  font-size: 100px;
`;

const A = () => {
  return (
    <H1
      css={css`
        color: red;
      `}
    >
      안녕
    </H1>
  );
};

export default A;
