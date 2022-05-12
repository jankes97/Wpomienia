import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, START_LONDING, END_LONDING } from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LONDING:
      return { ...state, isLoading: true };
      case END_LONDING:
        return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
    };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload};
    case FETCH_POST:
      return { ...state, post: action.payload};
    case LIKE:
      return { ...state, posts: state.map((post) => (post._id === action.payload._id ? action.payload : post))};
    case CREATE:
      return { ...state, posts: [...state, action.payload]};
    case UPDATE:
      return { ...state, posts: state.map((post) => (post._id === action.payload._id ? action.payload : post))};
    case DELETE:
      return { ...state, posts: state.filter((post) => post._id !== action.payload)};
    default:
      return state;
  }
};