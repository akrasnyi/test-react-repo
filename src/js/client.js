import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Mine from "./components/Main/Mine";
import Settings from "./components/Main/Settings";
import Shared from "./components/Main/Shared";

import '../css/style.scss';

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Shared}></IndexRoute>
            <Route path="mine" name="mine" component={Mine}></Route>
            <Route path="settings" name="settings" component={Settings}></Route>
        </Route>
    </Router>, app);
