import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import setAuthToken from '../setAuthToken';


export const registerUser = (user, history) => (dispatch) => {
  axios.post('/api/users/register', user)
    .then((res) => history.push('/login'))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const setCurrentUser = (decoded) => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const loginUser = (user) => (dispatch) => {
  axios.post('/api/users/login', user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      localStorage.setItem('userInfo', user);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
export const getUser = () => (dispatch) => {
  axios.get('/api/users/me')
    .then((res) => {
      const { user } = res.data;
      localStorage.setItem('userInfo', user);
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};


export const logoutUser = (history) => (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push('/login');
};
