import React, { Component } from "react";

import "./dashboard.css";
import Navbar from "../layout/Navbar";
import SideNav from "../layout/SideNav";
import ChartDiv from "../amchart/chart";
import PieChartDiv from "../amchart/PieChart";
import PieChartDiv2 from "../amchart/PieChat2";
import XYChartDiv from "../amchart/xyChart";
import XYChartDiv2 from "../amchart/xyChart2";
import RadioChart from "../amchart/RadarChart";
import RadioChart2 from "../amchart/RadioChart2";

class DashBoard extends Component {
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
            <div className="row">
              <div className="col-4">
                <RadioChart />
              </div>
              <div className="col-4">
                <PieChartDiv />
              </div>
              <div className="col-4">
                <XYChartDiv2 />
              </div>
            </div>
            <ChartDiv />
            <XYChartDiv />

            <PieChartDiv2 />
            <RadioChart2 />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoard;
