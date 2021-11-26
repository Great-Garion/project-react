import { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../Context/UserProvider";
import "../Components/styling.css";
import { Link } from "react-router-dom";
// import GoogleLogin from "react-google-login";

function Login() {
  let history = useHistory();
  let [dataRegister, setDataRegister] = useState([]);

  let { isLogin, setIsLogin } = useContext(UserContext);
  let [user, setUser] = useState({
    username: "",
    password: "",
  });

  let handleUser = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    fetch("https://618e643350e24d0017ce1267.mockapi.io/user")
      .then((resp) => resp.json())
      .then((data) => setDataRegister(data));
  }, [user]);

  let handleLogin = (e) => {
    e.preventDefault();
    let dataUser = dataRegister.find(
      (item) =>
        item.username === user.username && item.password === user.password
    );
    if (dataUser) {
      localStorage.setItem("isLogin", true);
      setIsLogin(true);
      history.push("/");
    } else {
      alert("Data anda tidak sama dengan Data Register");
    }
  };

  return (
    <div style={{ marginTop: "10rem" }}>
      <div className="login ">
        <h3 style={{ textAlign: "center" }}>Silahkan Login</h3>
        <Container>
          <form class="container-fluid" style={{ width: "40%" }}>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                name="username"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleUser}
                value={user.username}
              />
              {/* <span class="input-group-text" id="basic-addon1">Login</span> */}
            </div>
            <div class="input-group">
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleUser}
                value={user.password}
                style={{ margin: "7px 0px 7px 0px" }}
              />
              {/* <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i> </span> */}
            </div>
            <button
              class="btnRegis"
              style={{ width: "100%" }}
              onClick={handleLogin}
              type="submit"
            >
              Login
            </button>
            <p style={{ display: "flex", justifyContent: "center" }}>
              <button class="cta">
                <span class="hover-underline-animation">
                  {" "}
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    Register Now{" "}
                  </Link>
                </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
            </p>
          </form>
        </Container>
      </div>
    </div>
  );
}
export default Login;
