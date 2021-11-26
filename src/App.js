import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useContext } from "react";
import { Container, Navbar, Nav, Button, NavLink } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";

import Movie from "./Components/Movie";
import Register from "./Components/Register";
import Series from "./Components/Series";
import Login from "./Components/Login";
import Alihan from "./Components/Alihan";
import SeriesDetail from "./Components/SeriesDetail";
import MovieeDetail from "./Components/MovieeDetail";
import Home from "./Components/Home";
import { UserContext } from "./Context/UserProvider";

import Logo from "./logo.png";

function App() {
  const history = useHistory();
  let { isLogin, setIsLogin } = useContext(UserContext);
  console.log(isLogin);

  console.log(history);

  function loginLogout() {
    if (isLogin) {
      // melakukan logout
      setIsLogin(false);
      localStorage["isLogin"] = false;
    } else {
      // pindah ke halaman login
      history.push("/login");
    }
  }

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#93B5C6" }}>
        {/* <Container> */}
          <Navbar.Brand className="logo">
            <img src={Logo} style={{ width: "5rem" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* movie */}

              <Nav.Link>
                {isLogin && (
                  <Link
                    to="/movie"
                    className="fs-4"
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      // paddingRight: "200px",
                    }}
                  >
                    Movie
                  </Link>
                )}
              </Nav.Link>

              {/* serries */}
              <Nav.Link>
                {isLogin && (
                  <Link
                    to="/series"
                    className="fs-4"
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      marginLeft: "300px",
                    }}
                  >
                    Series
                  </Link>
                )}
              </Nav.Link>

              {/* keluar */}
              <Nav.Link>
                <Button
                  variant="danger"
                  className="justify-content-end"
                  style={{ marginLeft: "300px", }}
                  onClick={loginLogout}
                >
                  {isLogin ? "Keluar" : "Masuk"}
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>

      <Switch>
        <Route exact path="/">
          {isLogin ? <Home /> : <Redirect to="/login" />}
        </Route>

        <Route path="/register">
          {isLogin ? <Redirect to="/login" /> : <Register />}
        </Route>

        <Route path="/login">{isLogin ? <Redirect to="/" /> : <Login />}</Route>

        <Route path="/movie">
          {isLogin ? <Movie /> : <Redirect to="/login" />}
        </Route>

        <Route path="/movie-detail/:id">
          <MovieeDetail />
        </Route>

        <Route path="/series">
          {isLogin ? <Series /> : <Redirect to="/login" />}
        </Route>
        <Route path="/series-detail/:id">
          <SeriesDetail />
        </Route>

        <Route path="/movie-detail/:id">
          <MovieeDetail />
        </Route>
        <Route path="/:alihan">
          <Alihan />
        </Route>
      </Switch>
    </>
  );
}

export default App;
