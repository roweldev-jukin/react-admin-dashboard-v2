import { connect } from 'react-redux';

import Component from './Component';
import onClickSearch from './Handlers/onClickSearch'

const mapStateToProps = () => ({});

const actionCreators = {
  onClickSearch
};

export default connect(mapStateToProps, actionCreators)(Component);