import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import DashboardHome from '../DashboardHome/DashboardHomeContainer';

class AuthContainer extends Component {
  render() {
    return this.props.auth
      ?
        <DashboardHome />
      :
        <div className="section-wrap setup-container auth">
          <h2>Login fail :(</h2>
          <h4>Please try it again</h4>
          <Link to="/LogIn" className="btn btn-principal">Go back</Link>
        </div>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.LogIn.logIn,
    token: state.LogIn.token,
  };
}

export default connect(mapStateToProps)(AuthContainer);
