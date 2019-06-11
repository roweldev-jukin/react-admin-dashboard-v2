import * as React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-bootstrap';

import './Component.scss';

import profile from '@/Resources/images/profile.jpeg';
import Ripple from '@/Core/Components/Ripple'

export default class extends React.PureComponent {

  static propTypes = {
    showProfileAction: PropTypes.bool.isRequired,

    onClickProfile: PropTypes.func.isRequired
  }

  render() {
    const { showProfileAction } = this.props;
    
    return(
      <React.Fragment>
        
        <Ripple type="div" className="aside-profile" onClick={this.props.onClickProfile}>
          <img src={profile} />
          <div className="labeled">            
            <div className="name ellipsis">Rowel de Guzman</div>
            <div className="email ellipsis">rowel.deguzman@roweldev.com</div>
          </div>
          <div className="header-dropdown-icon">
            <i className={`${showProfileAction ? "rotate" : ""} zmdi zmdi-chevron-down zmdi-hc-fw`} />
          </div>
        </Ripple>

        <Collapse in={showProfileAction}>

          <div className="aside-dropdown">
            <ul className="list-unstyled">
              <li>
                <a>
                  <i className="zmdi zmdi-account" />
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a>
                  <i className="zmdi zmdi-swap" />
                  <span>Switch account</span>
                </a>
              </li>
              <li>
                <a>
                  <i className="zmdi zmdi-time-restore" />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        
        </Collapse>
        
      </React.Fragment>
    )
  }
}