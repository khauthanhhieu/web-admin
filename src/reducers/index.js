import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import authentication from './authentication';

const myApp = combineReducers({
  errors: errorReducer,
  auth: authReducer,
  authentication,
});
export default myApp;
