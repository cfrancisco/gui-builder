import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/icons/List';

const Menu = [
    {
        label: 'Home',
        pathname: '/',
        icon: <InboxIcon />,
    },
    {
        label: 'Dashboard',
        pathname: '/dashboard',
        icon: <InboxIcon />,
    },
    {
        label: 'Maps',
        pathname: '/maps',
        icon: <InboxIcon />,
    },
    {
        label: 'Forms',
        pathname: '/forms',
        icon: <InboxIcon />,
    },
    {
        label: 'Cards',
        pathname: '/cards',
        icon: <InboxIcon />,
    },
    {
        label: 'Todo List',
        pathname: '/todo',
        icon: <List />,
    },
];

export default Menu;
