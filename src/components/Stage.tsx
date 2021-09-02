import Cell from './Cell';
import { StyledStage } from '../styled/stage';
import { TETROMINOS } from '../setup';

export type STAGECELL = [keyof typeof TETROMINOS, string];
export type STAGE = STAGECELL[][];
type Props = { stage: STAGE };

const Stage: React.FC<Props> = ({ stage }) => (
  <StyledStage>
    {stage.map((row) => row.map((cell, i) => <Cell key={i} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
