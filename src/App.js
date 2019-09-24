import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Achievements } from './ui/pages/Achievements';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Achievements} />
          {/* <Route exact path="/new-achievement" component={NewAchievement} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
