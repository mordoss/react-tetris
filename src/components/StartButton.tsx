import { StyledStartButton } from '../styled/startButton';

type Props = {
  callback: () => void;
};

const StartButton: React.FC<Props> = ({ callback }) => (
  <StyledStartButton onClick={callback}>Početak</StyledStartButton>
);

export default StartButton;
