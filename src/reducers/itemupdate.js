import * as types from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_SKILL:
      return action.row;
    case types.UPDATE_CONTRACT:
      return action.row;
    default:
      return state;
  }
}
