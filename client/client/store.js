import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';

// Import Modules
import SetUpReducer from './SetUp/SetUpReducer';
import SinglePageReducer from './SinglePage/SinglePageReducer';

// Create logger
const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

// Reducer
const reducer = combineReducers({
  SetUp: SetUpReducer,
  SinglePage: SinglePageReducer,
});

// Create store
const store = createStore(reducer, composeWithDevTools(applyMiddleware(
  ReduxThunk,
  logger,
)));

export default store;
