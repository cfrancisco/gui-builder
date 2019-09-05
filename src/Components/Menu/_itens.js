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
        pathname: '/Maps',
        icon: null,
    },
    {
        label: 'Forms',
        pathname: '/Forms',
        icon: null,
    },
    {
        label: 'About',
        pathname: '/About',
        icon: null,
    },
];

export default Menu;
