import React, {Component} from 'react';
import { connect } from "react-redux";
import { searchCabinets } from "../actions";

class InputSearch extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
  		const { inputSearch, searchCabinets } = this.props;
  		return (
			 <input className="search__input" placeholder="Поиск.." onChange={searchCabinets} />
		);
	}
}

const mapStateToProps = state => ({
  inputSearch: state.inputSearch,
});

const mapDispatchToProps = dispatch => ({
  searchCabinets: (inputSearch) => dispatch(searchCabinets(inputSearch))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputSearch);