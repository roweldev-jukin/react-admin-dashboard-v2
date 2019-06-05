import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Scrollbar from '@/Core/Components/Scrollbar';
import Ripple from '@/Core/Components/Ripple';

export default class extends React.PureComponent {

  setScrollRef = () => {}

  render() {
    return (
      <Scrollbar type="nav" id="for-scroll" receiveRef={this.setScrollRef}>
        <ul className="list-unstyled">
          <li>
            <NavLink to="/" activeClassName="active" exact strict>
              <Ripple type="div">
                <div className="icon-circle">
                  <i className="zmdi zmdi-home" />
                </div>
                <span>Dashboard</span>
              </Ripple>
            </NavLink>
          </li>

          <li>
            <NavLink to="/manage" activeClassName="" exact strict>
              <Ripple type="div">
                <div className="icon-circle">
                  <i className="zmdi zmdi-home" />
                </div>
                <span>Manage</span>
              </Ripple>
            </NavLink>
          </li>

          <li>
            <NavLink to="/vehicles" activeClassName="active" exact strict>
              <Ripple type="div">
                <div className="icon-circle">
                  <i className="zmdi zmdi-home" />
                </div>
                <span>Vehicles</span>
              </Ripple>
            </NavLink>
          </li>

          <li>
            <NavLink to="/users" activeClassName="active" exact strict>
              <Ripple type="div">
                <div className="icon-circle">
                  <i className="zmdi zmdi-home" />
                </div>
                <span>Users</span>
              </Ripple>
            </NavLink>
          </li>

          
          
        </ul>
      </Scrollbar>
    );
  }
}
