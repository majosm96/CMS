// imports
// import uuid from 'uuid/v1';

// API URL Constant
const API_URL = 'http://localhost:8081/api/v2/auths';

// todo actions
// Add
const AUTH_USER_REQUEST = 'AUTH_USER_REQUEST';
const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
const AUTH_USER_FAILURE = 'AUTH_USER_FAILURE';

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
        success: data.success,
      });
    })
    .catch((error) => {
      dispatch({
        type: AUTH_USER_FAILURE,
        error,
      });
    });
};


/** Export Module */
module.exports = {
  authUser,
};
