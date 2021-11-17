import { useState, useEffect, useContext } from "react";
import { Button, Card, Stack, } from "react-bootstrap";
import { useHistory } from "react-router";
import { UserContext } from "../Context/UserProvider";
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
    alert("Data anda tidak sama dengan Data Register")
  }
  };
  console.log(isLogin)

  useEffect(() => {
    fetch("https://618e643350e24d0017ce1267.mockapi.io/user")
      .then((resp) => resp.json())
      .then((data) => setDataRegiste(data));
    console.log(dataRegister);
  
  }, []);
let dataapi= localStorage.setItem('login', dataRegister)
let parsData=JSON.parse(dataapi)
console.log(parsData)

  return (
    <div>
      <>
        <Card className="col-md-5  mx-auto" border="dark" style={{ width: "20rem" }} >
        
            <Card.Header>Garion Tv</Card.Header>
            <Card.Body>
              <Card.Title>Please Login</Card.Title>
              <Stack direction="vertical" gap={2}>
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

              <a href="/Register" class="card-link">
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