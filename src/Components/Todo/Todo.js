import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText } from '@material-ui/core';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const Todo = ({ onClick, completed, text }) => (
    <ListItemLink
        onClick={onClick}
        style={{ padding: '0' }}
    >
        <ListItemText
            primary={text}
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
        />
    </ListItemLink>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default Todo;
