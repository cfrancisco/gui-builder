import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import myStyles from './theme';
import Routes from './routes';

const miTheme = createMuiTheme(myStyles);

const App = () => (
    <div className="App">
        <CssBaseline />
        <ThemeProvider theme={miTheme}>
            <Routes />
        </ThemeProvider>
    </div>
);

export default App;
