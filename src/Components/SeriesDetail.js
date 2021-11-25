import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Container, Row, Col } from "react-bootstrap";

function MovieeDetail() {
  let { id } = useParams();
  let [series, setSeries] = useState([]);
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/tv/${id}?api_key=6591eb1ed775a26d3cfbb3f9fb54272c&language=en-US
    `).then((rest) => {
      console.log(rest.data);
      setSeries(rest.data);
    });
  }, []);
  console.log(series);
  
  return (
    <div style={{ backgroundColor: "#F5C0C0", height: "119vh", width: "100%" }}>
      <Container>
        <Row className="mt-10">
          <Col>
            <Card style={{ width: "15rem", margin: "5rem", border: "none" }}>
              <div>
                <Card.Img
                  style={{ width: "15rem", }}
                  src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                  alt="Card image"
                />
              </div>
            </Card>
          </Col>
          <Col style={{ marginTop: "5rem" }}>
            <div>
              <Card.Title>{series.original_name}</Card.Title>
              <Card.Text>{series.overview}</Card.Text>
              <Card.Text><b>Status</b> :{series.status}</Card.Text>
              <Card.Text><b>Release date</b> : {series.first_air_date}</Card.Text>
              <Card.Text><b>Popularity</b> : {series.popularity}</Card.Text>
              {/* <Card.Text>
                Original_language : {series.original_language}
              </Card.Text> */}

              <Card.Text><b>Tagline </b> : {series.tagline}</Card.Text>
              <Card.Text style={{ display: "flex" }}>
                <b>Genre</b><p className="px-1"> : </p>
                {series.genres?.map((item) => {
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
export default MovieeDetail;
