import React from 'react';
import List from '@material-ui/icons/List';
import Inbox from '@material-ui/icons/MoveToInbox';
import Dashboard from '@material-ui/icons/Dashboard';
import Map from '@material-ui/icons/Map';
import Circles from '@material-ui/icons/ScatterPlot';
import Notes from '@material-ui/icons/Notes';

// uses https://www.npmjs.com/package/@material-ui/icons to find the icons

const Menu = [
    {
        label: 'Home',
        pathname: '/',
        icon: <Inbox />,
    },
    {
        label: 'Dashboard',
        pathname: '/dashboard',
        icon: <Dashboard />,
    },
    {
        label: 'Maps',
        pathname: '/maps',
        icon: <Map />,
    },
    {
        label: 'To do list',
        pathname: '/Todolist',
        icon: <Notes />,
    },
    {
        label: 'Bit',
        pathname: '/external',
        icon: <Circles />,
    },
    {
        label: 'Forms',
        pathname: '/forms',
        icon: <Inbox />,
    },
    {
        label: 'Cards',
        pathname: '/cards',
        icon: <Inbox />,
    },
    {
        label: 'Todo List',
        pathname: '/todo',
        icon: <List />,
    },
];

export default Menu;
