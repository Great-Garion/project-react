import axios from "axios";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { MovieContext } from "../Context/MovieProvider";


function Movie() {
  const {movieList, setMovieList} = useContext(MovieContext)

  const history = useHistory()
  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6591eb1ed775a26d3cfbb3f9fb54272c&language=en-US&page=1"
    ).then((result) => {
      console.log(result.data);
      setMovieList(result.data?.results);
    });
  }, []);
  return (
    <div>
      {movieList.map((item) => {
        return(
            <div>
                <h3>title: {item.title}</h3>
                <h5>overview: {item.overview}</h5>
                <h6>release_date: {item.release_date}</h6>
                <img src = {`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                <button onClick={()=>history.push(`/movie-detail/${item.id}`)}>more</button>
            </div>
      )})}
    </div>
  );
}
export default Movie;
