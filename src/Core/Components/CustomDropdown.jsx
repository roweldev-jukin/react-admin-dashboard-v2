/* eslint-disable guard-for-in, no-restricted-syntax, no-console */

import * as React from 'react';
import PropTypes from 'prop-types';

import { inArray } from '@/Core/Util/helper';

export default class Ripple extends React.PureComponent {

  static propTypes = {
    type: PropTypes.string.isRequired
  }

  state = {
    allowed: ["button", "div", "li", "a", "span"]
  }

  
  propsToConfig = () => {
		const obj = {};
		obj.ref = (node) => {
			this.reference = node;
		}
		for (const key in this.props) {
			obj[key] = this.props[key]
		}
		return obj;
  }
  
  render() {

    const { type } = this.props;

    if (inArray(type, this.state.allowed)) {
			return(
				React.createElement(type, this.propsToConfig())
			)
    }
    
    console.error("Ripple Component has No correct props type is provided allow type are: ", this.state.allowed.toString())
		return null	
  }
}