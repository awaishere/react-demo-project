import { combineReducers } from "redux"
import { Map } from 'immutable'

const initialMap = {
  all_products: [],
}

function users(state = Map(initialMap), action) {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return state.set("products", action.payload.products)
    default:
      return state;
  }
}

export default combineReducers({
  users: users
})