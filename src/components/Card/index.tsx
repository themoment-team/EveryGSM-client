'use client';
import * as S from './style';
import * as I from '@/assets/imgs';
import Image from 'next/image';
import projectData from 'src/interface/projectData';
import React, { useEffect, useState } from 'react';

const Card = ({ data }: { data: any }) => {
  const [projectList, setProjectList] = useState<projectData[]>(data);
  return (
    <div style={{ display: 'flex' }}>
      {projectList.map((data, i) => (
        <S.Card key={i}>
          <S.Desc>
            <span>상세보기</span>
            <Image
              src={I.Vector}
              style={{
                width: '25px',
                height: '24px',
                transform: 'rotateY(180deg)',
              }}
              alt="Vector"
            />
          </S.Desc>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <S.Logo></S.Logo>
            <S.Title>{data.projectName}</S.Title>
            <S.Create style={{ display: 'flex' }}>
              <Image
                src={I.Person}
                style={{
                  width: '25px',
                  height: '24px',
                  marginRight: '13px',
                }}
                alt="Person"
              />
              <S.Creater>{data.createrName}</S.Creater>
            </S.Create>
          </div>
        </S.Card>
      ))}
    </div>
  );
};

export default Card;
