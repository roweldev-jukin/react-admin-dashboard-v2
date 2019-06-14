import * as React from 'react';

import { NavLink } from 'react-router-dom';

import Scrollbar from '@/Core/Components/Scrollbar';
import Ripple from '@/Core/Components/Ripple';

export default class extends React.PureComponent {
  
  setScrollRef = () => {}

  render() {
    return (
      <Scrollbar type="nav" id="for-scroll" receiveRef={this.setScrollRef}>
        <ul className="list-unstyled navigation">
          <li>
            <Ripple type="div">
              <NavLink to="/" activeClassName="active" exact strict>
                <div>
                  <i className="zmdi zmdi-home zmdi-hc-fw" />
                </div>
                <span>Dashboards</span>
              </NavLink>
            </Ripple>
            {/* <div>
              <a>
                <i className="zmdi zmdi-home" />
                <span>Dashboard</span>
              </a>
            </div> */}
          </li>
          <li>
            <Ripple type="div">
              <NavLink to="/typography" activeClassName="active" exact strict>
                <div>
                  <i className="zmdi zmdi-format-underlined zmdi-hc-fw" />
                </div>
                <span>Typography</span>
              </NavLink>
            </Ripple>
          </li>
          
          <li>
            <Ripple type="div">
              <NavLink to="/widgets" activeClassName="active" exact strict>
                <div>
                  <i className="zmdi zmdi-lamp zmdi-hc-fw" />
                </div>
                <span>Widgets</span>
              </NavLink>
            </Ripple>
          </li>

        </ul>
        {/* <ul className="list-unstyled">

          <Ripple type="li">
            <NavLink to="/" activeClassName="active" exact strict>
              <div className="icon-circle">
                <i className="zmdi zmdi-home" />
              </div>
              <span>Dashboard</span>
            </NavLink>
          </Ripple>

          <Ripple type="li">
            <NavLink to="/typography" activeClassName="active" exact strict>
              <div className="icon-circle">
                <i className="zmdi zmdi-format-underlined" />
              </div>
              <span>Typography</span>              
            </NavLink>
          </Ripple>
          
        </ul> */}
      </Scrollbar>
    );
  }
}
