import MovieCard from "./MovieCard";

interface moviesData{

}

const MovieList = ({ movies }: any) => {
  //const {Search} = movies;
  return (
    <div className="w-10/12 mx-auto my-12 flex flex-wrap justify-between bg-navi">
      {movies.map((singleMovieData: any) => (
        <MovieCard key={singleMovieData.imdbID} movie={singleMovieData} />
      ))}
    </div>
  );
};

export default MovieList;
