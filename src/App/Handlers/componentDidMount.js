import { push } from 'connected-react-router'

export default () => async (dispatch) => {
  if(!localStorage.getItem('auth')) {
    dispatch(push('/login'));
  }
}