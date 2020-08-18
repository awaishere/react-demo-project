import { combineReducers } from 'redux';
import { Map } from 'immutable';

const userDefault = {
  currentUser: null,
};

const metaDefault = {
  showHUD: false
};

function metaReducer(state = Map(metaDefault), action) {
  switch (action.type) {
    case 'SHOW_HUD':
      return state.set('showHUD', true);

    case 'HIDE_HUD':
      return state.set('showHUD', false);

    default:
      return state;
  }
}

const currentUserReducer = (state = Map(userDefault), action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return state.set('currentUser', action.payload);

    default:
      return state;
  }
};

export default combineReducers({
  meta: metaReducer,
  current: currentUserReducer,
});
