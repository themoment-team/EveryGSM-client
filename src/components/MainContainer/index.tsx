'use client';
import styled from '@emotion/styled';
import * as C from 'src/components';
import P from '@/assets/palette';

const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.25rem;
  background-color: ${P.gray4};
`;

const MainContainer = () => {
  return (
    <MainBox>
      <C.Banner />
    </MainBox>
  );
};

export default MainContainer;
