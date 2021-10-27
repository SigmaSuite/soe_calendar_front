import { createGlobalStyle } from 'styled-components';
import { fontSize } from './theme';

const GlobalStyles = createGlobalStyle`
:root {
  font-size: 62.5%;
}

html{
  background-color: ${({ theme }) => theme.color.uglyGreen};
  scroll-behavior: smooth;
}
body, html, #__next{
  margin: 0;
  padding: 0;
  height: 100%;
}
h3{
  font-size: ${fontSize.huge}
}

`;
export default GlobalStyles;
