import * as types from './types';

export function login(username, password) {
  return async (dispatch) => {
    await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json());
    dispatch({
      // type: LOGIN, token: result.token, user,
    });
  };
}

export const listAll = () => ({
  type: types.LIST_ALL,
});

export const addGridSkill = (skill) => ({
  type: types.ADD_SKILL,
  skill,
});

export const deleteRowSkill = (row) => ({
  type: types.DELETE_SKILL,
  row,
});

export const updateRowSkill = (row) => ({
  type: types.UPDATE_SKILL,
  row,
});
export const listAllAccount = () => ({
  type: types.LIST_ALL_ACCOUNT,

});
export const listAllComplain = () => ({
  type: types.LIST_ALL_COMPLAIN,

});

export const listAllContract = () => ({
  type: types.LIST_ALL_CONTRACT,
});

export const addGridContract = (contract) => ({
  type: types.ADD_CONTRACT,
  contract,
});

export const deleteRowContract = (row) => ({
  type: types.DELETE_CONTRACT,
  row,
});

export const updateRowContract = (row) => ({
  type: types.UPDATE_CONTRACT,
  row,
});

export const listWeekChart = () => ({
  type: types.LIST_ALL_WEEK_CHART,
});
