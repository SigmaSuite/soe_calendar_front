import React from 'react';

import '98.css';
import CustomThemeProvider from '../styles/CustomThemeProvider';
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <CustomThemeProvider theme={theme}>
      <Component {...pageProps}></Component>
    </CustomThemeProvider>
  );
}
