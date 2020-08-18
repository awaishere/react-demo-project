import api from '../api';
import { setToken, unsetToken } from './helpers';
import { toast } from 'react-toastify';
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
  return {
    type: 'SET_CURRENT_USER',
    payload: user,
  };
};

export const signIn = payload => async dispatch => {
  dispatch(showHUD());
  const { data } = await client().post(api.signIn(), { user: payload });
  if (data.data) {
    dispatch(setCurrentUser(data.data));
    toast.success('Logged in Successfully');
    dispatch(hideHUD());
    return 1
  } else {
    toast.error('Invalid Credentails!');
  }
  dispatch(hideHUD());

};

export const signUp = payload => async dispatch => {
  dispatch(showHUD());
  const { data } = await client().post(api.signUp(), { user: payload });
  if (data.data) {
    dispatch(setCurrentUser(data.data));
    toast.success('Logged in Successfully');
    dispatch(hideHUD());
    return 1
  } else {
    toast.error('Invalid email or username!');
  }
  dispatch(hideHUD());
};

