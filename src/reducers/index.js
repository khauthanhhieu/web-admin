import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import authentication from './authentication';
import skill from './skill';
import account from './account';
import itemupdate from './itemupdate';
import complain from './complain';
import contract from './contract';
import weekChart from './weekChart';

const myApp = combineReducers({
  errors: errorReducer,
  auth: authReducer,
  authentication,
  skill,
  account,
  itemupdate,
  complain,
  contract,
  weekChart,
});
export default myApp;
