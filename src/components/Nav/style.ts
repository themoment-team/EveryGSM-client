'use client';
import styled from '@emotion/styled';
import theme from 'assets/palette';

export const NavContainer = styled.nav`
  width: 100vw;
  height: 116px;
  border: 1px solid rgba(153, 153, 153, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ItemContainer = styled.div`
  width: 1136px;
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
  font-size: 28px;
  line-height: 33px;
  letter-spacing: -0.03em;
  margin-top: 11px;
`;

export const ToggleButton = styled.div`
  width: 75px;
  height: 36px;
  background-color: ${theme.color.gray[1]};
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 0 4px;
  cursor: pointer;
`;

export const ToggleIcon = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 14px;
`;
