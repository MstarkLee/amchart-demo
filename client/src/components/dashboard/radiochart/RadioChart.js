import React, { Component } from "react";

import "../dashboard.css";
import Navbar from "../../layout/Navbar";
import SideNav from "../../layout/SideNav";
import RadioChart from "../../amchart/RadarChart";
import RadioChart2 from "../../amchart/RadioChart2";

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="row">
          <SideNav />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <RadioChart />
            <RadioChart2 />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default Radio;
