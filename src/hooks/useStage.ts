import { useState, useEffect } from 'react';

import { createStage } from '../helpers';

import type { STAGECELL, STAGE } from './../components/Stage';
import type { Player } from './usePlayer';

export const useStage = (player: Player, resetPlayer: () => void) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    if (!player.pos) return;

    setRowsCleared(0);

    const sweepRows = (newStage: STAGE): STAGE => {
      return newStage.reduce((acc, row) => {
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleared((prev) => prev + 1);
          acc.unshift(
            new Array(createStage()[0].length).fill([0, 'clear']) as STAGECELL[]
          );
          return acc;
        }
        acc.push(row);
        return acc;
      }, [] as STAGE);
    };

    const updateStage = (prevStage: STAGE): STAGE => {
      const newStage = prevStage.map(
        (row) =>
          row.map((cell) =>
            cell[1] === 'clear' ? [0, 'clear'] : cell
          ) as STAGECELL[]
      );

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[player.pos.y + y][player.pos.x + x] = [
              // @ts-ignore
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });

      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    };
    setStage((prev) => updateStage(prev));
  }, [player.collided, player.tetromino, player.pos?.x, player.pos?.y]);
  return { stage, setStage, rowsCleared };
};
