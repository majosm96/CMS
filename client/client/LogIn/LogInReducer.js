const DEFAULT_STATE = {
  loading: false,
  logIn: false,
  error: '',
};

const auth = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'AUTH_USER_REQUEST':
      return {
        ...state,
        logIn: false,
      };
    case 'AUTH_USER_SUCCESS':
      return {
        ...state,
        logIn: true,
      };
    case 'AUTH_USER_FAILURE':
      return {
        ...state,
        logIn: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default auth;
