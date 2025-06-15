'use client';

import { useEffect, useState } from 'react';

import { fetchDisplayProjects } from 'api/project';
import { MobileCard } from 'components';

import * as S from './style';

import type { DataType } from 'interface';

const Moblie = () => {
  const [projects, setProjects] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetchDisplayProjects();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <S.MobileContainer>
      <S.MobileCardTitle>등록된 프로젝트</S.MobileCardTitle>
      <S.MobileCardWrap>
        {projects.map(data => (
          <MobileCard key={data.id} data={data} />
        ))}
      </S.MobileCardWrap>
    </S.MobileContainer>
  );
};

export default Moblie;
