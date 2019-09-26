import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import applyTheme from '../utils';
import styles from './_styles';

const useStyles = makeStyles(styles);

function customButton(props) {
    const { children } = props;
    return (
        <button type="button" {...props}>
            {children}
        </button>
    );
}

customButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]),
};

customButton.defaultProps = {
    children: {},
};


export default applyTheme(customButton, useStyles);
