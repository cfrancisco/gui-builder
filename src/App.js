import React, { Component, Fragment } from "react";
import Loader from "./Components/Loader/Loader";
import DojotButton from "./Components/Button/Button";
import CleanButton from "./Components/Button/CleanButton";
import { Button } from "@material-ui/core";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Checkbox from "@material-ui/core/Checkbox";

import myStyles from "./theme";
import "./App.css";

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
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={miTheme}>
          <Checkboxes />
          <CleanButton a="x">CleanButton</CleanButton>
          <DojotButton a="x">DojotButton</DojotButton>
          <Button> Material Button</Button>
          <Loader></Loader>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
