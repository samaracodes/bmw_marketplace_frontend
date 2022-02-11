import { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchCars } from '../actions/fetchCars'
import Cars from '../components/Cars'

class CarListingsContainer extends Component {
    
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/cars" render={(routerProps) => <Cars {...routerProps} cars={this.props.cars} />} />
                </Switch>
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchCars()
    }
}

const mapStateToProps = state => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps, { fetchCars })(CarListingsContainer)