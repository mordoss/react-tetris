import { StyledStartButton } from '../styled/startButton';

type Props = {
  callback: () => void;
};

const StartButton: React.FC<Props> = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start</StyledStartButton>
);

export default StartButton;
