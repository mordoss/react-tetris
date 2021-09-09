import { useState, useRef } from 'react';

import Display from './components/Display';
import Leaderboard from './components/Leaderboard';
import ScorePrompt from './components/ScorePrompt';
import Stage from './components/Stage';
import StartButton from './components/StartButton';

import { createStage, isColliding } from './helpers';
import { useGameStatus } from './hooks/useGameStatus';
import { useInterval } from './hooks/useInterval';
import { usePlayer } from './hooks/usePlayer';
import { useStage } from './hooks/useStage';
import { ROWSPERLEVEL } from './setup';
import { StyledTetrisWrapper, StyledTetris } from './styled/wrappers';

const App: React.FC = () => {
  const [dropTime, setDropTime] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(true);

  const { player, updatePlayer, resetPlayer, playerRotate } = usePlayer();
  const { stage, setStage, rowsCleared } = useStage(player, resetPlayer);
  const { score, level, rows, setScore, setLevel, setRows } =
    useGameStatus(rowsCleared);

  const gameArea = useRef<HTMLDivElement>(null);

  const handleStartGame = (): void => {
    if (gameArea.current) gameArea.current.focus();

    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setRows(0);
    setLevel(1);
    setGameOver(false);
  };

  const movePlayer = (dir: number) => {
    if (!isColliding(player, stage, { x: dir, y: 0 })) {
      updatePlayer({ x: dir, y: 0, collided: false });
    }
  };

  const move = ({
    keyCode,
    repeat,
  }: {
    keyCode: number;
    repeat: boolean;
  }): void => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 38) {
        playerRotate(stage);
      } else if (keyCode === 40) {
        if (repeat) {
          return;
        }
        setDropTime(30);
      }
    }
  };

  const keyUp = ({ keyCode }: { keyCode: number }): void => {
    if (keyCode === 40 && !gameOver) {
      setDropTime(1000);
    }
  };

  const drop = (): void => {
    if (rows > level * ROWSPERLEVEL) {
      setLevel((prev) => prev + 1);
      setDropTime(1000 / level + 200);
    }

    if (!isColliding(player, stage, { x: 0, y: 1 })) {
      updatePlayer({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayer({ x: 0, y: 0, collided: true });
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex={0}
      onKeyDown={move}
      onKeyUp={keyUp}
      ref={gameArea}
    >
      <StyledTetris>
        <Leaderboard />
        {
          <div className="display">
            {gameOver ? (
              <>
                <ScorePrompt score={score} />
                <Display text="Kraj" gameOver={gameOver} />
                <StartButton callback={handleStartGame} />
              </>
            ) : (
              <>
                <Display text={`Rezultat: ${score}`} />
                <Display text={`Redova: ${rows}`} />
                <Display text={`Nivo: ${level}`} />
              </>
            )}
          </div>
        }
        <Stage stage={stage} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default App;
