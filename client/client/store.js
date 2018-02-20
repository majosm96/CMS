import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';

import SetUpReducer from './SetUp/SetUpReducer';

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

const store = createStore(SetUpReducer, composeWithDevTools(applyMiddleware(
  ReduxThunk,
  logger,
)));

export default store;
