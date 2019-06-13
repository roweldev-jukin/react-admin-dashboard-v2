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
          
        </ul>
      </Scrollbar>
    );
  }
}
