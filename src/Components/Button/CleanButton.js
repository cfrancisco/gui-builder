import React from 'react';
import { Button as _Button } from '@material-ui/core';
import PropTypes from 'prop-types';

function HOC(WrappedComponent) {
    return (props) => {
        const { children } = props;
        return (
            <WrappedComponent {...props}>
                Updated:
                {children}
            </WrappedComponent>
        );
    };
}

HOC.propTypes = {
    WrappedComponent: PropTypes.element,
};

export default HOC(_Button);
