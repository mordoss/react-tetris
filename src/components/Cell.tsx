import { memo } from 'react';
import { TETROMINOS } from '../setup';
import { StyledCell } from '../styled/cell';

type Props = {
  type: keyof typeof TETROMINOS;
};

const Cell: React.FC<Props> = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default memo(Cell);
