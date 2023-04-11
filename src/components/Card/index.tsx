'use client';
import * as S from './style';
import * as I from '@/assets/imgs';
import Image from 'next/image';
import projectData from 'src/interface/projectData';
import React, { useEffect, useState } from 'react';
interface DataType {
  data: projectData[];
}
const Card = ({ data }: { data: any }) => {
  const [projectList, setProjectList] = useState<projectData[]>(data);
  return (
    <div>
      {projectList.map((data, i) => (
        <div key={i}>{data.projectName}</div>
      ))}
    </div>
  );
};

export default Card;
