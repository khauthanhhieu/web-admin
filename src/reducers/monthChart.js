import * as types from '../actions/types';

const data = JSON.parse(localStorage.getItem('dataMonth'));
const initialState = data || [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LIST_ALL_MONTH_CHART:
      return state;
    default:
      return state;
  }
}
