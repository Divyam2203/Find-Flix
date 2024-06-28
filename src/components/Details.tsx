//import DEMO from "../dataset/demoMovie";
import axios from "axios";
import { useEffect, useState } from "react";

const Details = ({ selectedMovie }: any) => {
  const [movieDetails, setMovieDetails] = useState({
    Title: "",
    Year: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Poster: "",
    imdbRating: "",
    imdbID: "",
    Type: "",
    DVD: "",
    Response: "",
  });

  const [loading, setLoading] = useState(true);

  const getMovieDetails = async (selectedMovie: string) => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=41022a2&i=${selectedMovie}&plot=full`,
      );
      setMovieDetails(response.data);
      console.log(movieDetails);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      if (selectedMovie !== "") {
        getMovieDetails(selectedMovie);
        setLoading(false);
      }
    }, 1000);
    return () => clearTimeout(timerOut);
  }, []);

  let details = (
    <div className="bg-gray-100 py-8 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 flex flex-col md:flex-row">
          <div className="px-4 md:flex-1">
            <div className="mb-4 h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700">
              <img
                className="h-full w-full object-contain"
                src={movieDetails.Poster}
                alt="Product Image"
              />
            </div>
            <div className="-mx-2 mb-4 flex">
              <div className="w-1/2 px-2">
                <a href={`https://www.imdb.com/title/${movieDetails.imdbID}/`} target="_blank">
                  <button className="w-full rounded-full bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700">
                    imdb
                  </button>
                </a>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full rounded-full bg-gray-200 px-4 py-2 font-bold text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                  Add to Favourite
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 md:flex-1">
            <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
              {movieDetails.Title}
            </h2>
            <p className="mb-4 border-b pb-4 text-sm text-gray-600 dark:text-gray-300">
              {movieDetails.Year} | {movieDetails.Runtime}
            </p>
            <div className="mb-4 flex">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Genre:
                </span>
                <span className="ml-1 text-gray-600 dark:text-gray-300">
                  {movieDetails.Genre}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Director:
                </span>
                <span className="ml-1 text-gray-600 dark:text-gray-300">
                  {movieDetails.Director}
                </span>
              </div>
            </div>
            <div className="mb-4 border-b pb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                imdb Rating:
              </span>
              <span className="ml-1 text-gray-600 dark:text-gray-300">
                {movieDetails.imdbRating}
              </span>
            </div>

            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Plot:
              </span>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {movieDetails.Plot}
              </p>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Actors:
              </span>
              <span className="ml-1 text-gray-600 dark:text-gray-300">
                {movieDetails.Actors}
              </span>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Writer:
              </span>
              <span className="ml-1 text-gray-600 dark:text-gray-300">
                {movieDetails.Writer}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  let loadingScreen = (
    <div className="flex h-96 items-center justify-center space-x-2 bg-gray-100 py-8 dark:bg-gray-800">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-black"></div>
    </div>
  );

  return <div id="details">{!loading ? details : loadingScreen}</div>;
};

export default Details;
