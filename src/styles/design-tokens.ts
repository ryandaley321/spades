// Spades Poker House Design System
export const colors = {
  dark: '#181510',
  light: '#F7E7CE',
  gold: '#CBB682',
  brown: '#785F37',
  darkOverlay: '#181510B3'
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px'
} as const;

export const typography = {
  fontFamily: {
    heading: 'Montserrat',
    body: 'Poppins'
  },
  fontSize: {
    xs: '10px',
    sm: '12px',
    base: '14px',
    lg: '16px',
    xl: '18px',
    '2xl': '24px',
    '3xl': '28.8px'
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px'
} as const;