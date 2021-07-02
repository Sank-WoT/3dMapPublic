import React, {Component} from 'react';
import { connect } from "react-redux";
import Cabinet from './cabinet';
class Cabinets extends Component {
	constructor(props) {
    	super(props);
  	}
  	render() {
  		const { cabinetData, inputSearch} = this.props;
      var cabinets = cabinetData.filter(function(el) {
        return el.name.toLowerCase().indexOf(inputSearch.toLowerCase()) > -1;
      })
      var cabinets = JSON.parse(JSON.stringify(cabinets));
  		return (
			<ul className="list grouped-by-category">
			 	{
          cabinets.map((cabinet, i) => {         
            return (<Cabinet key={i} cabinetData={cabinet}/>)
    		  })
        }
			</ul>
		);
	}
}

const mapStateToProps = state => ({
  cabinetData: state.cabinetData,
  inputSearch: state.inputSearch
});

export default connect(
	mapStateToProps,
)(Cabinets);