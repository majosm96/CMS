import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array, bool } from 'prop-types';

import SetUpForm from './SetUpForm';
import { addUser, getUsers } from './Actions';

class SetUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUserName: '',
      newUserPassword: '',
      newDataBase: '',
    };

    this.render = this.render.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.loadData();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

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
        <h2>Set Up</h2>
        <p>Lorem sdygfyuedthrlketn oas fusdhf uerfg ndfuh suifuefh saf hsdfh</p>
        <SetUpForm
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>);
  }
}

function mapStateToProps(state) {
  return {
    loading: state.loading,
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: value => dispatch(addUser(value)),
    loadData: () => {
      dispatch(getUsers());
    },
  };
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SetUpContainer);
