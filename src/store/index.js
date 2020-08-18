import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import immutableTransform from 'redux-persist-transform-immutable';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { API_URL } from '../constants';
import axios from 'axios';
import errorHandler from '../utils/middlewares/errorHandler';

const middlewares = [errorHandler, thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(...middlewares)));

const persistor = persistStore(store);

const makeHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'AUTH-TOKEN': localStorage.getItem('auth_token'),
  };
};

const client = () => {
  return axios.create({
    baseURL: API_URL,
    headers: makeHeaders(),
    timeout: 5000,
    timeoutErrorMessage: 'Oops, Internet seems down! Please check your connection!',
  });
};

export { store, persistor, client };
