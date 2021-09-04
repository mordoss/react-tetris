import { useState, useCallback } from 'react';
import { STAGE } from '../components/Stage';
import { isColliding, randomTetromino } from '../helpers';
import { STAGE_WIDTH } from '../setup';

export type Player = {
  pos: {
    x: number;
    y: number;
  };
  tetromino: (string | number)[][];
  collided: boolean;
};

export const usePlayer = () => {
  const [player, setPlayer] = useState({} as Player);

  const rotate = (matrix: Player['tetromino']): Player['tetromino'] => {
    const matrixColumnsAsRows = matrix.map((_, i) =>
      matrix.map((column) => column[i])
    );
    return matrixColumnsAsRows.map((row) => row.reverse());
  };

  const playerRotate = (stage: STAGE): void => {
    // try with spread instead parse
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino);

    // somtehing doesn't work here
    const { x: posX } = clonedPlayer.pos;
    let offset = 1;
    while (isColliding(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.posX += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        clonedPlayer.pos.x = posX;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  const updatePlayer = ({
    x,
    y,
    collided,
  }: {
    x: number;
    y: number;
    collided: boolean;
  }): void => {
    setPlayer((prevState) => ({
      ...prevState,
      pos: {
        x: (prevState.pos.x += x),
        y: (prevState.pos.y += y),
      },
      collided,
    }));
  };

  const resetPlayer = useCallback((): void => {
    setPlayer({
      pos: {
        x: STAGE_WIDTH / 2 - 2,
        y: 0,
      },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return { player, updatePlayer, resetPlayer, playerRotate };
};
