// imports
import uuid from 'uuid/v1';

const API_URL = 'http://localhost:3000/pages';

const GET_PAGES_REQUEST = 'GET_PAGES_REQUEST';
const GET_PAGES_SUCCESS = 'GET_PAGES_SUCCESS';
const GET_PAGES_FAILURE = 'GET_PAGES_FAILURE';
const ADD_PAGE_REQUEST = 'ADD_PAGE_REQUEST';
const ADD_PAGE_SUCCESS = 'ADD_PAGE_SUCCESS';
const ADD_PAGE_FAILURE = 'ADD_PAGE_FAILURE';
const DELETE_PAGE_REQUEST = 'DELETE_PAGE_REQUEST';
const DELETE_PAGE_SUCCESS = 'DELETE_PAGE_SUCCESS';
const DELETE_PAGE_FAILURE = 'DELETE_PAGE_FAILURE';
const UPDATE_PAGE_REQUEST = 'UPDATE_PAGE_REQUEST';
const UPDATE_PAGE_SUCCESS = 'UPDATE_PAGE_SUCCESS';
const UPDATE_PAGE_FAILURE = 'UPDATE_PAGE_FAILURE';
const GET_DATA_PAGE_REQUEST = 'GET_DATA_PAGE_REQUEST';
const GET_DATA_PAGE_SUCCESS = 'GET_DATA_PAGE_SUCCESS';
const GET_DATA_PAGE_FAILURE = 'GET_DATA_PAGE_FAILURE';

const addPage = page => (dispatch) => {
  dispatch({
    type: ADD_PAGE_REQUEST,
  });
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: uuid(),
      ...page,
    }),
  })
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: ADD_PAGE_SUCCESS,
        page: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_PAGE_FAILURE,
        error,
      });
    });
};

const getPage = () => {
  return function (dispatch) {
    dispatch({
      type: GET_PAGES_REQUEST,
    });
    fetch(API_URL)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: GET_PAGES_SUCCESS,
          pages: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_PAGES_FAILURE,
          error,
        });
      });
  };
};

const deletePage = id => (dispatch) => {
  dispatch({
    type: DELETE_PAGE_REQUEST,
    id,
  });
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: DELETE_PAGE_SUCCESS,
        id,
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_PAGE_FAILURE,
        error,
      });
    });
};

const updatePage = page => (dispatch) => {
  dispatch({
    type: UPDATE_PAGE_REQUEST,
  });
  fetch(`${API_URL}/${page.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...page,
    }),
  })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: UPDATE_PAGE_SUCCESS,
        id: page.id,
      });
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_PAGE_FAILURE,
        error,
      });
    });
};

const getDataPage = page => (dispatch) => {
  dispatch({
    type: GET_DATA_PAGE_REQUEST,
  });
  fetch(`${API_URL}/${page.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...page,
    }),
  })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: GET_DATA_PAGE_SUCCESS,
        id: page.id,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_DATA_PAGE_FAILURE,
        error,
      });
    });
};

module.exports = {
  addPage,
  getPage,
  deletePage,
  updatePage,
  getDataPage,
};
