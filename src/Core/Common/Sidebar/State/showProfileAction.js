import { createAction, handleActions } from 'redux-actions';

const setShowProfileAction = createAction("COMMON/SIDEBAR/SHOW_PROFILE_ACTION");

const defaultState = false;

const reducer = handleActions(
  {
    [setShowProfileAction]: (state, action) => action.payload,
  },
  defaultState
);

export { setShowProfileAction, reducer };
