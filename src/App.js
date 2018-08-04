import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import BaseInfo from './components/BaseInfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <BaseInfo />
      </div>
    );
  }
}

export default App;
