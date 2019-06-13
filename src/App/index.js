import { connect } from "react-redux";

import Component from "./Component";

import componentDidMount from './Handlers/componentDidMount';
import onClickOverlay from './Handlers/onClickOverlay';

const mapStateToProps = () => ({});

const actionCreators = {
  componentDidMount,
  onClickOverlay
};

export default connect(mapStateToProps,actionCreators)(Component);
