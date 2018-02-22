const DEFAULT_STATE = {
  loading: false,
  pages: [],
  error: '',
};

const pages = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_PAGES_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_PAGES_SUCCESS':
      return {
        ...state,
        loading: false,
        pages: action.pages,
      };
    case 'GET_PAGES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'ADD_PAGE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_PAGE_SUCCESS':
      return {
        ...state,
        loading: false,
        pages: [...state.pages, action.page],
      };
    case 'ADD_PAGE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'DELETE_PAGE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'DELETE_PAGE_SUCCESS':
      return {
        ...state,
        loading: false,
        pages: state.pages.filter((item) => {
          return item.id !== action.id;
        }),
      };
    case 'DELETE_PAGE_FAILURE':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default pages;
