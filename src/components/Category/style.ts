import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
const slider = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;
export const Container = styled.div`
  width: 25rem;
  height: 1.875rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  white-space: nowrap;
  animation: ${slider} 60s linear infinite;
`;

export const Categories = styled.div`
  flex-shrink: 0;
  margin-right: 0.3125rem;
  width: auto;
  background-color: #f1f1f5;
  height: 1.25rem;
  border-radius: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 0.625rem;
  height: 1.875rem;
  color: #999999;
`;
