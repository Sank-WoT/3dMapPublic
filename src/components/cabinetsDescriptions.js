import CabinetDescripton from "./cabinetDescription.js";
import React, {Component} from 'react';
import { connect } from "react-redux";
import { closeDetail } from "../actions";

class CabinetsDescription extends Component {
  	render() {
  		const { cabinetDescription, showContent} = this.props;
  		console.log("cabinetDescription: " + cabinetDescription);
  		return (
			<div className="content">
				{cabinetDescription.map((cabinet, i) => {         
       			return (<CabinetDescripton key={i} cabinetDescription={cabinet}/>)
    		})}
        <button className={"boxbutton boxbutton--dark content__button" + (showContent == true ? "" : " mallnav--hidden")} aria-label="Close details" onClick={closeDetail}>
          <svg className="icon icon--cross"><use xlinkHref="#icon-cross"></use></svg>
        </button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  cabinetDescription: state.cabinetDescription,
  showContent: state.showContent
});

const mapDispatchToProps = dispatch => ({
  closeDetail: () => dispatch(closeDetail()),
});
export default connect(
	mapStateToProps,
  mapDispatchToProps
)(CabinetsDescription);