import React, {Component} from 'react';
import { connect } from "react-redux";
import Bg from "./components/bg.js";
import Levels from "./components/levels.js";
import Sitebar from "./components/sitebar.js";
import List from "./components/listCabinet.js";
import CabinetsDescription from "./components/cabinetsDescriptions.js";
import SerchButton from "./components/searchButton.js";
import { incrementAction, clearArea } from "./actions";

class Mall extends Component {
  render() {
    const { valueDetailShow, clearArea } = this.props;
    return (
    <React.Fragment>
    <img className={"arrow-r" + (valueDetailShow == false ? "" : " mallnav--hidden")} src="./img/arrow-r.png"/>
    <img className={"arrow-l" + (valueDetailShow == false ? "" : " mallnav--hidden")} src="./img/arrow-l.png"/>
    <img className="clear" src="./img/clear.png" onClick={clearArea}/>
      <div className="container">
      <h1 className={"title" + (valueDetailShow == false ? "" : " mallnav--hidden")}>{this.props.name}</h1>
        <div className="main">    
          <div className="mall">
            <Bg/>
            <Levels/>
            <CabinetsDescription/>
          </div>
          <SerchButton/>
          <Sitebar/>
        </div>
        <List/>
      </div>
    </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  valueDetailShow: state.valueDetailShow
});

const mapDispatchToProps = dispatch => ({
  incrementAction: () => dispatch(incrementAction()),
  clearArea: () => dispatch(clearArea()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mall);
