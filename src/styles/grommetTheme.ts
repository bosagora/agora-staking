import { styledComponentsTheme } from './styledComponentsTheme';

const { blue, transparent, gray, red, green, yellow } = styledComponentsTheme;

export const grommetTheme = {
  global: {
    focus: {
      border: {
        color: transparent,
      },
      outline: 'none',
    },
    colors: {
      brand: blue.dark, // needed to override default grommet component styling
      border: gray.light,

      blueLight: blue.light,
      blueMedium: blue.medium,
      blueDark: blue.dark,

      greenLight: green.light,
      greenMedium: green.medium,
      greenDark: green.dark,

      redLightest: red.lightest,
      redLight: red.light,
      redMedium: red.medium,

      grayLight: gray.light,
      grayMedium: gray.medium,
      grayDark: gray.dark,

      yellowDark: yellow.dark,
    },
    font: {
      family: 'Noto Sans',
    },
  },
  button: {
    border: {
      radius: '2px',
      color: blue.medium,
    },
    padding: {
      vertical: '12px',
      horizontal: '24px',
    },
    primary: {
      color: blue.medium,
    },
    extend: `
      font-size: 12px;
      font-weight: bold;
     `,
  },
  checkBox: {
    border: {
      color: '#275ada',
      radius: '2px',
    },
    check: {
      extend: ({ checked }: { checked: boolean }) =>
        `background-color: white; 
         border: 2px solid ${checked ? '#275ada' : '#275ada'}`,
    },
    color: {
      light: 'neutral-3',
      dark: 'neutral-3',
    },
    gap: 'xsmall',
    hover: {
      border: {
        color: '#275ada',
      },
    },
    icon: {
      size: '18px',
      extend: 'stroke: #275ada;',
    },
    size: '18px',
    // label color
    extend: `
      color: #275ada;
    `,
  },
};
