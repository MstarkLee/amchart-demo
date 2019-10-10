import React, { Component } from "react";
import Recaptcha from "react-google-invisible-recaptcha";

import "./recaptch.css";

class RecaptchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    if ("" === this.state.value) {
      alert("Validation failed! Input cannot be empty.");
      this.recaptcha.reset();
    } else {
      this.recaptcha.execute();
    }
  }
  render() {
    return (
      <div className="container">
        {" "}
        <div className="row row-cont">
          <div className="form is-responsive">
            <div id="logo-container"></div>
            <div className="">
              <h5>Login to get admin access</h5>
            </div>

            <div className="form-group">
              <input
                className="form-control"
                placeholder="Enter Email ID"
                type="text"
                value={this.state.value}
                onChange={event => this.setState({ value: event.target.value })}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" onClick={this.onSubmit}>
                Login
              </button>
            </div>
            <Recaptcha
              ref={ref => (this.recaptcha = ref)}
              sitekey="6Le8bbwUAAAAAGGhHKN8rqzXMveIDkzZHGUfP1-1"
              onResolved={() => {
                this.props.history.push("home");
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RecaptchForm;
