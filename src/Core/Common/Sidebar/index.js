import { connect } from 'react-redux';

import Component from './Component';

import onHoverAside from './Handlers/onHoverAside';

const mapStateToProps = () => ({});

const actionCreators = {
  onHoverAside
};

export default connect(mapStateToProps, actionCreators)(Component);