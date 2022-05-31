import 'styled-components/native';

// and extend them!
declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      white: string;
      primary: {
        light: string;
        main: string;
      };
    };
  }
}
