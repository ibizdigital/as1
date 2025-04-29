// A set of opal-inspired colors for the AS1 theme
export const colors = {
  // Primary colors
  black: '#000000',
  white: '#FFFFFF',
  
  // Secondary opal-inspired colors
  andromeda: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#b9e6fe',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  callisto: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  sea: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
};

// Export specific theme colors for the application
export const themeColors = {
  primary: colors.black,
  secondary: colors.white,
  accent1: colors.andromeda[500],
  accent2: colors.callisto[500],  
  accent3: colors.sea[500],
};