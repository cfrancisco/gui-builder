/*

This file is planned to contains all custom style to be applied on Material UI Theme;

*/
import { green, red, yellow, orange, blue } from '@material-ui/core/colors';

const myStyles = {
    palette: {
      primary: {
        main: yellow[500],
      },
      secondary: {
        main: green[500],
      },
    },
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '"Lato"',
        'sans-serif'
      ].join(',')
    }
  };


export default myStyles;
