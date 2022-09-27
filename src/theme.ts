import { PaletteMode, ThemeOptions } from '@mui/material'
import { shadesColor } from './assets/color'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle3: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true
  }
}

export const customTheme: ThemeOptions = {
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',

          '&.Mui-focused': {
            color: '#6F7CF3',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#6F7CF3',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#6F7CF3',
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            fontSize: '0.875rem',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          color: '#fff',
          backgroundColor: '#5A26ED',
          borderRadius: 6,
          paddingBottom: '10px',
          paddingTop: '10px',

          '&:hover': {
            backgroundColor: '#6F7CF3',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      //lineHeight:
      //letterSpacing:
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      //lineHeight:
      //letterSpacing:
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      //lineHeight:
      //letterSpacing:
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
      //lineHeight:
      //letterSpacing:
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.25rem',
      //lineHeight:
      //letterSpacing:
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.125rem',
      //lineHeight:
      //letterSpacing:
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: '0.875rem',
      //lineHeight:
      //letterSpacing:
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      //lineHeight:
      //letterSpacing:
    },
    subtitle3: {
      fontWeight: 400,
      fontSize: '0.875rem',
      //lineHeight:
      //letterSpacing:
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      //lineHeight:
      //letterSpacing:
    },
    body2: {
      fontWeight: 300,
      fontSize: '1rem',
      //lineHeight:
      //letterSpacing:
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      //lineHeight:
      //letterSpacing:
    },
  },
}

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light' as PaletteMode,
    background: {
      paper: '#FDFDFD',
      default: '#FFFFFF',
    },
    text: {
      primary: shadesColor[100],
      secondary: shadesColor[200],
      disabled: 'rgb(102, 102, 102)',
    },
  },
}

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark' as PaletteMode,
    background: {
      paper: '#31323E',
      default: '#191A23',
    },
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: '#C9C9C9 ',
      disabled: 'rgb(153, 153, 153)',
    },
  },
}
