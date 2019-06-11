import { createAction, handleActions } from 'redux-actions';

const setUser = createAction('PORTAL/USER/SET_USER');
const unsetUser = createAction('PORTAL/USER/UNSET_USER');

const defaultState = null;

const reducer = handleActions(
  {
    [setUser]: (state, action) => action.payload,
    [unsetUser]: () => null
  },
  defaultState
);

export { setUser, unsetUser, reducer };
