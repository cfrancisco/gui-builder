import React from "react";
import { makeStyles } from "@material-ui/styles";
import applyTheme from "./../utils";
import styles from "./_styles";

const useStyles = makeStyles(styles);

function customButton(props) {
  return <button {...props}>{props.children}</button>;
}

const CustomButton = applyTheme(customButton, useStyles);

export default CustomButton;
