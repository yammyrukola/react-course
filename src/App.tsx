import { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import MainBox from './components/mainbox/main-box';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <MainBox />
      </>
    );
  }
}
