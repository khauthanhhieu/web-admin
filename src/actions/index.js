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
