import React from 'react';
import List from '@material-ui/icons/List';
import Inbox from '@material-ui/icons/MoveToInbox';
import Dashboard from '@material-ui/icons/Dashboard';
import Map from '@material-ui/icons/Map';
import Circles from '@material-ui/icons/ScatterPlot';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import I18nProvider from "../i18nProvider/i18nProvider";
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
    },
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="dashboard"
        />,
        pathname: '/dashboard',
        icon: <Dashboard />,
    },
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="maps"
        />,
        pathname: '/maps',
        icon: <Map />,
    },
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="charts"
        />,
        pathname: '/charts',
        icon: <ShowChartIcon />,
    },
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="forms"
        />,
        pathname: '/forms',
        icon: <ListAltIcon />,
    },
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="tables"
        />,
        pathname: '/tables',
        icon: <Inbox />,
    },
    {
        label: <I18nProvider
            localeObj={locales}
            termKey="cards"
        />,
        pathname: '/external',
        icon: <Circles />,
    },
/*     {
        label: 'Todo List',
        pathname: '/todo',
        icon: <List />,
    }, */
];

export default Menu;
