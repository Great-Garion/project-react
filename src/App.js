import "./App.css";
import Movie from "./Components/Movie";
import Register from "./Components/Register";
import Series from "./Components/Series";
import MovieDetail from "./Components/MovieDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Login from "./Components/Login";
import Alihan from "./Components/Alihan";
import { useContext } from "react";
import { UserContext } from "./Context/UserProvider";
import SeriesDetail from "./Components/SeriesDetail";

function App() {
  let { isLogin, setIsLogin } = useContext(UserContext);
  console.log(isLogin);

  function LogOut() {
    setIsLogin(false);
    localStorage["isLogin"] = false;
  }
  return (
    <Router>
      <Navbar
        fixed="top"
        style={{ padding: "0px", backgroundColor: "#93B5C6" }}
      >
        <Container>
          <Navbar.Brand>Garion TV</Navbar.Brand>
          <Nav>
            {/* <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link> */}

            <Nav.Link>
              {isLogin ? <Link to="/Movie">Movie</Link> : <></>}
            </Nav.Link>

            <Nav.Link>
              {isLogin ? <Link to="/Series">Series</Link> : <></>}
            </Nav.Link>

            <Nav.Link>
              {isLogin ? <></> : <Link to="/Register">Register</Link>}
            </Nav.Link>

            <Nav.Link>
              {isLogin ? (
                <Button onClick={LogOut}>Log Out</Button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          {isLogin ? <Movie /> : <Redirect to="/login" />}
        </Route>

        <Route path="/register">
          {isLogin ? <Redirect to="/login" /> : <Register />}
        </Route>

        <Route path="/login">{isLogin ? <Redirect to="/" /> : <Login />}</Route>

        <Route path="/movie">
          {isLogin ? <Movie /> : <Redirect to="/login" />}
        </Route>

        <Route path="/movie-detail/:id">
          <MovieDetail />
        </Route>

        <Route path="/series">
          {isLogin ? <Series /> : <Redirect to="/login" />}
        </Route>
        <Route path="/series-detail/:id">
          <SeriesDetail />
        </Route>

        <Route path="/movie-detail/:id">
          <MovieDetail />
        </Route>
        <Route path="/:alihan">
          <Alihan />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
