import Cookies from 'js-cookie';
import {
  LOGIN, LOGOUT, REGISTER,
} from './types';

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
    }).then((res) => res.json())
    dispatch({
      //type: LOGIN, token: result.token, user,
    });
  }
}