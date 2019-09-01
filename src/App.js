import React, {Component, Fragment } from 'react';
import logo from './logo.svg';
import Loader from './Components/Loader/Loader';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Checkbox from '@material-ui/core/Checkbox';

import myStyles from './theme';
import './App.css';


const miTheme = createMuiTheme(myStyles);

function Checkboxes() {
  return (
    <Fragment>
         <Checkbox defaultChecked />
        <Checkbox defaultChecked color="primary" />
        <Checkbox defaultChecked color="secondary" /> 
    </Fragment>
  );
}

class App extends Component {
  render () {
      return (
      <div className="App">
        <ThemeProvider theme={miTheme}>
          <Checkboxes />
          <Loader></Loader>
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                 Edit
                  {' '}
                  <code>src/App.js</code>
                  {' '}
                and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
          Learn React
              </a>
          </header>
         </ThemeProvider>
      </div>
  );
    }
}

export default App;
