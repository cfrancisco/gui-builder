import React from 'react';
import FilterLink from '../../Containers/FilterLink/FilterLink';
import { VisibilityFilters } from '../../Containers/VisibleTodoList/Action';

const Footer = () => (
    <div>
        <span>Show:</span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_HIGH}>High Priority</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_MEDIUM}>Medium Priority</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_LOW}>Low Priority</FilterLink>
    </div>
);

export default Footer;
