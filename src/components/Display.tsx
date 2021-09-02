import { StyledDisplay } from '../styled/display';

type Props = {
  gameOver?: boolean;
  text: string;
};

const Display: React.FC<Props> = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
