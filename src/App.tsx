import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [movieData, setMovieData] = useState({
    Search: [],
    totalResults: 0,
    response: false, 
  });

  const [query, setQuery] = useState("marvel");

  const getMovies = async (changedQuery: string) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=41022a2&s=${changedQuery}`,
      );
      setMovieData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(query);
    }, 3000);
    return () => clearTimeout(timerOut);
  }, [query]);

  const { Search } = movieData;

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <MovieList movies={Search} />
      <Footer />
    </>
  );
}

export default App;
