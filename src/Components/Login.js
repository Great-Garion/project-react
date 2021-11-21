import { useState, useEffect, useContext } from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../Context/UserProvider";

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
  console.log(user);

  console.log(dataRegister);

  useEffect(() => {
    fetch("https://618e643350e24d0017ce1267.mockapi.io/user")
      .then((resp) => resp.json())
      .then((data) => setDataRegister(data));
    console.log(dataRegister);
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
    <div>
      <container   className="col mt-10  mx-auto">
        <Card
          className="col-md-5 mt-10  mx-auto"
          border="dark"
          style={{ width: "20rem" }}
        >
          <Card.Header>Garion Tv</Card.Header>
          <Card.Body>
            <Card.Title>Please Login</Card.Title>
            <Stack direction="vertical" gap={2}>
              <input
              border="dark"
                className="bg-light border"
                type="text"
                placeholder="username"
                onChange={handleUser}
                label="username"
                name="username"
                value={user.username}
              />

              <input
                className="bg-light border mt-10"
                type="password"
                placeholder="password"
                onChange={handleUser}
                label="password"
                name="password"
                value={user.password}
              />
              <br/>
            </Stack>
            <Stack gap={1} className="col-md-5 mx-auto">
              <Button variant="secondary" onClick={handleLogin} type="submit">
                Login
              </Button>
            </Stack>

            <a href="/Register" className="card-link">
              Register
            </a>
            <a href="#" className="card-link">
              forget passwoard
            </a>
          </Card.Body>
        </Card>
      </container>
    </div>
  );
}
export default Login;
