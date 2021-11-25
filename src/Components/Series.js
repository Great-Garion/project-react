import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";

function Series() {
  const [SeriesList, setSeriesList] = useState([]);
  let history = useHistory();
  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=6591eb1ed775a26d3cfbb3f9fb54272c&language=en-US&page=1"
    ).then((result) => {
      console.log(result.data);
      setSeriesList(result.data?.results);
    });
  }, []);
  console.log(SeriesList);
  return (
    <div style={{ backgroundColor: "#EEC4C4" }}>
      <div
        className="d-flex align-content-center flex-wrap bd-highlight example-parent"
        style={{ marginTop: "60px" }}
      >
        {SeriesList.map((item) => {
          return (
            <div style={{ padding: "8px", margin: "auto" }}>
              <Row xs={2} md={4} className="g-1">
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
                        <Card.Title>
                          <b>{item.name}</b>
                        </Card.Title>
                        <Card.Text>{item.first_air_date}</Card.Text>
                        <Button
                          style={{ backgroundColor: "#D291BC" }}
                          onClick={() =>
                            history.push(`/series-detail/${item.id}`)
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
export default Series;
