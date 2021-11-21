import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

function Series() {
  const [SeriesList, setSeriesList] = useState([]);
  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=6591eb1ed775a26d3cfbb3f9fb54272c&language=en-US&page=1"
    ).then((result) => {
      console.log(result.data);
      setSeriesList(result.data?.results);
    });
  }, []);
  //
  return (
    <div className="container  bg-dark">
      <br />
      <br />
      <CardGroup>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {SeriesList.map((series) => {
            return (
              <div className="container">
                <Card style={{ width: "16rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{series.original_name}</Card.Title>
                    {/* <Card.Text>
                      Date release : {series.first_air_date}
                    </Card.Text>
                    <Card.Text>Synopsis : {series.overview}</Card.Text> */}
                    <Button variant="primary">Series Detail</Button>
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
export default Series;
