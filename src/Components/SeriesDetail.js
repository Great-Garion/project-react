import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Card } from "react-bootstrap";


function SeriesDetail() {
  let [series, setSeries] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/tv/${id}?api_key=6591eb1ed775a26d3cfbb3f9fb54272c&language=en-US`
    ).then((rest) => {
      console.log(rest.data);
      setSeries(rest.data);
    });
  }, []);
  console.log(series);

  return (
    <div>
      <Card
        className="bg-dark text-white"
        style={{ width: "50%", height: "50%" }}
      >
        <Card.Img
          src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
          alt="Card image"
        />
        <Card.ImgOverlay>
        <Card.Title>{series.original_title}</Card.Title>
          <Card.Text>{series.overview}</Card.Text>
          <Card.Text>Status : {series.status}</Card.Text>
          <Card.Text>Release : {series.release_date}</Card.Text>
          <Card.Text>
            {" "}
            Genre :{" "}
            {series.genres?.map((item) => {
              return <h6>{item.name}</h6>;
            })}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default SeriesDetail;
