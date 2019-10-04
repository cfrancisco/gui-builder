import React from 'react';
import List from '@material-ui/icons/List';
import Inbox from '@material-ui/icons/MoveToInbox';
import Dashboard from '@material-ui/icons/Dashboard';
import Map from '@material-ui/icons/Map';
import Circles from '@material-ui/icons/ScatterPlot';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ListAltIcon from '@material-ui/icons/ListAlt';

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
        label: 'Charts',
        pathname: '/charts',
        icon: <ShowChartIcon />,
    },
    {
        label: 'Forms',
        pathname: '/forms',
        icon: <ListAltIcon />,
    },
    {
        label: 'Tables',
        pathname: '/tables',
        icon: <Inbox />,
    },
    {
        label: 'Cards',
        pathname: '/external',
        icon: <Circles />,
    },
    {
        label: 'Todo List',
        pathname: '/todo',
        icon: <List />,
    },
];

export default Menu;
