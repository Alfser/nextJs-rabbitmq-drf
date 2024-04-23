import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from '../../components/theme';

interface RootLayoutProps { 
  children: React.ReactNode 
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={getTheme}>
            <CssBaseline />
            { children }
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}