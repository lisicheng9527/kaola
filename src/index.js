import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Home from './component/home/home';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <Route exact path="/" component={Home}/>
    </Router>
  ), document.getElementById('root'));
registerServiceWorker();
