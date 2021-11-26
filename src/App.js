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
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Login from "./Components/Login";
import Alihan from "./Components/Alihan";
import { useContext } from "react";
import { UserContext } from "./Context/UserProvider";
import SeriesDetail from "./Components/SeriesDetail";
import MovieeDetail from "./Components/MovieeDetail";
import Home from "./Components/Home";
import Logo from "./logo.png"
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
        style={{ padding: "0px", backgroundColor: "#93B5C6"}}
      >
        <Container>
          <Navbar.Brand className="logo"><img src={Logo} style={{width: "5rem"}}/></Navbar.Brand>
          <Nav className= "justify-content-center" style ={{width: "100%"}}>
            <Nav.Link>
              {isLogin ? <Link to="/Movie" className="fs-4" style={{textDecoration:"none", color: "blue", padding: "200px"}}>Movie</Link> : <></>}
            </Nav.Link>

            <Nav.Link>
              {isLogin ? <Link to="/Series" className="fs-4" style={{textDecoration:"none", color: "blue", padding: "200px"}}>Series</Link> : <></>}
            </Nav.Link>
          </Nav>
        </Container>
        <Nav>
        {/* <Nav.Link><Button variant= "dark">
              {isLogin ?  : <Link  to="/Register" style={{textDecoration:"none"}}>Register</Link>}</Button>
            </Nav.Link> */}

            <Nav.Link> <Button variant= "danger">
              {isLogin ? (
                <Button  variant= "danger" className= "justify-content-end" style={{width: "100%"}} onClick={LogOut}>Keluar</Button>
              ) : (
                <Link to="/login" style={{textDecoration:"none", color: "white"}}>Masuk</Link>
              )}</Button>
            </Nav.Link>
        </Nav>
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
    </Router>
  );
}

export default App;
