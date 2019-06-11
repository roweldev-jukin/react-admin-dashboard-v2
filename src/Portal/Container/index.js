import { connect } from 'react-redux';
import Container from './Container';
import componentWillMount from '../Handlers/componentWillMount';
import { withConfig } from '../Contexts/ConfigContext';

const mapStateToProps = (state) => ({
  isStarting: state.status.isStarting
});

const actionCreators = {
  componentWillMount
}

export default withConfig(connect(mapStateToProps, actionCreators)(Container));
