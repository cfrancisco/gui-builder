import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import AddTodo from '../Containers/AddTodo/AddTodo';
import VisibleTodoList from '../Containers/VisibleTodoList/VisibleTodoList';
import Footer from '../Components/Footer/Footer';

const TodoListPage = () => (
    <Container style={{ marginTop: '40px' }}>
        <Grid
            container
            spacing={2}
        >

            <Grid item xs={12}>
                <AddTodo />
            </Grid>
            <Grid item xs={6}>
                <VisibleTodoList />
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>

        </Grid>
    </Container>
);

export default TodoListPage;
