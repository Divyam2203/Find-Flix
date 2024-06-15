import MovieCard from "./MovieCard";

const MovieList = ({ movies }: any) => {
  //const {Search} = movies;
  return (
    <div className="mx-auto my-12 flex w-10/12 flex-wrap justify-between bg-navi">
      {movies.map((singleMovieData: any) => (
        <MovieCard key={singleMovieData.imdbID} movie={singleMovieData} />
      ))}
    </div>
  );
};

export default MovieList;
