import { createContext, useState } from "react";
export let MovieContext = createContext();

function MovieProvider(props) {

  let [movieList, setMovieList] = useState([]);
  const [seriesList, setSeriesList] = useState([]);

  return (  
    <MovieContext.Provider value={{ movieList, setMovieList, seriesList, setSeriesList }}>
      {props.children}
    </MovieContext.Provider>
  );
}
export default MovieProvider;

