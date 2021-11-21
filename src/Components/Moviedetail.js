import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "react-bootstrap";
function MovieDetail() {
  let { id } = useParams();
  let [movie, setMovie] = useState([]);
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6591eb1ed775a26d3cfbb3f9fb54272c&language=en-US`
    ).then((rest) => {
      console.log(rest.data);
      setMovie(rest.data);
    });
  }, []);
  console.log(movie);
  return (
    <div>
      <Card
        className="bg-dark text-white"
        style={{ width: "50%", height: "50%" }}
      >
        <Card.Img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Title>{movie.original_title}</Card.Title>
          <Card.Text>{movie.overview}</Card.Text>
          <Card.Text>status : {movie.status}</Card.Text>
          <Card.Text>Release : {movie.release_date}</Card.Text>
          <Card.Text>
            {" "}
            Genre :{" "}
            {movie.genres?.map((item) => {
              return <h6>{item.name}</h6>;
            })}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
export default MovieDetail;
