import React from "react";
import { Button as _Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import applyTheme from "./../utils";
import styles from "./_styles";

const useStyles = makeStyles(styles);

function myButton(props) {
  return <_Button {...props}>{props.children}</_Button>;
}

const DojotButton = applyTheme(myButton, useStyles);

export default DojotButton;
