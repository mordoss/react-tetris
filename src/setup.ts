const STAGE_WIDTH = 12;
const STAGE_HEIGHT = 20;
const ROWPOINTS = [40, 100, 300, 1200];
const COLORS = {
  green: '48, 211, 56',
  blue: '36, 95, 223',
  lightBlue: '135,206,235',
  ocher: '223, 173, 36',
  yellow: '223, 217, 36',
  violet: '132, 61, 198',
  red: '227, 78, 78',
};

const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0' },
  I: {
    shape: [
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
      [0, 'I', 0, 0],
    ],
    color: COLORS.lightBlue,
  },
  J: {
    shape: [
      [0, 'J', 0],
      [0, 'J', 0],
      ['J', 'J', 0],
    ],
    color: COLORS.blue,
  },
  L: {
    shape: [
      [0, 'L', 0],
      [0, 'L', 0],
      [0, 'L', 'L'],
    ],
    color: COLORS.ocher,
  },
  O: {
    shape: [
      ['O', 'O'],
      ['O', 'O'],
    ],
    color: COLORS.yellow,
  },
  S: {
    shape: [
      [0, 'S', 'S'],
      ['S', 'S', 0],
      [0, 0, 0],
    ],
    color: COLORS.green,
  },
  T: {
    shape: [
      [0, 0, 0],
      ['T', 'T', 'T'],
      [0, 'T', 0],
    ],
    color: COLORS.violet,
  },
  Z: {
    shape: [
      ['Z', 'Z', 0],
      [0, 'Z', 'Z'],
      [0, 0, 0],
    ],
    color: COLORS.red,
  },
};

export { TETROMINOS, STAGE_HEIGHT, STAGE_WIDTH, ROWPOINTS };
