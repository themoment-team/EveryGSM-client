'use client';

import { useEffect, useState } from 'react';

import { fetchDisplayProjects } from 'api/project';
import { useSearchState } from 'stores';

import type { DataType } from 'interface';

const useFilterProjects = () => {
  const { searchKeyword } = useSearchState();

  const [projects, setProjects] = useState<DataType[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<DataType[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await fetchDisplayProjects();
      setProjects(data);
      setFilteredProjects(data);
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    setFilteredProjects(
      projects.filter(data => {
        const values = Object.values(data).flatMap(value => {
          if (typeof value === 'object' && value !== null) {
            return Object.values(value);
          }
          return value;
        });

        return values.some(value =>
          value.toLocaleLowerCase().includes(searchKeyword.toLocaleLowerCase()),
        );
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKeyword]);

  return filteredProjects;
};

export default useFilterProjects;
