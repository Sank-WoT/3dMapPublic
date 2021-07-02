import React, {Component} from 'react';
import { connect } from "react-redux";
import { upLevelMall } from "../actions";

class UpLevel extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
  		const { upLevelMall, valueDetailShow, currentLevelNumber, countLevels } = this.props;
  	return (
  		<React.Fragment>
			<button className={"boxbutton mallnav__button--up" + (currentLevelNumber >= countLevels ? " boxbutton--disabled" : "")} aria-label="Go up" onClick={upLevelMall}>
				<svg className="icon icon--angle-down"><use xlinkHref="#icon-angle-up"></use></svg>
			</button>
		</React.Fragment>
	);
	}
}

const mapStateToProps = state => ({
  currentLevelNumber: state.currentLevelNumber,
  countLevels: state.countLevels,
  valueDetailShow: state.valueDetailShow
});

const mapDispatchToProps = dispatch => ({
  upLevelMall: () => dispatch(upLevelMall())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UpLevel);