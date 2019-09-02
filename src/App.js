import React, { Component, Fragment } from "react";
import Loader from "./Components/Loader/Loader";
import { DojotButton, CleanButton, CustomButton } from "./Components/Button";
import { Button } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Checkbox from "@material-ui/core/Checkbox";

import myStyles from "./theme";

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
          <CustomButton a="x">CustomButton</CustomButton>
          <Button> Material Button</Button>
          <Loader></Loader>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
