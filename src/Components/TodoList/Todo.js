import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from '@material-ui/core';

function ListItemLink(props) {
    return <ListItem button {...props} />;
}

const Todo = ({
    onClick,
    completed,
    text,
    priority,
}) => {
    function mapPriorityToStyle() {
        switch (priority) {
        case 'high':
            return 'red';
        case 'medium':
            return 'orange';
        default:
            return 'green';
        }
    }

    const useStyles = makeStyles({
        root: {
            textDecoration: 'line-through',
            backgroundColor: mapPriorityToStyle(),
        },
    });

    const classes = useStyles();

    return (
        <ListItemLink
            onClick={onClick}
            priority={priority}
            className={completed ? classes.root : ''}
        >
            <ListItemText
                primary={text}
                className={classes.root}
            />
        </ListItemLink>
    );
};

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
};

export default Todo;
