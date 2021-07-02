import React, {Component} from 'react';
import LevelContainer from "./levelContainer.js";
import Level from "./level.js";
import Level1 from "./levels/level1.js";
import Level2 from "./levels/level2.js";
import { connect } from "react-redux";
import { setCountLevel, selectArea } from "../actions";

class Levels extends Component {
	constructor(props) {
    	super(props);
  	}

  	render() {
  		const { valueDetailShow, currentLevelNumber, countLevels, setCountLevel, selectArea} = this.props;
  		return (
			<div className={"levels " + (valueDetailShow == true ? "levels--selected-" + currentLevelNumber : "")} onClick={() => setCountLevel()}>
				<LevelContainer levelNumber={1}>
					<Level levelNumber="1" viewBox="0 0 95 60">  
						  <Level1 onClick={selectArea}/>
					</Level>
				</LevelContainer>

				<LevelContainer levelNumber={2}>
					<Level levelNumber="2" viewBox="0 0 375 250">
						<Level2/>
					 </Level>
				</LevelContainer>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  valueDetailShow: state.valueDetailShow,
  currentLevelNumber: state.currentLevelNumber
});

const mapDispatchToProps = dispatch => ({
  setCountLevel: () => dispatch(setCountLevel())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Levels);