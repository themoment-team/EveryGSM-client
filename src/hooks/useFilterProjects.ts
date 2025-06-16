'use client';

import { useEffect, useState } from 'react';

import { useSearchState } from 'stores';
import { useDisplayProjectStore } from 'stores/useDisplayProjectStore';

import type { DataType } from 'interface';

const useFilterProjects = () => {
  const { searchKeyword } = useSearchState();

  const { projects, loading } = useDisplayProjectStore();
  const [filteredProjects, setFilteredProjects] = useState<DataType[]>([]);

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
  }, [searchKeyword, loading]);

  return filteredProjects;
};

export default useFilterProjects;
