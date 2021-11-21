import { createContext, useState } from "react";

export let MovieContext = createContext();

function MovieProvider(props) {

  let [movieList, setMovieList] = useState([]);

  return (
      
    <MovieContext.Provider value={{ movieList, setMovieList }}>
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;
