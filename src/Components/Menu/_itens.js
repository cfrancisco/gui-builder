import React from 'react';
import List from '@material-ui/icons/List';
import Inbox from '@material-ui/icons/MoveToInbox';
import Dashboard from '@material-ui/icons/Dashboard';
import Map from '@material-ui/icons/Map';
import Circles from '@material-ui/icons/ScatterPlot';

import config from '../../config';

const language = config.language ? config.language.urlLang : config.defaultLanguage.urlLang;

// uses https://www.npmjs.com/package/@material-ui/icons to find the icons

const Menu = [
    {
        label: 'Home',
        pathname: `/${language}`,
        icon: <Inbox />,
    },
    {
        label: 'Dashboard',
        pathname: `/dashboard/${language}`,
        icon: <Dashboard />,
    },
    {
        label: 'Maps',
        pathname: `/maps/${language}`,
        icon: <Map />,
    },
    {
        label: 'Forms',
        pathname: `/forms/${language}`,
        icon: <Inbox />,
    },
    {
        label: 'Cards',
        pathname: `/external/${language}`,
        icon: <Circles />,
    },
    {
        label: 'Todo List',
        pathname: `/todo/${language}`,
        icon: <List />,
    },
];

export default Menu;
