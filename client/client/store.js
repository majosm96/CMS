import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';

/** Import Modules */
import SetUpReducer from './SetUp/SetUpReducer';
import LogInReducer from './LogIn/LogInReducer';
import SinglePageReducer from './SinglePage/SinglePageReducer';
import PostReducer from './Post/PostReducer';

/** Create logger */
const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

/** Reducer */
const reducer = combineReducers({
  SetUp: SetUpReducer,
  SinglePage: SinglePageReducer,
  Post: PostReducer,
  LogIn: LogInReducer,
});

/** Create store */
const store = createStore(reducer, composeWithDevTools(applyMiddleware(
  ReduxThunk,
  logger,
)));

/** Export Store */
export default store;
