import { createContext, useState } from "react";

export const MovieContext = createContext({
  movieId: "",
  setMovieId: (x:string)=>{},
});

const MovieContextProvider = ({ children }: any) => {
  const [selectedMovieId, setSelectedMovieId] = useState("");

  function handleSelectedMovieId(givenId:string){
    setSelectedMovieId(givenId)
  }

  const ctxValue = {
    movieId: selectedMovieId,
    setMovieId: handleSelectedMovieId,
  };
  return (
    <MovieContext.Provider value={ctxValue}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
