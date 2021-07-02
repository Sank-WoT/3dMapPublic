import React, {Component} from 'react';
import { connect } from "react-redux";

class CabinetDescripton extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
  		const { cabinetDescription, selectCabinet } = this.props;
  		return (
  			<div className="content__item content__item--current" data-space={cabinetDescription.dataSpace} data-category={cabinetDescription.dataCategory}>
				<h3 className="content__item-title">{cabinetDescription.dataName}</h3>
				<div className="content__item-details">
					<p className="content__meta">
						<span className="content__meta-item"><strong>Время работы:</strong>{cabinetDescription.dataTime}</span> 
						<span className="content__meta-item"><strong>Телефон:</strong>{cabinetDescription.dataPhone}</span>
					</p>
					<p className="content__desc">{cabinetDescription.dataDescription}</p>
				</div>
			</div>
  		);
  	}
 }

const mapStateToProps = state => ({
  selectCabinet: state.selectCabinet,
});

export default connect(
	mapStateToProps,
)(CabinetDescripton);