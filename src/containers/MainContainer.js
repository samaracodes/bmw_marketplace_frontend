import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Cars from '../components/Cars';
import Parts from '../components/Parts';
import About from '../components/About'


class MainContainer extends Component {
    render() {
        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cars" component={Cars} />
                    <Route exact path="/parts" component={Parts} />
                    <Route exact path="/about" component={About} />
                </Switch>
                <Footer/>
            </Router>
        )
    }
}

export default MainContainer