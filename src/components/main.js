import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
    </Switch>
)

export default Main;