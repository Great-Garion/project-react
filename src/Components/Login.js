import { useState, useEffect, useContext } from "react";
import { Button, Card, Stack,Row,Container,Col, } from "react-bootstrap";
import { traverseTwoPhase } from "react-dom/test-utils";
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
    <div style={{ backgroundColor:"gray", height:"100vh", width:"100%" }} >
       <Container>
         <Row >
          <Col className="mx-auto" xs={5}
        
          >
          
          <Card.Body style={{marginTop:"50px"}}>
          <Card.Title style={{textAlign:"center"}}><h2 style={{marginTop:"72px"}}>Garion_TV</h2></Card.Title>
            <Card.Title>Please Login</Card.Title>
            <Stack direction="vertical" gap={2}
           >
              <input
              border="dark"
                className="bg-light border mt-10"
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
            <Stack gap={1} className="col-md-5 mx-auto rounded-pill">
              <Button variant="dark" onClick={handleLogin} type="submit">
                Login
              </Button>
            </Stack>
<div style={{textAlign:"center", marginTop:"4px"}}>
<a href="/Register" style={{color:"green"}} >
              Register
            </a>
            </div>
          

          
          </Card.Body>
          </Col>
          </Row>
      </Container>


    
    </div>
  );
}
export default Login;
