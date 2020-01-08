import * as types from '../actions/types';

const data = JSON.parse(localStorage.getItem('accountList'));
const initialState = data || [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LIST_ALL_ACCOUNT:
      return state;
    default:
      return state;
  }
}
