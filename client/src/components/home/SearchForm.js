import React, { Component } from "react";

import { connect } from "react-redux";

import {
  searchMovie,
  fetchMovies,
  setLoading
} from "../../actions/searchActions";

export class SearchForm extends Component {
  onChange = e => {
    if (e.target.value !== "") this.props.searchMovie(e.target.value);
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center search-form">
        <div className="container">
          <h3 className="display-4 mb-3">
            <i className="fa fa-search" /> Search
          </h3>
          <form id="searchForm">
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="McChart"
              onChange={this.onChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
