import { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import MainBox from './components/mainbox/main-box';
import { Nothing } from './types/types';

interface AppState {
  throwError: boolean;
}

export default class App extends Component<Nothing, AppState> {
  constructor(props: Nothing) {
    super(props);
    this.state = { throwError: false };
  }

  render() {
    if (this.state.throwError) {
      throw new Error('Test <ErrorBoundary>');
    }
    return (
      <>
        <button
          className="btn-test"
          onClick={() => {
            this.setState({ throwError: true });
          }}
        >
          test error boundary
        </button>
        <Header />
        <MainBox />
      </>
    );
  }
}
