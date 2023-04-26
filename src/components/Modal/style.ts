'use client';
import styled from '@emotion/styled';

export const ModalContainer = styled.div<{ show: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999999999;
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
  background-color: ${({ isDark }: { isDark: boolean }) =>
    isDark ? '#191919' : '#FFFFFF'};
`;

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.5625rem;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 1.875rem;
  color: ${({ isDark }: { isDark: boolean }) =>
    isDark ? '#ffffff' : '#000000'};
`;

export const Creater = styled.span`
  font-size: 1.125rem;
  font-weight: bolder;
  background-image: linear-gradient(94.02deg, #e23c96 5.03%, #ffe870 117.47%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-top: 1.3125rem;
`;

export const Desc = styled.div`
  width: 25.5rem;
  height: 12.75rem;
  background-color: ${({ isDark }: { isDark: boolean }) =>
    isDark ? '#636363' : '#f1f1f5'};
  color: ${({ isDark }: { isDark: boolean }) =>
    isDark ? '#f1f1f5' : '#636363'};
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
`;

export const Profile = styled.div`
  display: flex;
  margin-top: 2.75rem;
  width: 25.6875rem;
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
`;

export const ProjectName = styled.div`
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5625rem;
  letter-spacing: 0em;
  text-align: left;
  color: ${({ isDark }: { isDark: boolean }) =>
    isDark ? '#f1f1f5' : '#000000'};
`;

export const GithubBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25.6875rem;
`;

export const Img = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  background-color: lightgray;
  margin-top: 2.75rem;
`;

export const Repo = styled.div`
  margin: 0.3125rem 0rem;
  display: flex;
  align-items: center;
  width: 25.75rem;
  height: 2.5rem;
  border: 0.0625rem solid #999999;
  border-radius: 0.625rem;
  padding-left: 0.625rem;
  transition: ease-in-out 0.1s;
  &:hover {
    box-shadow: 0rem 0rem 0.1875rem 0.0625rem #f2f2f2;
    border-color: #6e6e6e;
  }
`;

export const Categories = styled.div`
  z-index: 10000000000000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25.4375rem;
  margin: 1.5rem 0rem;
  position: relative;
  overflow: scroll;
`;

export const Back = styled.div`
  position: absolute;
  right: 1.25rem;
  top: 1.25rem;
  z-index: 1000000000000;
  cursor: pointer;
`;
