import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

function Movie() {
  const [MovieList, setMovieList] = useState([]);
  useEffect(() => {
    axios(
      // "https://image.tmdb.org/t/p/w500/<<img_movie>>.png"
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
          {MovieList.map((movie) => {
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
                    <Button variant="primary">Movie Detail</Button>
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
