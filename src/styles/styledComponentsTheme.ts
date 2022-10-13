export const colors = {
  transparent: 'transparent',
  white: '#ffffff',
  normalFont: '#666666',
  gray: {
    lightest: '#fdfcfe',
    light: '#F0F4F8',
    medium: '#B6B6B6',
    dark: '#4A4A4A',
    agoraGray: '#777777',
    agoraBorder: '#b5cff1',
    agoraDark: '#313131',
  },
  black: '#000000',
  blue: {
    lightest: '#ccdcec',
    light: '#99b9d8',
    medium: '#6695c5',
    dark: '#3372b1',
    darkest: '#275ada',
    agoraBlue: '#275ada',
    subtext: '#0d276b',
    border: '#3367eb',
    agoraLight: '#bacbff',
    checkBox: '#516aac',
  },
  green: {
    lightest: '#d6f9eb',
    light: '#adf4d8',
    medium: '#84eec4',
    dark: '#5be9b1',
    darkest: '#32e39d',
  },
  red: {
    pure: '#ff0000',
    lightest: '#fbdfe0',
    light: '#f7c0c0',
    medium: '#f3a0a1',
    dark: '#ef8181',
    darkest: '#eb6162',
  },
  orange: '#FFF9F2',
  purple: {
    lightest: '#dbccfc',
    light: '#b899f8',
    medium: '#9466f5',
    dark: '#7133f1',
    darkest: '#4d00ee',
  },
  yellow: {
    lightest: '#ffeecc',
    light: '#ffdd99',
    medium: '#ffcd66',
    dark: '#ffbc33',
    darkest: '#Ffab00',
    agoraYellow: '#fffbe5',
    agoraLight: '#fcdfa2',
    highlight: '#fff606',
  },
  lemon: '#f1cc69',
};

export const backgroundColors = {
  sectionGray: '#e8f2ff',
  sectionLightGray: '#f5f4f6',
};

export const details = {
  borderRadius: '3px',
};

export const rainbowColors = [
  '#fdccd3', // pink
  '#fca09a', // red
  '#ffcc9e', // yellow
  '#98ddad', // green
  '#81d7ec', // blue
  '#91C1ED', // blurple
  '#a0aaed', // purple
];

export const rainbowBGColors = [
  '#fdccd3', // pink
  '#FED4D1', // red
  '#fcead9', // yellow-orange
  '#dcf0df', // green
  '#d3edf6', // blue
  '#baccf2', // blurple
  '#a0aaed', // purple
];

export const rainbowLightColors = [
  '#fef2f4', // pink
  '#fdf8f7', // red
  '#FFF2E6', // yellow-orange
  '#e5f6ea', // green
  '#dff5fa', // blue
  '#E3EFFA', // blurple
  '#e7e9fa', // purple
];

export const rainbow = rainbowColors.join(', ');
export const rainbowLight = rainbowLightColors.join(', ');

export const screenSizes = {
  smaller: '420px',
  small: '576px',
  medium: '768px',
  large: '992px',
  larger: '1200px',
  largest: '1440px',
  huge: '1820px',
};

export const styledComponentsTheme = {
  ...colors,
  screenSizes,
  ...details,
  rainbow,
  rainbowLight,
  rainbowLightColors,
  backgroundColors,
};
