import React from 'react';
import { Input } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import { addTodo } from '../../actions';
import Button from '../../Components/Button/Button';


const AddTodo = ({ dispatch }) => {
    let input;

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addTodo(input.value));
                input.value = '';
            }}
        >
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={3}>
                    <Input
                        id="todo-text"
                        label="Todo"
                        inputRef={node => (input = node)}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button type="submit" size="small">Add Todo</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default connect()(AddTodo);
