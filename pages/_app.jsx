/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import '98.css';
import CustomThemeProvider from '../src/styles/CustomThemeProvider';
import theme from '../src/styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <CustomThemeProvider theme={theme}>
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}
