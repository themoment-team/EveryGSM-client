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
`;
export const ModalContent = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  width: 520px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  height: 800px;
`;

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 32px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  margin-top: 30px;
`;
export const Creater = styled.span`
  font-size: 18px;
  font-weight: bolder;
  background-image: linear-gradient(94.02deg, #e23c96 5.03%, #ffe870 117.47%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-top: 21px;
`;

export const Desc = styled.div`
  width: 408px;
  height: 204px;
  background-color: #f1f1f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 300;
`;
export const Profile = styled.div`
  display: flex;
  margin-top: 44px;
  width: 411px;
`;
export const ProfileImg = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
export const ProjectName = styled.div`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
export const GithubBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 411px;
`;

export const Img = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: lightgray;
  margin-top: 44px;
`;

export const Repo = styled.div`
  margin: 5px 0px;
  display: flex;
  align-items: center;
  width: 412px;
  height: 40px;
  border: 1px solid #999999;
  border-radius: 10px;
  padding-left: 10px;
`;

export const Categories = styled.div`
  z-index: 10000000000000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 407px;
  margin: 24px 0px;
`;

export const Back = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 1000000000000;
  cursor: pointer;
`;
