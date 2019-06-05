import { setShowProfileAction } from '../../../State/showProfileAction';

export default () => async (dispatch, getState) => {
  const { showProfileAction } = getState().common.Sidebar;
  
  dispatch(setShowProfileAction(!showProfileAction));
}