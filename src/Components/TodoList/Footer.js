import React from 'react';
import Grid from '@material-ui/core/Grid';
import FilterLink from '../../Containers/FilterLink/FilterLink';
import { VisibilityFilters } from '../../Containers/VisibleTodoList/Action';

const Footer = () => (
    
    <Grid
        container
        spacing={2}
    >
        <Grid item xs={3} />
        <Grid item xs={6}>
            <span>Show:</span>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_HIGH}>High Priority</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_MEDIUM}>Medium Priority</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_LOW}>Low Priority</FilterLink>
        </Grid>
        <Grid item xs={3} />
    </Grid>
);

export default Footer;
