import { connect } from 'react-redux';

import Component from './Component';

import onClickProfile from './Handlers/onClickProfile';

const mapStateToProps = (state) => ({
  showProfileAction: state.common.Sidebar.showProfileAction
});

const actionCreators = {
  onClickProfile
};

export default connect(mapStateToProps, actionCreators)(Component);