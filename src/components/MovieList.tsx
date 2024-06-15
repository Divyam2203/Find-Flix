import MovieCard from "./MovieCard";

const MovieList = ({ movies }: any) => {
  //console.log()
  return (
    <div className=" flex-col flex">
      {movies.map((singleMovieData: any) => (
        <MovieCard movie={singleMovieData} />
      ))}
    </div>
  );
};

export default MovieList;
