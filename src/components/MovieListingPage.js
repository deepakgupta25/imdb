import React, { Component } from 'react';
import "./MovieListingPage.css";
import MovieCard from "./MovieCard";

class MovieListingPage extends Component {
  render() {
    return (
      <div className="movie-list-container">
        { this.props.movies.length > 0 &&
          this.props.movies.map(movie => {
            return <MovieCard key={`${movie.name}-${movie.director}`} {...movie} />
          })
        }
      </div>
    )
  }
}

export default MovieListingPage;