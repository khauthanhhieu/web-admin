import * as types from '../actions/types';
import isEmpty from '../is-empty';

function createData(id, nameCart, nameContract) {
  return {
    id,
    nameCart,
    nameContract,
  };
}
// const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// const randomID = () => `${s4() + s4()}-${s4()}-${s4()}${s4()}-${s4()}-${s4()}-${s4()}`;

const data = JSON.parse(localStorage.getItem('contractList'));
const initialState = data || [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LIST_ALL_CONTRACT:
      return state;
    case types.ADD_CONTRACT:
      state.push(createData(state.length, action.contract.nameCart, action.contract.nameContract));
      localStorage.setItem('contractList', JSON.stringify(state));
      return [...state];
    case types.DELETE_CONTRACT:
      state.splice(action.row, 1);
      localStorage.setItem('contractList', JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}
