const MovieCard = ({movie}:any) => {
  console.log(movie)
  return(
    <div>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );
}

export default MovieCard;