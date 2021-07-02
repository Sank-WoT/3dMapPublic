import React, {Component} from 'react';
export default class Level extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
  		return (
			<svg className={"map map--" + this.props.levelNumber} viewBox={this.props.viewBox} width="100%" height="100%">
				{this.props.children}
			</svg>
		);
	}
}