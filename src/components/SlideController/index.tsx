'use client';

import { Vector } from 'assets';

import * as S from './style';

import type { Direction } from 'utils';
import type { Device } from 'utils';

interface Props {
  direction: Direction;
  onClick: () => void;
  view: Device;
}

const ControllerType = {
  left: S.PrevController,
  right: S.NextController,
} as const;

const SlideController: React.FC<Props> = ({ direction, onClick, view }) => {
  const Controller = ControllerType[direction];

  return (
    <Controller type="button" onClick={onClick} view={view}>
      <Vector />
    </Controller>
  );
};

export default SlideController;
