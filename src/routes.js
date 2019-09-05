import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Cards from './Pages/Cards';
import Main from './Pages/Main';

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            {/* <Route exact path="/signup" component={Signup} /> */}
            <Route exact path="/cards" component={Cards} />
            {/* <Route exact path="/maps" component={Maps} /> */}
        </Switch>
    </HashRouter>
);
