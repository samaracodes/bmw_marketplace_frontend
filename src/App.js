import './App.css';
import MainContainer from './containers/MainContainer';
import React, { Component } from 'react'
import CarListingsContainer from './containers/CarListingsContainer';
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer/>
        <CarListingsContainer />
        <Footer/>
      </div>
    );
  }
}

export default App;
