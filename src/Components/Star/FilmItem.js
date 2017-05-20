import React, { Component } from 'react';
import './FilmItem.css';


class FilmItem extends Component {

  render() {
        return (
      <div>
        <h1>{this.props.moviedata.title}</h1>
        <p>{this.props.moviedata.opening_crawl}</p>
      </div>
        );
    }

  }

export default FilmItem
