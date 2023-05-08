'use client';

import { Preparing } from 'components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function preparing() {
  const { replace } = useRouter();

  useEffect(() => {
    window.innerWidth > 1300 && replace('/');
    window.onresize = () => {
      window.innerWidth > 1300 && replace('/');
    };
  }, []);

  return <Preparing />;
}
