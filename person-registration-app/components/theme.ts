'use client';

import { Roboto } from 'next/font/google';
import { createTheme, PaletteOptions } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export function getTheme() {
  
  const customPallete = {
    primary: {
      main: '#2E7D32',
      light: '#42B148',
      dark: 'rgb(15 75 18)',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f4f7f9',
      paper: '#ffffff',
    },
  }

  const palette: PaletteOptions = customPallete

  return createTheme({
    palette,
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
              },
            }),
        },
      },
      MuiBottomNavigation: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              '& .MuiBottomNavigationAction-root': {
                minWidth: 'unset', // Remove the minimum width
                padding: '8px', // Adjust padding as needed
              },
              '& .MuiBottomNavigationAction-label': {
                fontSize: '12px', // Adjust label font size as needed
                textAlign: 'center',
              },
              '& .MuiSvgIcon-root': {
                width: '18px', // Adjust icon width as needed
                height: '18px', // Adjust icon height as needed
              },
            }),
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          'html, body': {
            width: '100%',
            height: '100%',
          },
          footer: {
            marginTop: 'auto',
            textAlign: 'center',
            display: 'relative',
            bottom: 0,
          },
          body: {
            fontfamily: 'Roboto, sans-serif, Roboto Mono',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
            fontWeight: 400,
            scrollbarWidth: 'thin',
            scrollbarcolor: 'rgb(4 121 0) rgb(226, 225, 225)',
            width: '100%',
            flex: 1,
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 2,
            }),
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'hover', // Remove o sublinhado ao passar o mouse
        },
        styleOverrides: {
          root: {
            color: 'text.secondary', // Define a cor do texto do link
            fontSize: '16px', // Define o tamanho da fonte
            fontWeight: 'bold', // Define o estilo da fonte (negrito)
            '&:hover': {
              color: customPallete.primary.main, // Define a cor do texto ao passar o mouse
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 2,
            }),
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 4,
            }),
        },
      },
    },
  })
}
