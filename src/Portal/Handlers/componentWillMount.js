import { setIsStarting } from '../State/status';

export default () => async (dispatch) => {
  
  dispatch(setIsStarting(true));
 

  setTimeout(() => dispatch(setIsStarting(false)), 1000);
  
}