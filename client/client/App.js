import React from 'react';
import { Switch, Route } from 'react-router-dom';

import WelcomeContainer from './Welcome/WelcomeContainer';
import SetUpContainer from './SetUp/SetUpContainer';
import DashboardContainer from './Dashboard/DashboardContainer';
import SinglePageContainer from './SinglePage/SinglePageContainer';
import PostContainer from './Post/PostContainer';

/**
 * Represents App
 * @class
 * @return Routes of the App
 */

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={WelcomeContainer} />
          <Route exact path="/SetUp" component={SetUpContainer} />
          <Route exact path="/Dashboard" component={DashboardContainer} />
          <Route exact path="/SinglePage" component={SinglePageContainer} />
          <Route exact path="/Posts" component={PostContainer} />
        </Switch>
      </div>);
  }
}
