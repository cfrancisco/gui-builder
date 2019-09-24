import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import config from './config.json';
import Forms from './Pages/Forms/Forms';
import Main from './Pages/Main/Main';
import LayoutBase from './Containers/Layout/LayoutBase';
import TodoList from './Pages/TodoList/TodoList';
import External from './Pages/External/External';
import Dashboard from './Pages/Dashboard/Dashboard';
import Maps from './Pages/Maps/Maps';

const language = config.language ? config.language.urlLang : config.defaultLanguage.urlLang;

export default () => (
    <HashRouter>
        <Switch>
            <LayoutBase>
                <Route exact path={`/${language}`} component={Main} />
                <Route exact path={`/external/${language}`} component={External} />
                <Route exact path={`/forms/${language}`} component={Forms} />
                <Route exact path={`/todo/${language}`} component={TodoList} />
                <Route exact path={`/dashboard/${language}`} component={Dashboard} />
                <Route exact path={`/maps/${language}`} component={Maps} />
                {/* <Route exact path="" component={Page404} /> */}
            </LayoutBase>

        </Switch>
    </HashRouter>
);
