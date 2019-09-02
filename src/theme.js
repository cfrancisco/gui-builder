/*

This file is planned to contains all custom style to be applied on Material UI Theme;

*/
import { grey, red, blue } from '@material-ui/core/colors';

const myStyles = {
    root: {
        backgroundColor: grey.A500,
    },
    grid: {
        width: 1000,
    },
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: red[500],
        },
    },
    typography: {
    // Use the system font instead of the default Roboto font.
        fontFamily: ['"Lato"', 'sans-serif'].join(','),
    },
};

export default myStyles;
