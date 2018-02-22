import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SetUpContainer from './SetUp/SetUpContainer';
import DashboardContainer from './Dashboard/DashboardContainer';
import SinglePageContainer from './SinglePage/SinglePageContainer';

export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Switch>
          <Route exact path="/" component={SetUpContainer} />
          <Route exact path="/Dashboard" component={DashboardContainer} />
          <Route exact path="/SinglePage" component={SinglePageContainer} />
        </Switch>
      </div>);
  }
}
