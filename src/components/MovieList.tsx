import MovieCard from "./MovieCard";

interface movieListProps{
  movies:any
  onSelectedMovie:any
}

const MovieList = ({ movies, onSelectedMovie }:movieListProps) => {
  //const {Search} = movies;
  return (
    <div className="snap-start mx-auto mb-5 mt-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 bg-gray-100 py-8 dark:bg-gray-800  md:grid-cols-2 lg:grid-cols-3 pb-16">
      {movies.map((singleMovieData: any) => (
        <MovieCard key={singleMovieData.imdbID} movie={singleMovieData} onSelectedMovie={onSelectedMovie} />
      ))}
    </div>
  );
};

export default MovieList;
