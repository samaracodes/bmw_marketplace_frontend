import './App.css';
import MainContainer from './containers/MainContainer';
import React, { Component } from 'react'
import CarListingsContainer from './containers/CarListingsContainer';
import Navbar from './components/Navbar';
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <MainContainer/>
        <CarListingsContainer />
        <Footer/>
      </div>
    );
  }
}

export default App;
