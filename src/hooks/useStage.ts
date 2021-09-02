import { useState, useEffect } from 'react';

import { createStage } from '../helpers';

import type { STAGECELL, STAGE } from './../components/Stage';
import type { Player } from './usePlayer';

export const useStage = (player: Player, resetplayer: () => void) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    if (!player.pos) return;

    const updateStage = (prevStage: STAGE): STAGE => {
      const newStage = prevStage.map(
        (row) =>
          row.map((cell) =>
            cell[1] === 'clear' ? [0, 'clear'] : cell
          ) as STAGECELL[]
      );

      player.tetramino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[player.pos.y + y][player.pos.x + x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });
      return newStage;
    };
    setStage((prev) => updateStage(prev));
  }, [player.collided, player.tetramino, player.pos?.x, player.pos?.y]);
  return { stage, setStage };
};
