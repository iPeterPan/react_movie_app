import React, { Component } from 'react';
import Movie from './Movie';

import './App.css';

/* const movieTitles = [
  "Matrix",
  "KingKong",
  "Full Metal Jacket",
  "Old Boy",
  "Starwars"
]
const movieImages = [
  "http://static6.uk.businessinsider.com/image/57840cd0dd089520678b4568-1819/11423756_10153021180435765_8771738551269921882_o.jpg",
  "https://mcn-images.bauersecure.com/PageFiles/629111/1000x750/FatBob_02.jpg",
  "https://channelvisionmag.com/wp-content/uploads/2017/12/harley-davidson.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdR9axnghll6mVM3Yae1r7Il0A8yGc_JJynAiH_fCXwSANcRj",
  "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my18/street/street-750/gallery/hdi/street-street-750-gallery-2.jpg?impolicy=myresize&rw=1137"
] */
/* 
const movies = [
  {
    id:11,
    title:"Matrix",
    poster:"http://static6.uk.businessinsider.com/image/57840cd0dd089520678b4568-1819/11423756_10153021180435765_8771738551269921882_o.jpg"
  },  
  {
    id:12,
    title:"KingKong",
    poster:"https://mcn-images.bauersecure.com/PageFiles/629111/1000x750/FatBob_02.jpg"
  },  
  {
    id:13,
    title:"Full Metal Jacket",
    poster:"https://channelvisionmag.com/wp-content/uploads/2017/12/harley-davidson.jpg"
  },  
  {
    id:14,
    title:"Old Boy",
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdR9axnghll6mVM3Yae1r7Il0A8yGc_JJynAiH_fCXwSANcRj"
  },  
  {
    id:15,
    title:"Starwars",
    poster:"https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my18/street/street-750/gallery/hdi/street-street-750-gallery-2.jpg?impolicy=myresize&rw=1137"
  }
] */

class App extends Component {
  
  state = {
    greeting : 'Hello woojja',
    myGreeting : "Hello bachi"
    // movies : [
    // ]
  }

  myState = {
    myGreeting : "Hello bachi"
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({greeting : 'woojja'})
    //   this.setState({myGreeting: 'Say Hello bachi again'})
    // }, 3000)

    //setTimeout(this.AddMovie(), 1000);
/* 
    setTimeout(
      () => {
        //console.log('Say hello');
        this.setState({
           //greeting:'woojja',
           movies: [
            {
              id:11,
              title:"Matrix",
              poster:"http://static6.uk.businessinsider.com/image/57840cd0dd089520678b4568-1819/11423756_10153021180435765_8771738551269921882_o.jpg"
            },  
            {
              id:12,
              title:"KingKong",
              poster:"https://mcn-images.bauersecure.com/PageFiles/629111/1000x750/FatBob_02.jpg"
            },  
            {
              id:13,
              title:"Full Metal Jacket",
              poster:"https://channelvisionmag.com/wp-content/uploads/2017/12/harley-davidson.jpg"
            },  
            {
              id:14,
              title:"Old Boy",
              poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdR9axnghll6mVM3Yae1r7Il0A8yGc_JJynAiH_fCXwSANcRj"
            },  
            {
              id:15,
              title:"Starwars",
              poster:"https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my18/street/street-750/gallery/hdi/street-street-750-gallery-2.jpg?impolicy=myresize&rw=1137"
            },
            {
              id:16,
              title:'transformer',
              poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdR9axnghll6mVM3Yae1r7Il0A8yGc_JJynAiH_fCXwSANcRj'
            }
          ]
        })
      }, 3000); */

      // fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      // .then(
      //   response => response.json()
      // )
      // .then(json => console.log(json))
      // // .catch(function(err){
      // //   console.log(err);
      // // })
      // .catch(err => {
      //   console.log(err)
      // })
      this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    console.log(movies)
    this.setState({
      movies
    })
  }

  _callApi = () => {

      return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
      .then(
        response => response.json()
      )
      .then(json => json.data.movies)
      // .catch(function(err){
      //   console.log(err);
      // })
      .catch(err => {
        console.log(err)
      })
  }

  // AddMovie(){
  //   //console.log('Say hello');
  //   this.setState({
  //      //greeting:'woojja',
  //      movies: [
  //       {
  //         id:9,
  //         title:'transformer',
  //         poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsdR9axnghll6mVM3Yae1r7Il0A8yGc_JJynAiH_fCXwSANcRj'
  //       },
  //       ...this.state.movies
  //     ]
  //   });
  // }
  
  _renderMovies = () => {
    console.log('woojja movie')
    const movies = this.state.movies.map(
      //(movie, index) => { return <Movie key={movie.id} title={movie.title} image={movie.poster} />}
      (movie, index) => { 
        return <Movie 
          key={movie.id} 
          title={movie.title_english} 
          image={movie.medium_cover_image} 
          genres={movie.genres} 
          synopsis={movie.synopsis} 
        />
      }
    )
    return movies;
  }

  render() {
    const movies = this.state.movies;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {/* {this.state.greeting}
        {this.state.myGreeting} */}
        {/* <Movie title={movieTitles[0]} image={movieImages[0]} />
        <Movie title={movieTitles[1]} image={movieImages[1]} />
        <Movie title={movieTitles[2]} image={movieImages[2]} />
        <Movie title={movieTitles[3]} image={movieImages[3]} />
        <Movie title={movieTitles[4]} image={movieImages[4]} /> */}
        {
          movies ? this._renderMovies() : 'Loading ...'
        }
      </div>
    );
  }
}

export default App;
