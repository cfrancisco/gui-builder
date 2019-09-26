import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import applyStyle from '../utils';
import styles from './_styles';

const useStyles = makeStyles(styles);

const DojotButton = applyStyle(Button, useStyles);

export default DojotButton;
