import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import myStyles from './theme';
import Routes from './routes';

import AddTodo from './Containers/AddTodo/AddTodo';
import VisibleTodoList from './Containers/VisibleTodoList/VisibleTodoList';
import Footer from './Components/Footer/Footer';

const miTheme = createMuiTheme(myStyles);

const App = () => (
    <div className="App">
        <p style={{ textAlign: 'center' }}>Exercitando Redux</p>
        <div>
            <ThemeProvider theme={miTheme}>
                <Routes />
            </ThemeProvider>

            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    </div>
);

export default App;
