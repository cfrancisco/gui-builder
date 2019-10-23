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
import Requests from './Pages/Requests/Requests';
import LineChart from './Components/Charts/LineChart/LineChart';

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
                <Route exact path="/requests" component={Requests} />
                <Route exact path="/charts" render={() => <LineChart childKey={0} />} />
                {/* <Route exact path="" component={Page404} /> */}
            </LayoutBase>

        </Switch>
    </HashRouter>
);
