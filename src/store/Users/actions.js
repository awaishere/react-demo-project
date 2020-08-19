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

// export const signIn = payload => async dispatch => {
//   dispatch(showHUD());
//   const { data } = await client().post(api.signIn(), { user: payload });
//   console.log("response====> ", data)
//   if (data.data) {
//     dispatch(setCurrentUser(data.data));
//     toast.success('Logged in Successfully');
//     dispatch(hideHUD());
//   } else {
//     toast.error('Invalid Credentails!');
//   }
//   dispatch(hideHUD());
//   return data
// };

export const signIn = payload => async dispatch => {
  dispatch(showHUD());
  const { data } = await client().post(api.signIn(), { user: payload });
  dispatch(setCurrentUser(data.data));
  toast.success('Logged in Successfully');
  dispatch(hideHUD());
  return data
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

export const getArticles = () => async dispatch => {
  const { data } = await client().get(api.getArticles());
  dispatch({ type: 'SET_ARTICLES', payload: data.data })
}

export const getArticle = id => async dispatch => {
  const { data } = await client().get(api.getArticle(id));
  dispatch({ type: 'SET_ARTICLE', payload: data })
}

export const deleteArticle = id => async () => {
  await client().delete(api.deleteArticle(id))
  toast.error("Article is deleted.")
}

export const editArticle = (id, payload) => async dispatch => {
  dispatch(showHUD());
  const { data } = await client().patch(api.editArticle(id), { article: payload })
  if (data.data) {
    toast.success('Article is updated successfully!');
    dispatch({ type: 'SET_ARTICLE', payload: data.data })
    dispatch(hideHUD());
    return 1
  }
  else {
    toast.error('Invalid title or description!');
  }
  dispatch(hideHUD());
}

export const createArticle = (payload) => async dispatch => {
  dispatch(showHUD());
  const { data } = await client().post(api.createArticle(), { article: payload })
  console.log("data ====>", data)
  if (data.data) {
    toast.success('Article is added successfully!');
    dispatch({ type: 'SET_ARTICLE', payload: data.data })
    dispatch(hideHUD());
    return data.data.id
  }
  else {
    toast.error('Invalid title or description!');
  }
  dispatch(hideHUD());
}

export const logoutPressed = () => async dispatch => {
  dispatch({ type: 'RESET_STATE' });
};
