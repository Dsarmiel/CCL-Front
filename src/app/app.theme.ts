import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const AppPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
      950: '#0b3a85',
    },
    secondary: {
      50: '#e0f7fa',
      100: '#b2ebf2',
      200: '#80deea',
      300: '#4dd0e1',
      400: '#26c6da',
      500: '#00bcd4',
      600: '#00acc1',
      700: '#0097a7',
      800: '#00838f',
      900: '#006064',
      950: '#004d52',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#0d47a1',
          inverseColor: '#ffffff',
          hoverColor: '#1565c0',
          activeColor: '#1976d2',
        },
        secondary: {
          color: '#006064',
          inverseColor: '#ffffff',
          hoverColor: '#00838f',
          activeColor: '#0097a7',
        },
        highlight: {
          background: '#0d47a1',
          focusBackground: '#1976d2',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
      },
      dark: {
        primary: {
          color: '#e3f2fd',
          inverseColor: '#0d47a1',
          hoverColor: '#bbdefb',
          activeColor: '#90caf9',
        },
        secondary: {
          color: '#e0f7fa',
          inverseColor: '#004d52',
          hoverColor: '#b2ebf2',
          activeColor: '#80deea',
        },
        highlight: {
          background: 'rgba(227, 242, 253, 0.16)',
          focusBackground: 'rgba(227, 242, 253, 0.24)',
          color: 'rgba(255, 255, 255, 0.87)',
          focusColor: 'rgba(255, 255, 255, 0.87)',
        },
      },
    },
  },
});

export default AppPreset;
