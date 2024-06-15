import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";

//const axios = require('axios'); // legacy way

function App() {
  const moviess = [
    {
      Title: "The Godfather",
      Year: "1972",
      imdbID: "tt0068646",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Godfather Part II",
      Year: "1974",
      imdbID: "tt0071562",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Godfather Part III",
      Year: "1990",
      imdbID: "tt0099674",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWFlYWY2YjYtNjdhNi00MzVlLTg2MTMtMWExNzg4NmM5NmEzXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_SX300.jpg",
    },
  ];

  const [movieData, setMovieData] = useState([]);

  // const getMovies = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://www.omdbapi.com/?apikey=41022a2&s=godfather"
  //     );
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   //getMovies();
  // }, []);

  return (
    <>
      <MovieList movies={moviess} />
    </>
  );
}

export default App;
