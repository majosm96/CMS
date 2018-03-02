/** Dafault State */
const DEFAULT_STATE = {
  loading: false,
  posts: [],
  error: '',
};

const posts = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_POSTS_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.posts,
      };
    case 'GET_POSTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'ADD_POST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.post],
      };
    case 'ADD_POST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'DELETE_POST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((item) => {
          return item._id !== action._id;
        }),
      };
    case 'DELETE_POST_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    case 'UPDATE_POST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'UPDATE_POST_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: state.posts.map((item) => {
          if (item._id === action._id) {
            item.title = action.title;
            item.content = action.content;
          }
          return item;
        }),
      };
    case 'UPDATE_POST_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

/** Export Module */
export default posts;
