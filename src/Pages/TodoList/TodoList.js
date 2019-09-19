import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddTodo from '../../Containers/AddTodo/AddTodo';
import VisibleTodoList from '../../Containers/VisibleTodoList/VisibleTodoList';
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
