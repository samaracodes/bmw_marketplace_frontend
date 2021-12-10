import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import CarsHomepage from '../components/CarsHomepage';


class MainContainer extends Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/cars" component={CarsHomepage}></Route>
                </Switch>
            </Router>
        )
    }
}

export default MainContainer