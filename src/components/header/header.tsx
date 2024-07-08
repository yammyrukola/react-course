import { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="page-header">
        <img className="header-img" src="img/solder.png" alt="" width="80" />
        <h1>STAR WARS API</h1>
      </header>
    );
  }
}
