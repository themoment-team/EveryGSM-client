import styled from '@emotion/styled';
import Image from 'next/image';

export const Card = styled.div`
  height: 340px;
  width: 360px;
  background-color: #ffffff;
  display: flex;
  border-radius: 16px;
  box-shadow: rgba(112, 144, 176, 0.2);
  margin-top: 92px;
  margin-right: 28px;
`;

export const Logo = styled.img`
  height: 72px;
  width: 72px;
  background-color: lightgray;
  border-radius: 100%;
  margin-top: 28px;
  margin-left: 32px;
`;

export const Desc = styled.div`
  width: 100px;
  height: 21px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #999999;
  font-size: 18px;
  font-weight: 200;
  font-size: 18px;
  position: absolute;
  margin-left: 220px;
  margin-top: 30px;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-left: 32px;
  margin-top: 16px;
`;

export const Create = styled.div`
  display: flex;
  align-items: center;
  width: 145px;
  height: 24px;
  margin-left: 32px;
  margin-top: 24px;
`;

export const Creater = styled.div`
  color: #999999;
  font-size: 20px;
  font-weight: 600;
`;

export const Categories = styled.div`
  position: absolute;
  width: 302px;
  height: 28px;
  margin-top: 200px;
`;
