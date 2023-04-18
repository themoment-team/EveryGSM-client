import styled from '@emotion/styled';
import Image from 'next/image';

export const Card = styled.div`
  height: 340px;
  width: 360px;
  background-color: #ffffff;
  display: flex;
  border-radius: 16px;
  box-shadow: rgba(112, 144, 176, 0.2);
  margin-right: 28px;
  flex-direction: column;
`;
export const Desc = styled.div`
  color: #999999;
  font-size: 18px;
  font-weight: 200;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: left;
  margin-top: 30px;
  width: 100%;
  margin-left: 32px;
`;
export const DetailBtn = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  z-index: 100000000;
`;
export const CardContents = styled.div`
  width: 302px;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 28px;
`;
// export const Front = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   backface-visibility: hidden;
// `;
// export const Back = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   position: absolute;
//   backface-visibility: hidden;
//   background: #ffff;
//   border-radius: 16px;
//   transform: rotateX(-180deg);
//   text-align: center;
// `;

export const Logo = styled.div`
  height: 72px;
  width: 72px;
  position: relative;
  border-radius: 100%;
`;

export const Title = styled.div`
  color: black;
  font-size: 32px;
  font-weight: 600;
  margin-top: 16px;
`;

export const Create = styled.div`
  display: flex;
  align-items: center;
  width: 145px;
  height: 24px;
  margin-top: 24px;
`;

export const Creater = styled.div`
  color: #999999;
  font-size: 20px;
  font-weight: 600;
`;

export const Categories = styled.div`
  margin-top: 60px;
`;

export const Description = styled.div`
  font-size: 22px;
  margin-top: 24px;
`;
