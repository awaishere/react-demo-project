import { toast } from 'react-toastify';
import { UserActions } from '../../store/actions';

export default () => next => action => {
  return typeof action === 'function'
    ? next(async (dispatch, getState) => {
      try {
        return await action(dispatch, getState);
      } catch (error) {
        dispatch(UserActions.hideHUD());
        let response = error.response;
        if (response && (response.data || response.statusText)) {

          if (response.config.url) {
            toast.error(
              response.data && response.data.errors
                ? response.data.errors.join(', ')
                : response.statusText
            );
          }
        } else if (error && error.message) {
          if (!error.message === 'Network Error') {
            toast.error(error.message);
          }
        } else {
          throw error;
        }
      }
    })
    : next(action);
};
