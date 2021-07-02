import React, {Component} from 'react';
import Cabinets from './cabinets'
import InputSearch from './searchInput';
import { connect } from "react-redux";
import { closeSearch, sortCabinets } from "../actions";

class List extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
  		const { openSearchValue, closeSearch, sortCabinets } = this.props;
  		console.log("openSearchValue: " + openSearchValue);
  		return (
  		<React.Fragment>
			<aside className={"spaces-list" + (openSearchValue == true ? " spaces-list--open" : "")} id="spaces-list">
				<div className="search">
					<InputSearch/>
					<button className="boxbutton boxbutton--darker close-search" aria-label="Close details" onClick={closeSearch}>
						<svg className="icon icon--cross"><use xlinkHref="#icon-cross"></use></svg>
					</button>
				</div>
				<span className="label" onClick={sortCabinets}>
					<input id="sort-by-name" className="label__checkbox" type="checkbox" aria-label="Show alphabetically"/>
					<label className="label__text">A - Z</label>
				</span>
				<Cabinets/>
			</aside>
		  	</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
  openSearchValue: state.openSearchValue,
});

const mapDispatchToProps = dispatch => ({
  closeSearch: () => dispatch(closeSearch()),
  sortCabinets: () => dispatch(sortCabinets())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);