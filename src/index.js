import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Home from './views/Home/index';
import App from './App';
import Channel from './views/Channel/index';


ReactDOM.render((
    <Router history = {browserHistory}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {Home} />
            <Route path="/channel/:channelId" component={Channel}/>
        </Route>
    </Router>
),document.getElementById('root')
);
