export const fontFamily = {
  main: 'Monospace',
};

export const fontWeight = {
  xBold: 900,
  bolder: 800,
  bold: 700,
  medium: 600,
  light: 500,
  lighter: 400,
};

export const fontSize = {
  huge: '2.5rem',
  xLarge: '2rem',
  large: '1.8rem',
  medium: '1.2rem',
  small: '1rem',
};

export const color = {
  navyDark: '#0B0C10',
  kindaGrey: '#1F2833',
  lightGrey: '#C5C6C7',
  lightCyan: '#66FCF1',
  darkCyan: '#45A29E',
  uglyGreen: '#008081',
  silver: 'silver',
};
export const background = {
  properBlue: 'linear-gradient(90deg,navy,#1084d0)',
  properBlueSkewed: 'linear-gradient(45deg,#1212a4,#1084d0)',
  error: 'linear-gradient(90deg,#e60a29,#6b6c6c)',
  errorSkewed: 'linear-gradient(45deg,#e60a29,#6b6c6c)',
};

const theme = {
  fontWeight,
  fontSize,
  fontFamily,
  color,
  background,
};

export default theme;
