import styled from '@emotion/styled';
import Image from 'next/image';
export const Container = styled.div`
  display: flex;
  width: 79.0625rem;
  justify-content: center;
  align-items: center;
`;

export const SlideBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Cards = styled.div`
  width: 71.25rem;
  height: 21.5625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
export const Card = styled.div`
  height: 21.25rem;
  width: 22.5rem;
  background-color: #ffffff;
  display: flex;
  border-radius: 1rem;
  box-shadow: rgba(112, 144, 176, 0.2);
  flex-direction: column;
  float: left;

  &:nth-child(3n + 3) {
    margin-right: 1.5625rem;
  }
`;
// export const Card = styled.div<{ isFlip: boolean }>`
//   height: 21.25rem;
//   width: 21.875rem;
//   background-color: #ffffff;
//   display: flex;
//   border-radius: 1rem;
//   box-shadow: rgba(112, 144, 176, 0.2);
//   margin-right: 1.875rem;
//   flex-direction: column;
//   float: left;
//   transform-style: preserve-3d;
//   transition: 0.5s;
//   transform: ${props => (props.isFlip ? 'rotateX(-180deg)' : 'rotateY(0deg)')};
// `;
export const SlideBox = styled.div``;
export const Desc = styled.div`
  color: #999999;
  font-size: 1.125rem;
  font-weight: 200;
  font-size: 1.125rem;
  display: flex;
  justify-content: left;
  margin-top: 1.875rem;
  width: 100%;
  margin-left: 2rem;
`;
export const DetailBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10000000;
  position: absolute;
  left: 18.125rem;
`;
export const CardContents = styled.div`
  width: 18.875rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 0.625rem;
`;
export const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
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
//   border-radius: 1rem;
//   transform: rotateX(-180deg);
//   text-align: center;
// `;

export const Logo = styled.div`
  height: 4.5rem;
  width: 4.5rem;
  position: relative;
  border-radius: 100%;
`;

export const Title = styled.div`
  color: black;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 1rem;
`;

export const Create = styled.div`
  display: flex;
  align-items: center;
  width: 9.0625rem;
  height: 1.5rem;
  margin-top: 1.5rem;
`;

export const Creater = styled.div`
  color: #999999;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const Categories = styled.div`
  overflow: scroll;
  margin-top: 3.75rem;
  height: 1.875rem;
`;

export const Description = styled.div`
  font-size: 1.375rem;
  margin-top: 1.5rem;
`;
