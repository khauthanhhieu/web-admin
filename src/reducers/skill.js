import * as types from '../actions/types';
import isEmpty from '../is-empty';

function createData(id, nameCart, nameSkill) {
  return {
    id,
    nameCart,
    nameSkill,
  };
}
const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
const randomID = () => `${s4() + s4()}-${s4()}-${s4()}${s4()}-${s4()}-${s4()}-${s4()}`;
const data = JSON.parse(localStorage.getItem('rows'));
const initialState = data || [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_SKILL:
      state.push(createData(randomID(), action.skill.nameCart, action.skill.nameSkill));
      localStorage.setItem('rows', JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
}
