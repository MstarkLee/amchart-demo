import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.css";

// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

import Landing from "./components/home/Landing";
import Movie from "./components/home/Movie";

import store from "./store";
import RecaptchForm from "./components/recaptcha/recaptcha";
import DashBoard from "./components/dashboard/dashboard";
import PieChartCom from "./components/dashboard/piechart/PieChartCom";
import XYChart from "./components/dashboard/XYChart/xychart";
import Radio from "./components/dashboard/radiochart/RadioChart";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={RecaptchForm} />
            <Route exact path="/home" component={Landing} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/dashboard/xychart" component={XYChart} />
            <Route exact path="/dashboard/piechart" component={PieChartCom} />
            <Route exact path="/dashboard/radar" component={Radio} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
