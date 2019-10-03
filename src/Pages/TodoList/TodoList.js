import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as AddTodo from './AddTodo/AddTodo';
import VisibleTodoList from './VisibleTodoList/VisibleTodoList';
import Footer from '../../Components/TodoList/Footer';

const TodoListPage = () => (
    <Grid
        container
        spacing={2}
    >
        <Grid item xs={12}>
            <AddTodo />
        </Grid>
        <Grid item xs={12}>
            <VisibleTodoList />
        </Grid>
        <Grid item xs={12}>
            <Footer />
        </Grid>
    </Grid>
);

export default TodoListPage;
