import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import Parts from '../components/Parts';
import About from '../components/About';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Signup from '../components/Signup';


class MainContainer extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/parts" component={Parts} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>
        )
    }
}

export default MainContainer