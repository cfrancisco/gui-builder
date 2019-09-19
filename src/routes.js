import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Forms from './Pages/Forms/Forms';
import Main from './Pages/Main/Main';
import LayoutBase from './Containers/Layout/LayoutBase';
import TodoList from './Pages/TodoList/TodoList';
import External from './Pages/External/External';
import Dashboard from './Pages/Dashboard/Dashboard';
import Maps from './Pages/Maps/Maps';

export default () => (
    <HashRouter>
        <Switch>
            <LayoutBase>
                <Route exact path="/" component={Main} />
                {/* <Route exact path="/signup" component={Signup} /> */}
                <Route exact path="/external" component={External} />
                <Route exact path="/forms" component={Forms} />
                <Route exact path="/todo" component={TodoList} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/maps" component={Maps} />
            </LayoutBase>

        </Switch>
    </HashRouter>
);
