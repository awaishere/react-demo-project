import { combineReducers } from "redux"
import { Map } from 'immutable'

export default combineReducers({
  users: users
})

const initialMap = {
  products: [],
  query: '',
  all_products: [],
}

function users(state = Map(initialMap), action) {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return state.set("products", action.payload.products)
        .set('all_products', action.payload.products);
    default:
      return state;
  }
}