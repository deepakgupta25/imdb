import React, { Component } from 'react';
import "./MovieCard.css";

class MovieCard extends Component {
  render() {
    const { name, director, imdb_score, genre } = this.props;
    const genreStr = genre.join(","); 

    return (
      <div className="movie-card">
        <div className="upper-half">{name}</div>
        <div className="lower-half">
          <div><span className="fa fa-star imdb-rating"></span> {imdb_score}</div>
          <div>Movie: {name}</div>
          <div>Director: {director}</div>
          <div>Genre: {genreStr}</div>
        </div>
      </div>
    )
  }
}

export default MovieCard;