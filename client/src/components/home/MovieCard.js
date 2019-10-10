import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-12 mb-2 searc-link">
        <Link className="w-100" to={movie.url}>
          {movie.name}
          <i className="fas fa-chevron-right" />
        </Link>
      </div>
    );
  }
}

export default MovieCard;
