import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Forms from './Pages/Forms/Forms';
import Main from './Pages/Main/Main';
import LayoutBase from './Components/Layout/LayoutBase';
import TodoList from './Pages/TodoList/TodoList';
import External from './Pages/External/External';
import Dashboard from './Pages/Dashboard/Dashboard';
import Maps from './Pages/Maps/Maps';
import Tables from './Pages/Tables/Tables';
import LineChart from './Components/Charts/LineChart/LineChart';

const dataSample = [
    {
        label: 'Vácuo',
        data: [
            { label: '05/06', value: 1 },
            { label: '06/06', value: 6 },
            { label: '07/06', value: 9 },
        ],
    },
    {
        label: 'LED',
        data: [
            { label: '05/06', value: 4 },
            { label: '06/06', value: 4 },
            { label: '07/06', value: 6 },
        ],
    },
];

export default () => (
    <HashRouter>
        <Switch>

            <LayoutBase>
                <Route exact path="/" component={Main} />
                <Route exact path="/external" component={External} />
                <Route exact path="/forms" component={Forms} />
                <Route exact path="/tables" component={Tables} />
                <Route exact path="/todo" component={TodoList} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/maps" component={Maps} />
                <Route exact path="/charts" render={() => <LineChart data={dataSample} childKey={0} />} />
                {/* <Route exact path="" component={Page404} /> */}
            </LayoutBase>

        </Switch>
    </HashRouter>
);
