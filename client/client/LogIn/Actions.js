// imports
// import uuid from 'uuid/v1';

// API URL Constant
const API_URL = 'http://localhost:8081/api/v2/auths';

// todo actions
// Add
const AUTH_USER_REQUEST = 'AUTH_USER_REQUEST';
const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
const AUTH_USER_FAILURE = 'AUTH_USER_FAILURE';
const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

/**
 * Adds new user
 * @func
 */

const authUser = user => (dispatch) => {
  dispatch({
    type: AUTH_USER_REQUEST,
  });
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...user,
    }),
  })
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: AUTH_USER_SUCCESS,
        user: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: AUTH_USER_FAILURE,
        error,
      });
    });
};


/**
 * Gets all the users
 * @func
 */
const getUsers = () => (dispatch) => {
  dispatch({
    type: GET_USERS_REQUEST,
  });
  fetch(API_URL)
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: GET_USERS_SUCCESS,
        users: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_USERS_FAILURE,
        error,
      });
    });
};

/** Export Module */
module.exports = {
  authUser,
  getUsers,
};
