import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { ListItem, ListItemText } from '@material-ui/core';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const Todo = ({ onClick, completed, text, priority }) => {

    const useStyles = makeStyles({
        root: {
            textDecoration: completed ? 'line-through' : 'none',
            backgroundColor: mapPriorityToStyle(priority)
        },
    });

    const classes = useStyles();

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

    return (    
        <ListItemLink
            onClick={onClick}
            priority={priority}
            style={{ padding: '0' }}
        >
            <ListItemText
                primary={text}
                className={classes.root}
            />
        </ListItemLink>
    )
};

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
};

export default Todo;
