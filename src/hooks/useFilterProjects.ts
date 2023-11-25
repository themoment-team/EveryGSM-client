'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import project from 'constants/project.json';
import { useSearchState } from 'stores';

interface Props {
  setSlideIndex: Dispatch<SetStateAction<number>>;
}

const useFilterProjects = ({ setSlideIndex }: Props) => {
  const { searchKeyword } = useSearchState();

  const [filteredProjects, setFilteredProjects] = useState(project);

  useEffect(() => {
    setFilteredProjects(
      project.filter(data => {
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

    setSlideIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKeyword]);

  return filteredProjects;
};

export default useFilterProjects;
