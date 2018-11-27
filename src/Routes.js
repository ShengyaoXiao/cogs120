import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Stats from './components/Stats';
import Challenge from './components/Challenge';
import Battle from './components/Battle';
import Friends from './components/Friends';
import Setting from './components/Setting';
import Card from './components/Card'
import BattleRendering from './components/BattleRendering';
import BattleRendering1 from './components/BattleRendering1';

export default () =>
    <BrowserRouter>
        <div>
            <Navbar/>
            <Switch>
                <Route path = "/" exact component = {Homepage} />
                <Route path = "/dashboard" component = {Dashboard} />
                
                <Route path = "/BattleRendering" component = {BattleRendering} />
                <Route path = "/BattleRendering1" component = {BattleRendering1} />

                <Route path = "/stats" component = {Stats} />
                <Route path = "/challenge" component = {Challenge} />
                <Route path = "/battle" component = {Battle} />
                <Route path = "/friends" component = {Friends} />
                <Route path = "/login" component = {Login} />
                <Route path = "/register" component = {Register} />
                <Route path = "/setting" component = {Setting} />
                <Route path = "/Card" component = {Card} />
            </Switch>
        </div>
    </BrowserRouter>;
