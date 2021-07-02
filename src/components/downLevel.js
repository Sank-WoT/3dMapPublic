import React, {Component} from 'react';
import { connect } from "react-redux";
import { downLevelMall } from "../actions";

class DownLevel extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
  		const { valueDetailShow, currentLevelNumber, downLevelMall } = this.props;
  		console.log(this.props);
  	return (
			<button className={"boxbutton mallnav__button--down" + (currentLevelNumber > 1 ? "": " boxbutton--disabled") } aria-label="Go down" onClick={downLevelMall}>
				<svg className="icon icon--angle-down"><use xlinkHref="#icon-angle-down"></use></svg>
			</button>
	);
	}
}

const mapStateToProps = state => ({
  currentLevelNumber: state.currentLevelNumber,
  valueDetailShow: state.valueDetailShow
});

const mapDispatchToProps = dispatch => ({
  downLevelMall: () => dispatch(downLevelMall())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DownLevel);