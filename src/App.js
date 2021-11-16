import "./App.css";
import Movie from "./Components/Movie";
import Register from "./Components/Register";
import Series from "./Components/Series";
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

function App() {
  return (
    <Router>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand>
            <h3>Website</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link>
                  <Link to="/" className="me-5">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Login" className="me-5">
                    Login
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Register" className="me-5">
                    Register
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Movie" className="me-5">
                    Movie
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/Series" className="me-5">
                    Series
                  </Link>
                </Nav.Link>
                <NavDropdown title="Contact" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#email">Email</NavDropdown.Item>
                  <NavDropdown.Item href="#instagram">
                    Instagram
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#favebook">Facebook</NavDropdown.Item>
                  <NavDropdown.Item href="#whatsApp">whatsApp</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Movie />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Movie">
          <Movie />
        </Route>
        <Route path="/Series">
          <Series />
        </Route>
        <Route path="/:Alihan">
          <Alihan />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
