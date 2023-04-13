'use client';
import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  width: 100vw;
  height: 7.25rem;
  border: 0.0625rem solid rgba(153, 153, 153, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and ((max-width: 720px)) {
    background-color: #f1f1f5;
    border: none;
    height: 17vw;
  }
`;

export const IconContainer = styled.div`
  width: 71rem;
  display: flex;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 2.0625rem;
  letter-spacing: -0.03em;
  margin-top: 0.6875rem;

  @media screen and (max-width: 600px) {
    margin-top: 0.6rem;

    font-size: 5vw;
  }
`;

export const LogoImg = styled.div`
  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  @media screen and (max-width: 500px) {
    width: 10vw;
    height: 10vw;
  }
`;
