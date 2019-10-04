import React from 'react';
import MUIButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	button: {
		margin: '8px 0 8px 8px',
	},
});

function Button(props) {
	const {
		classes,
		variant = "contained",
		color = "primary",
		...otherProps
	} = props;
	return (
		<MUIButton className={classes.button} variant={variant} color={color} {...otherProps} />
	);
}

export default withStyles(styles)(Button);
