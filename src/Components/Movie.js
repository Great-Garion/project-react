import axios from "axios";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { MovieContext } from "../Context/MovieProvider";
import {
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
function Movie() {
  let { movieList, setMovieList } = useContext(MovieContext);
  let history = useHistory();
  console.log(movieList);
  console.log(movieList[0]);
  console.log(movieList[0]?.backdrop_path);
  console.log(`https://image.tmdb.org/t/p/w500${movieList[0]?.backdrop_path}`);
  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6591eb1ed775a26d3cfbb3f9fb54272c&language=en-US&page=1"
    ).then((result) => {
      console.log(result.data);
      setMovieList(result.data?.results);
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#000000c4" }}>
      <Carousel fade style={{ marginTop: "7vw" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/original${movieList[1]?.backdrop_path}`}
            alt="First slide"
          />
          <Carousel.Caption>
            a<h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/original${movieList[3]?.backdrop_path}`}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/original${movieList[4]?.backdrop_path}`}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div
        className="d-flex align-content-center flex-wrap bd-highlight example-parent "
        style={{ marginTop: "60px" }}
      >
        {movieList.map((item, index) => {
          return (
            <div key={index} style={{ padding: "8px", margin: "auto" }}>
              <Row xs={2} md={4} className="g-1  ">
                <Col>
                  <Card
                    style={{
                      width: "16rem",
                      height: "35rem",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <Card.Img
                      // variant="top"
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    />
                    <div style={{ margin: "auto", width: "16rem" }}>
                      <Card.Body
                        style={{
                          backgroundColor: "#5C848E",
                          color: "black",
                          fontFamily: "cursive",
                          height: "11rem",
                        }}
                      >
                        <Card.Title><b>{item.title}</b></Card.Title>
                        <Card.Text>{item.release_date}</Card.Text>
                        <Button
                          style={{ backgroundColor: "#D291BC" }}
                          onClick={() =>
                            history.push(`/movie-detail/${item.id}`)
                          }
                        >
                          More Detail
                        </Button>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Movie;
