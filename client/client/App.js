import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import WelcomeContainer from './Welcome/WelcomeContainer';
import SetUpContainer from './SetUp/SetUpContainer';
import LogInContainer from './LogIn/LogInContainer';
import DashboardContainer from './Dashboard/DashboardContainer';
import DashboardHomeContainer from './DashboardHome/DashboardHomeContainer';
import SinglePageContainer from './SinglePage/SinglePageContainer';
import PostContainer from './Post/PostContainer';
import SiteContainer from './Site/SiteContainer';

/**
 * Represents App
 * @class
 * @return Routes of the App
 */

export default class App extends React.Component {
  render() {
    // const page = {
    //   url: 'home2',
    // };
    // const newurl = `/site${page.url}`;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={WelcomeContainer} />
            <Route path="/SetUp" component={SetUpContainer} />
            <Route path="/LogIn" component={LogInContainer} />
            <Route path="/Dashboard" component={DashboardContainer} />
            <Route path="/DashboardHome" component={DashboardHomeContainer} />
            <Route path="/SinglePage" component={SinglePageContainer} />
            <Route path="/Posts" component={PostContainer} />
            <Route path="/Site" component={SiteContainer} />
          </Switch>
        </BrowserRouter>
      </div>);
  }
}
