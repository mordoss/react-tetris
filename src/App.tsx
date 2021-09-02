import { useState, useRef } from 'react';

import Display from './components/Display';
import Stage from './components/Stage';
import StartButton from './components/StartButton';

import { createStage } from './helpers';
import { useInterval } from './hooks/useInterval';
import { usePlayer } from './hooks/usePlayer';
import { useStage } from './hooks/useStage';
import { StyledTetrisWrapper, StyledTetris } from './styled/wrappers';

const App: React.FC = () => {
  const [dropTime, setDropTime] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(true);

  const { player, updatePlayer, resetPlayer } = usePlayer();
  const { stage, setStage } = useStage(player, resetPlayer);

  const gameArea = useRef<HTMLDivElement>(null);

  const movePlayer = (dir: number) => {
    updatePlayer({ x: dir, y: 0, collided: false });
  };

  const move = ({
    keyCode,
    repeat,
  }: {
    keyCode: number;
    repeat: boolean;
  }): void => {
    if (keyCode === 37) {
      movePlayer(-1);
    } else if (keyCode === 39) {
      movePlayer(1);
    } else if (keyCode === 40) {
      if (repeat) {
        return;
      }
      setDropTime(30);
    }
  };

  const keyUp = ({ keyCode }: { keyCode: number }): void => {
    if (keyCode === 40) {
      setDropTime(1000);
    }
  };

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex={0}
      onKeyDown={move}
      onKeyUp={keyUp}
      ref={gameArea}
    >
      <StyledTetris>
        {
          <div className="display">
            {gameOver ? (
              <>
                <Display text="Game Over" gameOver={gameOver} />
                <StartButton callback={() => null} />
              </>
            ) : (
              <>
                <Display text={`Score: `} />
                <Display text={`Rows: `} />
                <Display text={`Level: `} />
              </>
            )}
          </div>
        }
        <Stage stage={createStage()} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
