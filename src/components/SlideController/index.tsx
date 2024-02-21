'use client';

import { Vector } from 'assets';

import * as S from './style';

interface Props {
  direction: 'left' | 'right';
  onClick: () => void;
}

const SlideController: React.FC<Props> = ({ direction, onClick }) => {
  const Controller = direction === 'left' ? S.PrevController : S.NextController;

  return (
    <Controller type="button" onClick={onClick}>
      <Vector />
    </Controller>
  );
};

export default SlideController;
