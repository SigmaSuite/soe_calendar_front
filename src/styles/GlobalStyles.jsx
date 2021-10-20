import { createGlobalStyle } from 'styled-components';

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


`;
export default GlobalStyles;
