import React from 'react';
import FilterLink from '../FilterLink/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
    <p>
        Show:
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        {', '}
        Show:
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>All</FilterLink>
    </p>
);

export default Footer;
