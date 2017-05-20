import React, { Component } from 'react';
import Axios from 'axios'
import './Film.css';
import FilmItem from "./FilmItem.js"
class Film extends Component {
  constructor(props){
    super(props);
    this.cancelToken = Axios.CancelToken.source();
    this.state={films:false, message:"Still Loading"};
  }
  render() {
    if(this.state.films){
      var movies= this.state.films.map((movie)=>{
        return <FilmItem key={movie.episode_id} moviedata={movie}/>
      })
      return (
          <div>
              <h1>Starwars Films</h1>
              {movies}
          </div>
      );
    }else {
      return <h1>{this.state.message}</h1>
    }

  }

  componentDidMount(){
  Axios.get("http://swapi.co/api/films")
    .then((response) => {
      console.log("hello");
      this.setState({
        films:response.data.results,
        message:""
      })
    }).catch((err)=>{
      if (Axios.isCancel(err)){
        console.log('Request canceled', err.message);
      }else{
          this.setState({
        message: `Starwars with ID '${this.props.id}' not found`

      })
    }
  })
}
 componentWillUnmount(){
        this.cancelToken.cancel("Operation canceled by the user");
    }
}
export default Film
