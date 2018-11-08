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
<<<<<<< HEAD
import BattleRendering from './components/BattleRendering';
=======
import Card from './components/Card'
>>>>>>> fb33519b5e4469861ad3807a48b961a4129bfe5e
export default () =>
    <BrowserRouter>
        <div>
            <Navbar/>
            <Switch>
                <Route path = "/" exact component = {Homepage} />
                <Route path = "/dashboard" component = {Dashboard} />
                <Route path = "/BattleRendering" component = {BattleRendering} />
                <Route path = "/stats" component = {Stats} />
                <Route path = "/challenge" component = {Challenge} />
                <Route path = "/battle" component = {Battle} />
                <Route path = "/friends" component = {Friends} />
                <Route path = "/login" component = {Login} />
                <Route path = "/register" component = {Register} />
                <Route path = "/setting" component = {Setting} />
                <Route path = "/card" component = {Card} />
            </Switch>
        </div>
    </BrowserRouter>;
