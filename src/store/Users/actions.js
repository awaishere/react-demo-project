import api from '../../store/api'
import axios from 'axios'
import { storeToken, removeToken } from './helpers'

const getProducts = () => async dispatch => {
  let { data } = await axios.get(api.getProducts());
  dispatch({ type: "GET_ALL_PRODUCTS", payload: { products: data } })
}

export {
  getProducts
}
