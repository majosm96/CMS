/** Imports */

const API_URL = 'http://localhost:8081/api/v2/posts';

const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

/**
 * Adds new post to State with POST method
 * @func
 */

const addPost = post => (dispatch) => {
  dispatch({
    type: ADD_POST_REQUEST,
  });
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...post,
    }),
  })
    .then(response => response.json())
    .then((data) => {
      dispatch({
        type: ADD_POST_SUCCESS,
        post: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ADD_POST_FAILURE,
        error,
      });
    });
};

/**
 * Gets all the posts
 * @func
 */
const getPosts = () => {
  return function (dispatch) {
    dispatch({
      type: GET_POSTS_REQUEST,
    });
    fetch(API_URL)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: GET_POSTS_SUCCESS,
          posts: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_POSTS_FAILURE,
          error,
        });
      });
  };
};

/**
 * Deletes post by their _id
 * @func
 */
const deletePost = _id => (dispatch) => {
  dispatch({
    type: DELETE_POST_REQUEST,
    _id,
  });
  fetch(`${API_URL}/${_id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: DELETE_POST_SUCCESS,
        _id,
      });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_POST_FAILURE,
        error,
      });
    });
};

/**
 * Updates each post by their _id
 * @func
 */
const updatePost = post => (dispatch) => {
  dispatch({
    type: UPDATE_POST_REQUEST,
  });
  fetch(`${API_URL}/${post._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...post,
    }),
  })
    .then(response => response.json())
    .then(() => {
      dispatch({
        type: UPDATE_POST_SUCCESS,
        _id: post._id,
        title: post.title,
        content: post.content,
      });
    })
    .catch((error) => {
      dispatch({
        type: UPDATE_POST_FAILURE,
        error,
      });
    });
};


/** Export Module */
module.exports = {
  addPost,
  getPosts,
  deletePost,
  updatePost,
};
