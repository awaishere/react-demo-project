import api from '../../store/api'
import axios from 'axios'
import { storeToken, removeToken } from './helpers'

const authenticateUser = (credentails) => async dispatch => {
  axios.defaults.headers.common = {
    'Content-Type': 'application/json',
    Accept: 'application/json',  //working for android
  }
  let response = await axios.post(api.authenticateUser(), { authentication: credentails });
  return response;
}

const getProducts = () => async dispatch => {
  let { data } = await axios.get(api.getProducts());
  dispatch({ type: "GET_ALL_PRODUCTS", payload: { products: data } })
}

const logout = () => dispatch => {
  dispatch({ type: 'RESET_STATE' });
}

export {
  authenticateUser,
  getProducts,
  logout
}
