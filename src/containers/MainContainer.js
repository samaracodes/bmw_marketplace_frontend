import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import Parts from '../components/Parts';
import About from '../components/About';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Signup from '../components/Signup';
import Navbar from '../components/Navbar';
import { getCurrentUser } from '../actions/currentUser'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'



class MainContainer extends Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        const {loggedIn} = this.props
        return (
            <Router>
                <Navbar loggedIn={loggedIn} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/parts" component={Parts} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return ({
      loggedIn: !!state.currentUser
    })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(MainContainer))