import User from './Users/reducers'
import Alert from './Alert/reducers'
import { combineReducers } from 'redux'

const appReducer = combineReducers({
  User,
  Alert
})

const rootReducer = (state, action) => {
  if (action.type === "RESET_STATE") {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer