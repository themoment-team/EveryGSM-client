'use client';

import { Vector } from 'assets';

import * as S from './style';

interface Props {
  direction: 'left' | 'right';
  onClick: () => void;
  view: 'PC' | 'TABLET';
}

const SlideController: React.FC<Props> = ({ direction, onClick, view }) => {
  const Controller = direction === 'left' ? S.PrevController : S.NextController;

  return (
    <Controller type="button" onClick={onClick} view={view}>
      <Vector />
    </Controller>
  );
};

export default SlideController;