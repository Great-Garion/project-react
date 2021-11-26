import { MovieContext } from "../Context/MovieProvider";
import { useContext, useEffect } from "react";
import axios from "axios";

function Home() {
  let { movieList, setMovieList } = useContext(MovieContext);
  let { seriesList, setSeriesList } = useContext(MovieContext);

  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6591eb1ed775a26d3cfbb3f9fb54272c&language=en-US&page=1"
    ).then((result) => {
      console.log(result.data);
      setMovieList(result.data?.results);
    });
  }, []);

  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=6591eb1ed775a26d3cfbb3f9fb54272c&language=en-US&page=1"
    ).then((result) => {
      console.log(result.data);
      setSeriesList(result.data?.results);
    });
  }, []);
  return (
    <div>
      {/* <h2>Selamat Datang</h2> */}
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={`https://image.tmdb.org/t/p/original${movieList[1]?.backdrop_path}`}
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src={`https://image.tmdb.org/t/p/original${movieList[2]?.backdrop_path}`}
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src={`https://image.tmdb.org/t/p/original${movieList[3]?.backdrop_path}`}
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src={`https://image.tmdb.org/t/p/original${seriesList[7]?.backdrop_path}`}
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src={`https://image.tmdb.org/t/p/original${seriesList[5]?.backdrop_path}`}
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src={`https://image.tmdb.org/t/p/original${seriesList[9]?.backdrop_path}`}
              className="d-block w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
