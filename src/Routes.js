import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
export default () =>
    <Switch>
        <Route path = "/" exact component = {Homepage} />
        <Route path = "/login" component = {Login} />
        <Route path = "/register" component = {Register} />
    </Switch>;
