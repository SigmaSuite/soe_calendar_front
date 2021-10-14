import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  font-size: 62.5%;
}

html{
  background-color: ${({ theme }) => theme.color.uglyGreen};
  scroll-behavior: smooth;
}
body, html{
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5{
  font-family: "monospace"
}
h3{
  font-size: 2rem;
}
`;
export default GlobalStyles;
