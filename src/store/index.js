import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../store/reducers'
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import Errorhandler from '../utills/middlewares/Errorhandler'
const middlewares = [Errorhandler, thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(...middlewares)))
let persistor = persistStore(store)

export { store, persistor }