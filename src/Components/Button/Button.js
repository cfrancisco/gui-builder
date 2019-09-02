import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import applyTheme from "./../utils";
import styles from "./_styles";

const useStyles = makeStyles(styles);

const DojotButton = applyTheme(Button, useStyles);

export default DojotButton;
