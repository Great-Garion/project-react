import axios from "axios";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { MovieContext } from "../Context/MovieProvider";
import { Card, Button, Row, Col } from "react-bootstrap";
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
    <div style={{ backgroundColor: "#EEC4C4" }}>
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
                      style={{ height: "inherit" }}
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
                          borderRadius: "4%",
                          width: "254px",
                        }}
                      >
                        <Card.Title>
                          <b>{item.title}</b>
                        </Card.Title>
                        <Card.Text>{item.release_date}</Card.Text>
                        <div className="">
                          <Button
                            style={{ backgroundColor: "#D291BC" }}
                            onClick={() =>
                              history.push(`/movie-detail/${item.id}`)
                            }
                          >
                            More Detail
                          </Button>
                        </div>
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
