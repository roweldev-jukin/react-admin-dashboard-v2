import * as React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

import Profile from '@/Resources/images/profile.jpeg';
import styles from './Component.css';

import CustomDropdown from '@/Core/Components/CustomDropdown'

export default class extends React.PureComponent {

  static propTypes = {
    onClickSearch: PropTypes.func.isRequired
  }

  render() {
    return (
      <ul className={styles.navigation}>
        <li className="d-md-inline-block d-lg-none">
          <a onClick={this.props.onClickSearch} role="presentation">
            <i className="zmdi zmdi-search" />
          </a>
        </li>

        <li>
          <a href="https://github.com/roweldeguzman/react-admin-dashboard-v2" target="_blank" rel="noopener noreferrer">
            <i className="zmdi zmdi-github zmdi-hc-fw" />
          </a>
        </li>

        <li>
          <Dropdown>
            <Dropdown.Toggle id="color-dropdown" as={CustomDropdown} type="div" className="no-caret">
              <i className="zmdi zmdi-email" />  
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="dropdown-arrow" as="i" />
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>

        <li>
          <Dropdown>
            <Dropdown.Toggle id="color-dropdown" as={CustomDropdown} type="div" className="no-caret">
              <i className="zmdi zmdi-apps" />  
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <div>
                Rowel de Guzman
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle id="profile-dropdown" as={CustomDropdown} type="div" className="no-caret">
              <img src={Profile} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="dropdown-arrow" as="i" />
              <Dropdown.Item eventKey="1">
                <i className="" />
                Profile
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">Switch Account</Dropdown.Item>
              <Dropdown.Item eventKey="3">Logout</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Fullscreen</Dropdown.Item>
              <Dropdown.Item eventKey="5">Other Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    )
  }
}