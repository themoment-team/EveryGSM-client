import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  width: 100vw;
  height: 7.25rem;
  border: 0.0625rem solid rgba(153, 153, 153, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  /* transition: ease-in-out 0.3s; */
  background-color: ${({ theme: { mode } }) => mode.nav};

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    height: 88px;
  }
`;

export const ItemContainer = styled.div`
  width: 71rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 81%;
  }
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

  @media ((max-width: ${({ theme }) => theme.breakPoint.mobile})) {
    font-size: 24px;
  }

  @media ((max-width: ${({ theme }) => theme.breakPoint.mobile})) {
    font-size: 20px;
  } ;
`;

export const LogoImg = styled.div`
  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 36px;
    height: 36px;
  }
  /* transition: ease-in-out 0.3s; */
  color: ${({ theme: { mode } }) => mode.title};
`;

export const ToggleButton = styled.div`
  width: 4.6875rem;
  height: 2.25rem;
  border-radius: 3.125rem;
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
  cursor: pointer;
  background-color: ${({ theme: { mode } }) => mode.footer};
`;

export const ToggleIcon = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.875rem;
  /* transition: ease-in-out 0.3s; */
  background-color: ${({ theme: { mode } }) => mode.toggle};
`;
