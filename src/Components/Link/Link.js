import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const LinkButton = ({ active = false, children, onClick }) => {
    if (active) {
        return (
            <span
                style={{
                    marginLeft: '6px',
                    marginRight: '6px',
                }}
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
            style={{
                marginLeft: '6px',
                marginRight: '6px',
                textDecoration: 'underline',
            }}
        >
            {children}
        </Button>
    );
};

Button.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default LinkButton;
