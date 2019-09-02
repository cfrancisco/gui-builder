import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './Pages/Main';
import myStyles from './theme';

const miTheme = createMuiTheme(myStyles);

const App = () => (
    <div className="App">
        <CssBaseline />
        <ThemeProvider theme={miTheme}>
            <Main />
        </ThemeProvider>
    </div>
);

export default App;
