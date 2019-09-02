import React from 'react';
import PropTypes from 'prop-types';

function applyTheme(WrappedComponent, hookStyle) {
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

applyTheme.propTypes = {
    WrappedComponent: PropTypes.element,
};

export default applyTheme;
