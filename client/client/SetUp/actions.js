// imports
import uuid from 'uuid/v1';

// API URL Constant
const API_URL = 'http://localhost:8081/api/v2/setups';

// todo actions
// Add
const ADD_USER_REQUEST = 'ADD_USER_REQUEST';
const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
const ADD_USER_FAILURE = 'ADD_USER_FAILURE';
const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

const addUser = user => (dispatch) => {
  dispatch({
    type: ADD_USER_REQUEST,
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
        type: ADD_USER_SUCCESS,
        user: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_USER_FAILURE,
        error,
      });
    });
};


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


module.exports = {
  addUser,
  getUsers,
};
