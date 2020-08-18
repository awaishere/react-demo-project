import User from './Users/reducers'
import { combineReducers } from 'redux'

const appReducer = combineReducers({
  User
})

const rootReducer = (state, action) => {
  if (action.type === "RESET_STATE") {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer