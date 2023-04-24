'use client';

import { Preparing } from 'components';
import { useEffect } from 'react';

export default function preparing() {
  useEffect(() => {
    window.innerWidth > 1300 && (window.location.href = '/');
    window.onresize = () => {
      window.innerWidth > 1300 && (window.location.href = '/');
    };
  }, []);

  return <Preparing />;
}
