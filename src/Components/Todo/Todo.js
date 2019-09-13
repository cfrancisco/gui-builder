import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText } from '@material-ui/core';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

function mapPriorityToStyle(priority) {
    switch (priority) {
        case 'high':
            return 'red';
        case 'medium':
            return 'orange';
        default:
            return 'green';
    }
}

const Todo = ({ onClick, completed, text, priority }) => (
    
    <ListItemLink
        onClick={onClick}
        priority={priority}
        style={{ padding: '0' }}
    >
        <ListItemText
            primary={text}
            style={{
                textDecoration: completed ? 'line-through' : 'none',
                backgroundColor: mapPriorityToStyle(priority)
            }}
        />
    </ListItemLink>
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
};

export default Todo;
