import axios from "axios";
import { useContext, useEffect } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useHistory } from "react-router";
import { MovieContext } from "../Context/MovieProvider";

function Movie() {
  const history = useHistory();
  const {movieList, setMovieList} = useContext(MovieContext)
  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6591eb1ed775a26d3cfbb3f9fb54272c&language=en-US&page=1"
    ).then((result) => {
      console.log(result.data);
      setMovieList(result.data?.results);
    });
  }, []);
  //
  return (
    <div className="container  bg-dark">
      <br />
      <br />
      <CardGroup>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {movieList.map((movie) => {
            return (
              <div className="container">
                <Card style={{ width: "16rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    {/* <Card.Text>Date release : {movie.release_date}</Card.Text>
                    <Card.Text>Synopsis : {movie.overview}</Card.Text> */}
                    <Button variant="primary" onClick={()=>history.push(`/movie-detail/${movie.id}`)}>More Detail</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </CardGroup>
      <br />
      <br />
    </div>
  );
}
export default Movie;
