import React from 'react';
import Inbox from '@material-ui/icons/MoveToInbox';
import Dashboard from '@material-ui/icons/Dashboard';
import Map from '@material-ui/icons/Map';
import Circles from '@material-ui/icons/ScatterPlot';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import I18nProvider from '../i18nProvider/i18nProvider';
import * as locales from './locales/Menu';

// uses https://www.npmjs.com/package/@material-ui/icons to find the icons

const Menu = [
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="home"
        />,
        pathname: '/',
        icon: <Inbox />,
        childKey: 1,
    },
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="dashboard"
        />,
        pathname: '/dashboard',
        icon: <Dashboard />,
        childKey: 2,
    },
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="maps"
        />,
        pathname: '/maps',
        icon: <Map />,
        childKey: 3,
    },
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="charts"
        />,
        pathname: '/charts',
        icon: <ShowChartIcon />,
        childKey: 4,
    },
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="forms"
        />,
        pathname: '/forms',
        icon: <ListAltIcon />,
        childKey: 5,
    },
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="tables"
        />,
        pathname: '/tables',
        icon: <Inbox />,
        childKey: 6,
    },
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="cards"
        />,
        pathname: '/external',
        icon: <Circles />,
        childKey: 7,
    },
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="requests"
        />,
        pathname: '/requests',
        icon: <Circles />,
        childKey: 8,
    },

    /*     {
        label: 'Todo List',
        pathname: '/todo',
        icon: <List />,
    }, */
];

export default Menu;
