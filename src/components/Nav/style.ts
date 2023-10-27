import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  width: 100vw;
  height: 7.25rem;
  border: 0.0625rem solid rgba(153, 153, 153, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.3s;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    height: 5.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    height: 3.5rem;
  }

  background-color: ${({ theme }) => theme.exception.nav};
`;

export const ItemContainer = styled.div`
  width: 71.85rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: calc(76vw + 1.75rem);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: end;

  @media (max-width: 620px) {
    align-items: center;

    svg {
      width: 2.25rem;
      height: 2.25rem;
    }
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 2.0625rem;
  letter-spacing: -0.03em;
  color: ${({ isDark }: { isDark: boolean }) => isDark && '#ffffff'};

  @media ((max-width: ${({ theme }) => theme.breakPoint.tablet})) {
    font-size: 1.5rem;
  }

  @media ((max-width: ${({ theme }) => theme.breakPoint.mobile})) {
    font-size: 1.25rem;
    margin-top: 0;
  }
`;

export const LogoImg = styled.div`
  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  transition: ease-in-out 0.3s;
  color: ${({ theme }) => theme.exception.navTitle};
`;

export const ToggleButton = styled.div`
  width: 4.6875rem;
  height: 2.25rem;
  border-radius: 3.125rem;
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
  cursor: pointer;

  @media ((max-width: ${({ theme }) => theme.breakPoint.tablet})) {
    width: 4.125rem;
    height: 2rem;
  }

  @media ((max-width: ${({ theme }) => theme.breakPoint.mobile})) {
    width: 3.625rem;
    height: 1.75rem;
  }

  background-color: ${({ theme: { gray } }) => gray[1]};
`;

export const ToggleIcon = styled.div<{ isDark: boolean }>`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.875rem;
  transition: ease-in-out 0.3s;
  background-color: ${({ theme }) => theme.exception.toggle};

  translate: ${({ isDark }) => (isDark ? '2.4375rem' : '0')};

  @media ((max-width: ${({ theme }) => theme.breakPoint.tablet})) {
    translate: ${({ isDark }) => isDark && '2.125rem'};
    width: 1.5rem;
    height: 1.5rem;
  }

  @media ((max-width: ${({ theme }) => theme.breakPoint.mobile})) {
    translate: ${({ isDark }) => isDark && '1.75rem'};
    width: 1.375rem;
    height: 1.375rem;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LogoContainer = styled.div`
  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 2.25rem;
    height: 2.25rem;
  }
`;

export const ToggleContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
  }

  object-fit: cover;
  background-color: ${({ theme }) => theme.gray[1]};

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    width: 1.0313rem;
    height: 1.0313rem;
  }
`;
