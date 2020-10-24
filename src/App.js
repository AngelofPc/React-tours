import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import TourList from './components/TourList';
import './App.scss';


class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <TourList/>
      </>
    )
  }
}

export default App

