import { useState, useEffect, useContext } from "react";
import { Button, Card, Stack, } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../Context/userProvider";
function Login() {
  let history = useHistory()
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

  let [dataRegister, setDataRegiste] = useState([]);

  let handleLogin = (e) => {
    e.preventDefault()
    let dataUser=  dataRegister.find(item=> item.username === user.username && item.password === user.password)
  if(dataUser){
    localStorage.setItem("isLogin",true)
    setIsLogin(true)
    history.push("/")
  }else{
    alert("chech username dan password anda")
  }
  };
  console.log(isLogin)

  useEffect(() => {
    fetch("https://618e643350e24d0017ce1267.mockapi.io/user")
      .then((resp) => resp.json())
      .then((data) => setDataRegiste(data));
    console.log(dataRegister);
    // localStorage.setItem("Login", dataUser);
  }, []);



  return (
    <div>
      <>
        <Card border="dark" style={{ width: "18rem" }}>
        
            <Card.Header>Garion Tv</Card.Header>
            <Card.Body>
              <Card.Title>Please Login</Card.Title>
              <Stack direction="horizontal" gap={2}>
                <input
                  className="bg-light border"
                  type="text"
                  placeholder="username"
                  onChange={handleUser}
                  label="username"
                  name="username"
                  value={user.username}
                />

                <input
                  className="bg-light border"
                  type="password"
                  placeholder="password"
                  onChange={handleUser}
                  label="password"
                  name="password"
                  value={user.password}
                />
              </Stack>
              <Stack gap={1} className="col-md-5 mx-auto">
                <Button variant="secondary" onClick={handleLogin} type="submit">
                  Login
                </Button>
              </Stack>

              <a href="#" class="card-link">
                Register
              </a>
              <a href="#" class="card-link">
                forget passwoard
              </a>
            </Card.Body>
         
        </Card>
      </>
    </div>
  );
}
export default Login;