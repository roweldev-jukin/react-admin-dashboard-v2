import { connect } from 'react-redux';

import Component from './Component';
import onClickCloseSearch from './Handlers/onClickCloseSearch'

const mapStateToProps = () => ({});

const actionCreators = {
  onClickCloseSearch
};

export default connect(mapStateToProps, actionCreators)(Component);