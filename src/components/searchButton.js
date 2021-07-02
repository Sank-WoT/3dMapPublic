import React, {Component} from 'react';
import { connect } from "react-redux";
import { openSearch } from "../actions";

class SerchButton extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
  		const { openSearch, openSearchValue } = this.props;
  		return (
  			<button className="boxbutton boxbutton--dark open-search" aria-label="Show search" onClick={openSearch}>
				<svg className="icon icon--search"><use xlinkHref="#icon-search"></use></svg>
			</button>
		)
	}
}

const mapStateToProps = state => ({
  openSearchValue: state.openSearchValue,
});

const mapDispatchToProps = dispatch => ({
  openSearch: () => dispatch(openSearch())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SerchButton);