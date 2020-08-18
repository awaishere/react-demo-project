import api from '../api';
import { setToken, unsetToken } from './helpers';
import { client } from '../index';

export const showHUD = () => {
  return { type: 'SHOW_HUD' };
};

export const hideHUD = () => {
  return { type: 'HIDE_HUD' };
};

export const setCurrentUser = data => {
  let user = data;
  localStorage.setItem('auth_token', user.attributes.auth_token);
  setToken(user.attributes.auth_token);

  return {
    type: 'SET_CURRENT_USER',
    payload: user,
  };
};

export const signUp = payload => async dispatch => {
  dispatch(showHUD());
  const { data } = await client().post(api.signUp(), { athlete: payload });
  dispatch(hideHUD());

  dispatch(setCurrentUser(data.data));
};