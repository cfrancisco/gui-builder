import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import myStyles from './theme';
import Routes from './routes';

const miTheme = createMuiTheme(myStyles);

const App = () => (
    <div className="App">
        <p style={{ textAlign: 'center' }}>Exercitando Redux</p>
        <div>

            <ThemeProvider theme={miTheme}>
                <Routes />
            </ThemeProvider>

        </div>
    </div>
);

export default App;
