import { useState, useCallback } from 'react';
import { randomTetromino } from '../helpers';
import { STAGE_WIDTH } from '../setup';

export type Player = {
  pos: {
    x: number;
    y: number;
  };
  tetramino: (string | number)[][];
  collided: boolean;
};

export const usePlayer = () => {
  const [player, setPlayer] = useState({} as Player);

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
      tetramino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return { player, updatePlayer, resetPlayer };
};
