import React, {Component} from 'react';
import { connect } from "react-redux";
import { showDetailLevel } from "../actions";

class LevelContainer extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
  		const { showDetailLevel, valueDetailShow, levelNumber, currentLevelNumber} = this.props;
  		return (
			<div id={"level-" + levelNumber}  className={"level level--" + levelNumber + (currentLevelNumber == levelNumber ? " level--current" : "")} aria-label={"Level " + levelNumber} onClick={() => showDetailLevel(levelNumber)}>	
				{this.props.children}
			</div>
		);
	}
}

const mapStateToProps = state => ({
  valueDetailShow: state.valueDetailShow,
  currentLevelNumber: state.currentLevelNumber
});

const mapDispatchToProps = dispatch => ({
  showDetailLevel: (currentLevelNumber) => dispatch(showDetailLevel(currentLevelNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelContainer);