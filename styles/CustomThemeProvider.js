import React from 'react';
import { ThemeProvider } from 'styled-components';

export default function CustomThemeProvider({ children, theme }) {
  return <ThemeProvider theme={{ ...theme }}>{children}</ThemeProvider>;
}
