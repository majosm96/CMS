import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';

import SetUpReducer from './SetUp/SetUpReducer';
import SinglePageReducer from './SinglePage/SinglePageReducer';

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

const reducer = combineReducers({
  SetUp: SetUpReducer,
  SinglePage: SinglePageReducer,
});


const store = createStore(reducer, composeWithDevTools(applyMiddleware(
  ReduxThunk,
  logger,
)));

export default store;
