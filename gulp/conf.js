import WEBPACK from "webpack";

export const DIR = {
  PATH: '/',
  SRC: 'src',
  DST: 'dst',
  BUILD: 'public',
  IMG: 'images'
};

export const isProduction = process.env.NODE_ENV === 'production';

export const AUTOPREFIXER = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.1',
  'bb >= 7'
];

export const sass = {
  src: [
    `${DIR.SRC}/**/*.{scss,sass}`
  ],
  dst: `${DIR.DST}${DIR.PATH}/css`
};

export const html = {
  src: [
    `${DIR.SRC}/html/*.html`
  ],
  dst: `${DIR.DST}/`
};

export const serve = {
  open: 'external',
  reloadDebounce: 2000,
  ui: false,
  notify: false,
  startPath: DIR.PATH,
  ghostMode: false,
  server: {
    baseDir: './',
    index: `${DIR.DST}${DIR.PATH}/`,
    routes: {
      [DIR.PATH]: `${DIR.DST}${DIR.PATH}/`
    }
  }
};

export const clean = {
  path: [
    `${DIR.BUILD}`
  ]
};

export const imagemin = {
  src: [`${DIR.SRC}/${DIR.IMG}/**`],
  dst: `${DIR.BUILD}${DIR.PATH}/${DIR.IMG}`,
  opts: {
    //options
  }
};

export const copy = {
  img: {
    src: [`${DIR.SRC}/${DIR.IMG}/**`],
    dst: `${DIR.DST}${DIR.PATH}${DIR.IMG}`
  },
  build: {
    src: [
      `${DIR.DST}/**`,
      `!${DIR.DST}/js/**`,
      `!${DIR.DST}/${DIR.IMG}`,
      `!${DIR.DST}/${DIR.IMG}/**`
    ],
    dst: `${DIR.BUILD}${DIR.PATH}`
  }
};
