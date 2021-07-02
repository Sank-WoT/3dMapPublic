import React, {Component} from 'react';
import { connect } from "react-redux";

class Bg extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
  		const { valueDetailShow } = this.props;
  		return (
		<div className={"surroundings " + (valueDetailShow == true ? "surroundings--hidden" : "") }>
			<img className="surroundings__map" src="/img/surroundings.svg" alt="Surroundings"/>
		</div>
		);
	}
}

const mapStateToProps = state => ({
  valueDetailShow: state.valueDetailShow
});

export default connect(
  mapStateToProps,
)(Bg);