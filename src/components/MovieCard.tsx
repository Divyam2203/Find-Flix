import ScrollIntoView from "react-scroll-into-view";

interface movieCardProp {
  movie: any;
  onSelectedMovie: any;
}

const MovieCard = ({ movie, onSelectedMovie }: movieCardProp) => {
  return (
    <>
      <ScrollIntoView selector="#details">
        <button
          onClick={() => onSelectedMovie(movie.imdbID)}
          className="w-72 cursor-pointer rounded-xl bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white shadow-md duration-500 hover:scale-105 hover:shadow-xl"
        >
          <a>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="size-fit min-h-96 max-h-96 rounded-t-xl w-full"
            />
            <div className="mx-2 my-1 flex h-12 justify-between">
              <div className="mx-0 my-auto w-40 truncate text-left">
                {movie.Title}
              </div>
              <div className="my-auto">{movie.Year}</div>
            </div>
          </a>
        </button>
      </ScrollIntoView>
    </>
  );
};

export default MovieCard;
