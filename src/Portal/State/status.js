import { createAction, handleActions } from 'redux-actions';
import { assign } from 'lodash';

const defaultState = {
  isStarting: true
};

export const setIsStarting = createAction('PORTAL/STATUS/SET_IS_STARTING');

export const reducer = handleActions(
  {
    [setIsStarting]: (state, action) => assign({}, state, { isStarting: !!action.payload })
  },
  defaultState
);

export default { setIsStarting, reducer };
