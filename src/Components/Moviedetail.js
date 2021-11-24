import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Container, Row, Col } from "react-bootstrap";
function MovieDetail() {
  let { id } = useParams();
  let [movie, setMovie] = useState([]);
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/movie/${id}?api_key=6591eb1ed775a26d3cfbb3f9fb54272c&language=en-US
    `).then((rest) => {
      console.log(rest.data);
      setMovie(rest.data);
    });
  }, []);
  console.log(movie);
  // console.log(`https://image.tmdb.org/t/p/w500${movie.poster_path}`)
  return (
    <div style={{ backgroundColor: "#F5C0C0", height: "119vh", width: "100%" }}>
      <Container>
        <Row className="mt-10">
          <Col xs={6} md={4}>
            <Card style={{ width: "15rem", margin: "5rem", border: "none" }}>
              <div>
                <Card.Img
                  style={{ width: "15rem", }}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="Card image"
                />
              </div>
            </Card>
          </Col>
          <Col xs={12} md={8} style={{ marginTop: "5rem" }}>
            <div>
              <Card.Title>{movie.original_title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <Card.Text><b>Status</b> :{movie.status}</Card.Text>
              <Card.Text><b>Release_date</b> : {movie.release_date}</Card.Text>
              <Card.Text><b>Popularity</b> : {movie.popularity}</Card.Text>
              {/* <Card.Text>
                Original_language : {movie.original_language}
              </Card.Text> */}

              <Card.Text><b>Tagline </b> : {movie.tagline}</Card.Text>
              <Card.Text style={{ display: "flex" }}>
                <b>Genre</b><p className="px-1"> : </p>
                {movie.genres?.map((item) => {
                  return <p className="px-1">{item.name}, </p>;
                })}
              </Card.Text>
              {/* <Card.Text style={{ display: "flex" }}>
                Production_countries:
                {movie.production_countries?.map((item) => {
                  return <h6 style={{ paddingLeft: "5px" }}>{item.name},</h6>;
                })}
              </Card.Text> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default MovieDetail;
