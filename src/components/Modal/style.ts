import styled from '@emotion/styled';
import Link from 'next/link';

export const Categories = styled.div`
  margin: 1.5rem 0 2.5rem 0;
  height: 1.875rem;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 65vw;
    margin-top: 0.5rem;
    position: relative;
    flex-flow: row wrap;
  }
`;

export const Slide = styled.div`
  width: 25rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  flex-flow: row wrap;
  gap: 0.625rem 0;

  @media (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 65vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalContainer = styled.div<{ show: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: default;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const ModalContent = styled.div`
  border-radius: 0.3125rem;
  padding: 1.25rem;
  width: 32.5rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  height: 50rem;
  background-color: ${({ theme }) => theme.exception.nav};

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 80vw;
    height: fit-content;
    padding-top: 2rem;
  }
`;

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.5625rem;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ theme }) => theme.exception.modalTitle};
  margin-top: 1.875rem;
  color: ${({ isDark }: { isDark: boolean }) =>
    isDark ? '#ffffff' : '#000000'};

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 5vw;
    margin-top: 0.9375rem;
  }
`;

export const Creater = styled.span`
  font-size: 1.125rem;
  font-weight: bolder;
  background-image: linear-gradient(94.02deg, #e23c96 5.03%, #ffe870 117.47%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-top: 1.3125rem;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 3vw;
    margin-top: 0.5rem;
  }
`;

export const Desc = styled.div<{ isDark: boolean }>`
  width: 25.5rem;
  height: 12.75rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: ${({ theme }) => theme.exception.desc};
  background-color: ${({ theme }) => theme.exception.back};
  margin-bottom: 1.4375rem;
  padding: 0 1.5625rem;
  text-align: left;
  font-size: 1.125rem;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 65vw;
    height: 6rem;
    overflow-y: auto;
    font-size: 3vw;
  }
`;

export const Profile = styled.div`
  display: flex;

  width: 25.6875rem;
  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 65vw;
  }
`;

export const ProfileImg = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.625rem;
  position: relative;
  overflow: hidden;
`;

export const ProjectName = styled.div`
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5625rem;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  color: ${({ theme }) => theme.exception.teamTitle};

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 3.7vw;
  }
`;

export const GithubBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25.6875rem;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    display: flex;
    align-items: center;
    height: 20%;
    overflow-y: scroll;
  }
`;

export const Img = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  margin-top: 2.75rem;
  position: relative;

  img {
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    margin: 0;
    width: 4rem;
    height: 4rem;
  }
`;

export const Repo = styled(Link)<{ isDark: boolean }>`
  margin: 0.3125rem 0rem;
  display: flex;
  align-items: center;
  width: 25.75rem;
  height: 2.5rem;
  border: 0.0625rem solid #999999;
  border-radius: 0.625rem;
  padding-left: 0.625rem;
  transition: ease-in-out 0.1s;
  text-align: left;
  color: #999999;

  &:hover {
    box-shadow: 0rem 0rem 0.1875rem 0.0625rem #f2f2f2;
    border-color: #6e6e6e;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobile}) {
    text-align: center;
    display: flex;
    justify-content: center;
    width: 65vw;
    height: 5vh;
    font-size: 3.2vw;
    padding: 0.1875rem 0 0.25rem;
  }
`;

export const Back = styled.div`
  position: absolute;
  right: 1.25rem;
  top: 1.25rem;
  z-index: 2;
  cursor: pointer;
`;
