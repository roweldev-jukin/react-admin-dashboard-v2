import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import onSubmit from './Form/onSubmit';
import onSubmitSuccess from './Form/onSubmitSuccess';
import onSubmitFail from './Form/onSubmitFail';
import Component from './Component';

import { withConfig } from '../../Contexts/ConfigContext';

const formConfig = {
  form: 'Login',
  initialValues: {
    username: "admin",
    password: "admin"
  },
  onSubmit,
  onSubmitSuccess,
  onSubmitFail
}

const mapStateToProps = () => ({})

export default withConfig(connect(mapStateToProps)(reduxForm(formConfig)(Component)));

