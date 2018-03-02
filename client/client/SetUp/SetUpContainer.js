import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array, bool } from 'prop-types';

import SetUpForm from './SetUpForm';
import { addUser, getUsers } from './Actions';

/**
 * Represents the Set Up of the App.
 * @class
 * @return SetUp Container.
 */

class SetUpContainer extends Component {
  /* Constructor manage state of the app */
  constructor(props) {
    super(props);
    this.state = {
      newUserName: '',
      newUserPassword: '',
      newDataBase: '',
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
    user.name = this.state.newUserName;
    user.password = this.state.newUserPassword;
    user.database = this.state.newDataBase;
    this.props.addUser(user);

    this.setState = ({
      newUserName: '',
      newUserPassword: '',
      newDataBase: '',
    });
  }

  render() {
    return (
      <div className="section-wrap setup-container">
        <h3 className="sidebar__title sidebar__title--logo sidebar__title--logo-dash title-icon--override">Set up our CMS</h3>
        <p>Below you should enter your database connection details.</p>
        <SetUpForm
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
    loading: state.loading,
    users: state.users,
  };
}

/**
 * Maps Dispath functions to the Model.
 * @func
 * @returns {object} - Object with all of actions methods to dispatch to the App.
 */

function mapDispatchToProps(dispatch) {
  return {
    addUser: value => dispatch(addUser(value)),
    loadData: () => {
      dispatch(getUsers());
    },
  };
}

/** Props Validations */
SetUpContainer.propTypes = {
  users: array,
  addUser: func,
  loadData: func,
  loading: bool,
};

SetUpContainer.defaultProps = {
  users: [],
  addUser: () => {},
  loadData: () => {},
  loading: true,
};

/** Module Export */
export default connect(mapStateToProps, mapDispatchToProps)(SetUpContainer);
