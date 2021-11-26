import { useContext } from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Movie from "./Movie";
import Register from "./Register";
import Series from "./Series";
import Login from "./Login";
import Alihan from "./Alihan";
import SeriesDetail from "./SeriesDetail";
import MovieeDetail from "./MovieeDetail";
import Home from "./Home";
import { UserContext } from "../Context/UserProvider";

function Routing() {
  let { isLogin } = useContext(UserContext);

  return (
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
  )
}

export default Routing
