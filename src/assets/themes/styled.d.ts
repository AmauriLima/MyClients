import 'styled-components/native';

// and extend them!
declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      white: string;
      danger: string;
      primary: {
        light: string;
        main: string;
      };
      gray: {
        100: string;
        200: string;
        300: string;
        700: string;
      };
    };
  }
}
