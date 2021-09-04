import { STAGE_WIDTH, STAGE_HEIGHT, TETROMINOS } from './setup';

import type { Player } from './hooks/usePlayer';
import type { STAGE } from './components/Stage';

// check for array.from alternative
const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, 'clear']));

const randomTetromino = () => {
  const tetrominos = [
    'I',
    'J',
    'L',
    'O',
    'S',
    'T',
    'Z',
  ] as (keyof typeof TETROMINOS)[];
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};

const isColliding = (
  player: Player,
  stage: STAGE,
  { x: moveX, y: moveY }: { x: number; y: number }
) => {
  // try refactore with array some?
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      if (player.tetromino[y][x] !== 0) {
        if (
          !stage[player.pos.y + moveY + y] ||
          !stage[player.pos.y + moveY + y][player.pos.x + moveX + x] ||
          stage[player.pos.y + moveY + y][player.pos.x + moveX + x][1] !==
            'clear'
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

export { createStage, randomTetromino, isColliding };
