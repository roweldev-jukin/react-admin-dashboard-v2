import { connect } from "react-redux";

import Component from "./Component";

import componentDidMount from './Handlers/componentDidMount';

const mapStateToProps = () => ({
  
});

const actionCreators = {
  componentDidMount
};

export default connect(mapStateToProps,actionCreators)(Component);
