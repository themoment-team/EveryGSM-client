import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.75rem;
  transition: ease-in-out 0.3s;
  background-color: ${({ theme: { gray } }) => gray[0]};
`;

export const VectorWrapper = styled.div`
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 79.0625rem;
`;

export const Cards = styled.div`
  width: 71.25rem;
  height: 21.5625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
