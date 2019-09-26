import React from 'react';
import PropTypes from 'prop-types';

function applyStyle(WrappedComponent, hookStyle) {
    return (props) => {
        const classes = hookStyle();
        const { children } = props;
        return (
            <WrappedComponent className={classes.root} {...props}>
                {children}
            </WrappedComponent>
        );
    };
}

applyStyle.propTypes = {
    WrappedComponent: PropTypes.element,
};

export default applyStyle;
