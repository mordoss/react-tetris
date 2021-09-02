import { STAGE_WIDTH, STAGE_HEIGHT, TETROMINOS } from './setup';

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

export { createStage, randomTetromino };
