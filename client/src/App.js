import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import BigMac from './components/BigMac';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={BigMac} />
        </div>
      </Router>
    );
  }
}

export default App;
