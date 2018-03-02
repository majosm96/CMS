import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, bool } from 'prop-types';

import LogInForm from './LogInForm';
import { authUser } from './Actions';

/**
 * Represents the Set Up of the App.
 * @class
 * @return SetUp Container.
 */

class LogInContainer extends Component {
  /* Constructor manage state of the app */
  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      UserPassword: '',
    };

    /* Call of methods  */
    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* Load data  */
  componentDidMount() {
    // this.props.loadData();
  }

  /* Looks for input changes in order to set the state  */
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  /* Handle data and sets to state in order to send data to server  */
  handleSubmit() {
    const user = {};
    user.name = this.state.UserName;
    user.password = this.state.UserPassword;
    this.props.authUser(user);

    console.log(this.state.logIn);
    this.setState = ({
      UserName: '',
      UserPassword: '',
    });
  }

  render() {
    return (
      <div className="section-wrap setup-container">
        <h3 className="sidebar__title sidebar__title--logo sidebar__title--logo-dash title-icon--override">Now just need Login</h3>
        <LogInForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>);
  }
}

/**
 * Maps props of the Model.
 * @func
 * @param {state} state - State of Single Page Container.
 * @returns {object} - object of the App state.
 */

function mapStateToProps(state) {
  return {
    logIn: state.LogIn.logIn,
    token: state.LogIn.token,
  };
}

/**
 * Maps Dispath functions to the Model.
 * @func
 * @returns {object} - Object with all of actions methods to dispatch to the App.
 */

function mapDispatchToProps(dispatch) {
  return {
    authUser: value => dispatch(authUser(value)),
  };
}

/** Props Validations */
LogInContainer.propTypes = {
  authUser: func,
  logIn: bool,
};

LogInContainer.defaultProps = {
  authUser: () => {},
  logIn: false,
};

/** Module Export */
export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);
