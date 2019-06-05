import { connect } from 'react-redux';

import Component from './Component';
import onClickHamburger from './Handlers/onClickHamburger';

const mapStateToProps = () => ({});

const actionCreators = {
  onClickHamburger
};

export default connect(mapStateToProps, actionCreators)(Component);