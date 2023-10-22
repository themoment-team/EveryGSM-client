import { useEffect } from 'react';

import { useWidthState } from 'stores';

const useWindowResizeEffect = () => {
  const { setWidth } = useWidthState();

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useWindowResizeEffect;
