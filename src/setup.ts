const STAGE_WIDTH = 12;
const STAGE_HEIGHT = 20;
const ROWPOINTS = [40, 100, 300, 1200];
const ROWSPERLEVEL = 10;
const COLORS = {
  green: '112, 162, 136',
  blue: '3, 29, 68',
  lightBlue: '4,57,94',
  ocher: '218, 183, 133',
  yellow: '223, 217, 36',
  violet: '91, 77, 71',
  red: '213, 137, 111',
};

const imagesList = [
  'url("https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg")',
  'url("https://images.dog.ceo/breeds/labrador/n02099712_5844.jpg")',
  'url("https://images.dog.ceo/breeds/labrador/n02099712_7481.jpg")',
  'url("https://images.dog.ceo/breeds/labrador/n02099712_7414.jpg")',
];

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

export {
  TETROMINOS,
  STAGE_HEIGHT,
  STAGE_WIDTH,
  ROWPOINTS,
  ROWSPERLEVEL,
  imagesList,
};
