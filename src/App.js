import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import LanguageProvider from 'react-language-kit';
import myStyles from './theme';
import Routes from './routes';
import config from './config';

const miTheme = createMuiTheme(myStyles);

const locale = config.language ? config.language.code : window.navigator.language;
const supportedLocales = ['en-US', 'pt-BR'];

const App = () => (
    <div className="App">
        <LanguageProvider activeLanguage={locale} availableLanguages={supportedLocales}>
            <ThemeProvider theme={miTheme}>
                <Routes />
            </ThemeProvider>
        </LanguageProvider>
    </div>
);

export default App;
