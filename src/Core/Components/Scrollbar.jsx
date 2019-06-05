/* eslint-disable guard-for-in, no-restricted-syntax, no-console */

import * as React from 'react';
import PropTypes from 'prop-types';

import PerfectScrollbar from 'perfect-scrollbar';

const handlerNameByEvent = {
	'ps-scroll-y': 'onScrollY',
	'ps-scroll-x': 'onScrollX',
	'ps-scroll-up': 'onScrollUp',
	'ps-scroll-down': 'onScrollDown',
	'ps-scroll-left': 'onScrollLeft',
	'ps-scroll-right': 'onScrollRight',
	'ps-y-reach-start': 'onYReachStart',
	'ps-y-reach-end': 'onYReachEnd',
	'ps-x-reach-start': 'onXReachStart',
	'ps-x-reach-end': 'onXReachEnd',
};

Object.freeze(handlerNameByEvent);

export default class Scrollbar extends React.PureComponent {
  
  static propTypes = {
    type: PropTypes.string.isRequired,
    receiveRef: PropTypes.func
  }

  static defaultProps = {
    receiveRef: () => {}
  };

  ps;

  handlerByEvent = new Map();
		
	componentDidMount = () => {
		this.ps = new PerfectScrollbar(this.reference);

		Object.keys(handlerNameByEvent).forEach((key) => {
			const callback = this.props[handlerNameByEvent[key]];
			if (callback) {
				const handler = () => callback(this.reference);
				this.handlerByEvent.set(key, handler);
				this.reference.addEventListener(key, handler, false);
			}
		});
  }
  
	componentDidUpdate = () => {
		this.ps.update(this.reference);
  }

  
	componentWillUnmount = () => {
		Object.keys(this.handlerByEvent).forEach((value, key) => {
			this.reference.removeEventListener(key, value, false);
		});
		this.handlerByEvent.clear();
    this.ps.destroy(this.reference);    
  }
  
	setScrollTop = (top) => {
		if (this.reference) {
			this.reference.scrollTop = top;
			this.ps.update(this.reference);

			return true;
		}
		return false;
	}

	setScrollLeft = (left) => {
		if (this.reference) {
			this.reference.scrollLeft = left;
			this.ps.update(this.reference);

			return true;
		}
		return false;
  }
  
	propsToConf = () => {
		const obj = {};
		obj.ref = (node) => {
			if (this.props.receiveRef !== undefined){
				this.props.receiveRef(node);
			}
			this.reference = node;
		}
		for (const key in this.props) {
			if (key !== "receiveRef"){
				obj[key] = this.props[key]
			}			
		}
		return obj;
  }
  
	render() {
		return (
			React.createElement(this.props.type, this.propsToConf())
		)
	}
}