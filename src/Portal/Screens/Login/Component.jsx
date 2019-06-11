import * as React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Components/Wrapper';
import BrandingPanel from './Components/BrandingPanel';
import FormPanel from './Components/FormPanel';
import Form from './Components/Form';
import VersionInfo from './Components/VersionInfo';

export default class extends React.PureComponent {

  static propTypes = {
    config: PropTypes.object.isRequired,
    submitting: PropTypes.bool.isRequired,
    error: PropTypes.any,
    
    submit: PropTypes.func.isRequired
  }  

  static defaultProps = {
    error: ""
  }

  render () {
    
    const { config, submitting, error, submit } = this.props;

    return (
      <Wrapper>

        <BrandingPanel theme={config.theme.login} />

        <FormPanel theme={config.theme.login}>
        
          <Form
            theme={config.theme.login}
            usernameIsEmail={config.login.usernameIsEmail}
            usernamePlaceholder={config.login.usernamePlaceholder}
            submit={submit}
            submitting={submitting}
            error={error}
          />

          <VersionInfo />

        </FormPanel>

      </Wrapper>
    )
  }
}

