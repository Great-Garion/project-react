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
  return (
    <div style={{backgroundColor:"gray", height:"119vh", width:"100%" }}>
      <Container >
        <Row className="justify-content-md-center mt-10">
          <Col>
            <Card style={{width:"21rem",margin:"5rem", border:"none"}}>
              <div>
              <Card.Img
              style={{width:"21rem"}}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="Card image"
              />
              </div>
            </Card>
          </Col>
          <Col xs={5} style={{marginTop:"5rem"}}>
            <div>
            <Card.Title>Title : <h6>{movie.original_title}</h6></Card.Title>
            <Card.Text>Overview : <h6>{movie.overview}</h6></Card.Text>
            <Card.Text>Status :  <h6>{movie.status}</h6></Card.Text>
            <Card.Text>Release_date : <h6>{movie.release_date}</h6 ></Card.Text>
<Card.Text>Popularity : <h6>{movie.popularity}</h6></Card.Text>
<Card.Text>Original_language : <h6>{movie.original_language}</h6></Card.Text>

<Card.Text>Tagline : <h6>{movie.tagline}</h6></Card.Text>
            <Card.Text style={{display:"flex",}}>
              Genre :  
              {movie.genres?.map((item) => {
                return (
                  <h6 style={{paddingLeft:"5px"}}>{item.name}, </h6>
                );
              })}
            </Card.Text>
            <Card.Text style={{display:"flex",}}>
            Production_countries: 
            {movie.production_countries?.map((item)=>{
              return(
                <h6 style={{paddingLeft:"5px"}}>{item.name},</h6>
              )
            })}
             </Card.Text>
            </div>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default MovieDetail;
