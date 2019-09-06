import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const Menu = [
    {
        label: 'Home',
        pathname: '/',
        icon: <InboxIcon />,
    },
    {
        label: 'Dashboard',
        pathname: '/dashboard',
        icon: null,
    },
    {
        label: 'Maps',
        pathname: '/maps',
        icon: null,
    },
    {
        label: 'Forms',
        pathname: '/forms',
        icon: null,
    },
    {
        label: 'Cards',
        pathname: '/cards',
        icon: null,
    },
];

export default Menu;
