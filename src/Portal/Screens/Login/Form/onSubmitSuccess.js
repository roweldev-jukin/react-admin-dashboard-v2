import { push } from 'connected-react-router';

export default (result, dispatch) => {
  console.log(result);
  
  dispatch(push('/'));
  
}
