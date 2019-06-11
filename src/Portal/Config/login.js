import { push } from 'connected-react-router';

export default {

  onSuccess: () => (dispatch) => dispatch(push('/')),

  onFailure: () => () => null,

  usernameIsEmail: false,

  usernamePlaceholder: "johnsmith"

}