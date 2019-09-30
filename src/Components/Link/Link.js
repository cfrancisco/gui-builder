import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import styles from './_styles';

const useStyles = makeStyles(styles);

const LinkButton = ({ active = false, children, onClick }) => {
    const classes = useStyles();

    if (active) {
        return (
            <span
                className={classes.activeItem}
            >
                {children}
            </span>
        );
    }

    return (
        <Button
            component="button"
            onClick={onClick}
            disabled={active}
            className={classes.activeItem}
        >
            {children}
        </Button>
    );
};

LinkButton.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default LinkButton;
