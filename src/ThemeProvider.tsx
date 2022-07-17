import React from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const theme = createTheme({});

const ThemeProvider = ({ children }: React.PropsWithChildren<{}>) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export { ThemeProvider };
