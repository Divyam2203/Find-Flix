import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DATA from "./dataset/default.ts";
import Details from "./components/Details.tsx";
import Navbar from "./components/Navbar.tsx";
import Loading from "./components/Loading.tsx";

function App() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const [movieData, setMovieData] = useState({
    Search: [],
    totalResults: 0,
    Response: false,
  });

  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  

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
      if (query !== "") {
        getMovies(query);
      }
    }, 700);
    return () => clearTimeout(timerOut);
  }, [query]);

  const { Search, Response } = query === "" ? DATA : movieData;

  //console.log(Search,Response)

  function handleSelectedMovie(movieId: string) {
    setSelectedMovie(movieId);
    console.log(movieId);
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 ">
      <Navbar onDarkMode={darkModeHandler} />
      <div className="h-screen snap-y  scroll-p-20 overflow-y-scroll">
        <div className="snap-start">
          <Header query={query} setQuery={setQuery} />
        </div>
        <div className="snap-start">
          {selectedMovie ? (
            <Details key={selectedMovie} selectedMovie={selectedMovie} />
          ) : null}
        </div>
        <div className="snap-start">
          {Response==="True" ? <MovieList movies={Search} onSelectedMovie={handleSelectedMovie} /> : <Loading />}
          
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
