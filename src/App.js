import React, { Component } from 'react';
import Likeus from './components/Likeus';
import KillPig from './components/KillPig';
import BleedPig from './components/BleedPig';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Sitenav /> */}
          <Switch>
            <Route exact path="/" component={Likeus} />
            <Route exact path="/killpig" component={KillPig} />
            <Route exact path="/bleedpig" component={BleedPig} />
            <Route component={Likeus} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
