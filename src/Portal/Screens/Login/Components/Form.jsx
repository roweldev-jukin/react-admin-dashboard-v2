import * as React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import styles from './Form.css';

export default class extends React.PureComponent {

  static propTypes = {
    theme: PropTypes.object.isRequired,
    usernameIsEmail: PropTypes.bool.isRequired,
    usernamePlaceholder: PropTypes.string.isRequired,
    submitting: PropTypes.bool.isRequired,
    error: PropTypes.any,

    submit: PropTypes.func.isRequired
  }

  static defaultProps = {
    error: ""
  }

  render () {
    const {
      theme,
      usernameIsEmail,
      usernamePlaceholder,
      submitting,
      error,
      submit
    } = this.props;

    const override = {
    
      heading: {
        color: theme.headingColor
      },
  
      subheading: {
        color: theme.subheadingColor
      },
  
      label: {
        color: theme.labelTextColor
      },
  
      input: {
        color: theme.inputTextColor,
        borderColor: theme.inputBorderColor
      },
  
      submitButton: {
        backgroundColor: theme.submitButtonColor,
        color: theme.submitButtonTextColor
      }
  
    }
    

    return (
      <div className={`${styles.loginForm}`}>

        <div className={styles.heading} style={override.heading}>
          
          {'Sign in to the Template.'}

          <div className={styles.subheading} style={override.subheading}>
            {'Enter your details below.'}
          </div>

        </div>
        
        {error && (
          <div className={styles.invalid}>
            {error}
          </div>
        )}

        <div>
          
          <label htmlFor="username" className={styles.label} style={override.label}>
            {usernameIsEmail ? 'Email Address' : 'Username'}
          </label>

          <Field
            id="username"
            name="username"
            component="input"
            autoComplete="off"
            className={styles.usernameField}
            style={override.input}
            placeholder={usernamePlaceholder}
            disabled={submitting}
            onBlur={e => e.target.value.length > 0 ? e.target.classList.add(styles.active) : e.target.classList.remove(styles.active)}
            onKeyPress={e => e.which === 13 && submit()}
          />

        </div>

        <div>

          <label htmlFor="password" className={styles.label} style={{ color: theme.labelTextColor }}>
            {'Password'}
          </label>
        
          <Field
            id="password"
            name="password"
            component="input"
            type="password"
            autoComplete="off"
            className={styles.passwordField}
            style={override.input}
            placeholder="Enter your password"
            disabled={submitting}
            onBlur={e => e.target.value.length > 0 ? e.target.classList.add(styles.active) : e.target.classList.remove(styles.active)}
            onKeyPress={e => e.which === 13 && submit()}
          />

        </div>
        
        <button className={styles.submitButton} style={override.submitButton} onClick={submit} type="submit" disabled={submitting}>
          {submitting ? 'Authenticating' : 'Sign In'}
        </button>
        
      </div>
    )
  }
}
 
