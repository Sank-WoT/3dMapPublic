import React, {Component} from 'react';
import { connect } from "react-redux";
import { showAllLevels } from "../actions";

class StackAllLevels extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
  		const { showAllLevels, valueDetailShow } = this.props;
  		return (
  			<React.Fragment>
				<button className="boxbutton boxbutton--dark mallnav__button--all-levels" aria-label="Back to all levels" onClick={showAllLevels}>
					<svg className="icon icon--stack"><use xlinkHref="#icon-stack"></use></svg>
				</button>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
  valueDetailShow: state.valueDetailShow,
});

const mapDispatchToProps = dispatch => ({
  showAllLevels: () => dispatch(showAllLevels())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(StackAllLevels);