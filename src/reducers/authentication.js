import {
  LOGIN, LOGOUT, REGISTER,
} from '../actions/types';

const initState = {
  user: undefined,
  authed: false,
};

export default function auth(state = initState, actions) {
  switch (actions.type) {
    case LOGIN:
      return {
        ...state,
        user: actions.user,
        authed: (actions.token !== undefined),
      };
    case LOGOUT:
      return initState;
    default:
      return state;
  }
}
