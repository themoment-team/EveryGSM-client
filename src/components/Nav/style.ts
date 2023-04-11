'use client';
import styled from '@emotion/styled';
import theme from 'assets/palette';

export const NavContainer = styled.nav`
  width: 100vw;
  height: 7.25rem;
  border: 0.0625rem solid rgba(153, 153, 153, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.3s;
`;

export const ItemContainer = styled.div`
  width: 71rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 2.0625rem;
  letter-spacing: -0.03em;
  margin-top: 0.6875rem;
  transition: ease-in-out 0.3s;
`;

export const ToggleButton = styled.div`
  width: 4.6875rem;
  height: 2.25rem;
  background-color: ${theme.color.gray[1]};
  border-radius: 3.125rem;
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
  cursor: pointer;
  .dark {
    translate: 2.4375rem;
  }
`;

export const ToggleIcon = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0.875rem;
  transition: ease-in-out 0.3s;
`;
