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
import {
  Container,
  Navbar,
  Nav,
  Form,
  Offcanvas,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
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

      <Navbar fixed="top" bg="light" expand={false}>

        <Container fluid>
          <Navbar.Brand>
            <h2>Garion_TV</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Garion_TV
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  {isLogin ? (
                    <></>
                  ) : (
                    <Link to="/Register" className="me-5">
                      Register
                    </Link>
                  )}
                </Nav.Link>

                <Nav.Link>
                  {isLogin ? (
                    <Button onClick={LogOut}>Log Out</Button>
                  ) : (
                    <Link to="/login" className="me-5">
                      Login
                    </Link>
                  )}
                </Nav.Link>

                <Nav.Link>
                  {isLogin ? (
                    <Link to="/Movie" className="me-5">
                      Movie
                    </Link>
                  ) : (
                    <></>
                  )}
                </Nav.Link>
                <Nav.Link>
                  {isLogin ? (
                    <Link to="/Series" className="me-5">
                      Series
                    </Link>
                  ) : (
                    <></>
                  )}
                </Nav.Link>
                {isLogin ? (
                  <NavDropdown title="Contact" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#email">Email</NavDropdown.Item>
                    <NavDropdown.Item href="#instagram">
                      Instagram
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#favebook">
                      Facebook
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#whatsApp">
                      whatsApp
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                ) : (
                  <></>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
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
