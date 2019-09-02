import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Loader from "./../Components/Loader/Loader";
import { DojotButton, CleanButton, CustomButton } from "./../Components/Button";
import { Button } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

function Checkboxes() {
  return (
    <>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked color="primary" />
      <Checkbox defaultChecked color="secondary" />
    </>
  );
}

class Main extends Component {
  render() {
    return (
      <>
        <Grid container justify="center">
          <Checkboxes />
          <CleanButton a="x">CleanButton</CleanButton>
          <DojotButton a="x">DojotButton</DojotButton>
          <CustomButton a="x">CustomButton</CustomButton>
          <Button> Material Button</Button>
          <Loader></Loader>
        </Grid>
      </>
    );
  }
}

export default Main;
