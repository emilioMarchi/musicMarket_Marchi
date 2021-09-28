import React, {Component} from 'react';

import Header from './components/header';

import logo from './logo.svg';
import './App.css';

class App extends Component() {
  constructor() {
    super();
    this.state = {
      state: false;
    }
  }
  
  componentWillMount() {}

  componentDidMount() {}

  componentDidUpdate() {}

  render() {

    return (
      <Header />
      <div>
        <h1>Hola mundo. El estado es {this.state.state} </h1>
      </div>
    );
  }
}

export default App;
