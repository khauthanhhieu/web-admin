import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import authentication from './authentication';
import skill from './skill';

const myApp = combineReducers({
  errors: errorReducer,
  auth: authReducer,
  authentication,
  skill,
});
export default myApp;
