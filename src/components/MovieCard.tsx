const MovieCard = ({ movie }: any) => {
  return (
    <div className="mx-2 my-4 shrink cursor-pointer rounded-md bg-blu shadow-md">
      <a>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="h-full max-h-80 min-h-72 w-full min-w-56 max-w-56 rounded-t-md"
        />
        <div className="flex justify-between mx-2 my-1">
          <div className="w-40 truncate">{movie.Title}</div>
          <div>0000</div>
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
