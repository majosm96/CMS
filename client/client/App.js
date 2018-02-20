import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SetUpContainer from './SetUp/SetUpContainer';

export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Switch>
          <Route exact path="/" component={SetUpContainer} />
          <Route path="/test" render={() => <h1>Im a about page</h1>} />
        </Switch>
      </div>);
  }
}
