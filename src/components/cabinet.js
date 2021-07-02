import React, {Component} from 'react';
import { connect } from "react-redux";
import { selectCabinet } from "../actions";

class Cabinet extends Component {
	constructor(props) {
    	super(props);
  	}
    shouldComponentUpdate(nextProps) {
      return (nextProps.cabinetData !== this.props.cabinetData
             || nextProps.selectCabinet !== this.props.selectCabinet);
    }
  	render() {
  		const { cabinetData, selectCabinet} = this.props;
  		return (
  			<React.Fragment>
  				<li className="list__item" data-level={cabinetData.dataLevel} data-category={cabinetData.dataCategory} data-space={cabinetData.dataSpace} onClick={() => selectCabinet(cabinetData.dataSpace, cabinetData.dataLevel)}>
  					<a href={cabinetData.href} className="list__link">{cabinetData.name}</a>
  				</li>
  			</React.Fragment>
  		);
  	}
}

const mapStateToProps = state => ({
  selectCabinet: state.selectCabinet,

});

const mapDispatchToProps = dispatch => ({
  selectCabinet: (cabinetNumber, currentLevelNumber) => dispatch(selectCabinet(cabinetNumber, currentLevelNumber))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Cabinet);