import React, {Component} from 'react';
import { connect } from "react-redux";
import StackAllLevels from "./stackAllLevels.js";
import UpLevel from "./upLevel.js";
import DownLevel from "./downLevel.js";



class Sitebar extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
  		const { valueDetailShow, showContent  } = this.props;
  		return (
  			<React.Fragment>
				<nav className={"mallnav" + (valueDetailShow == true ? "" : " mallnav--hidden")}>
					<UpLevel/>
					<StackAllLevels/>
					<DownLevel/>
				</nav>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
  valueDetailShow: state.valueDetailShow,
  showContent: state.showContent
});



export default connect(
  mapStateToProps
)(Sitebar);