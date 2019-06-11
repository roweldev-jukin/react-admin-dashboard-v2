export default async (values, dispatch, props) => {

  const { config } = props;
  
  const username = config.login.usernameIsEmail ? 'email' : 'username';

  // this is the information that you will send to server

  const data = {
    [username]: values.username,
    password: values.password
  }

  localStorage.setItem('auth', data)

}

