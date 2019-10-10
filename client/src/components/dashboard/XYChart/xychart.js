import React, { Component } from "react";

import "../dashboard.css";
import Navbar from "../../layout/Navbar";
import SideNav from "../../layout/SideNav";
import XYChartDiv from "../../amchart/xyChart";
import XYChartDiv2 from "../../amchart/xyChart2";

class XYChart extends Component {
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
            <XYChartDiv />
            <XYChartDiv2 />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default XYChart;
