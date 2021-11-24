import { useState, useEffect, useContext } from "react";
import { Button, Card, Stack, Row, Container, Col } from "react-bootstrap";
import { traverseTwoPhase } from "react-dom/test-utils";
import { useHistory } from "react-router";
import { UserContext } from "../Context/UserProvider";
import "../Components/Login.css"
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
    <div  class="d-flex justify-content-center align-items-center mt-5">
      <div class="card"
      style={{marginTop:"10rem"}}
      >
        <ul  class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item text-center">
            <a
            style={{backgroundColor:"#06101f",color:"#fff"}}
              class="nav-link active btl"
              id="pills-home-tab"
              data-toggle="pill"
              href="/login"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Login
            </a>
          </li>
          <li class="nav-item text-center">
            <a
              class="nav-link btr"
              id="pills-profile-tab"
              data-toggle="pill"
              href="/Register"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Register
            </a>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div class="form px-4 pt-5">
              <input
                type="text"
                name="username"
                class="form-control"
                placeholder="username"
                onChange={handleUser}
                label="username"
                value={user.username}
                />
             
              <input
                type="password"
                name="password"
                label="password"
                class="form-control"
                placeholder="Password"
                onChange={handleUser}
                value={user.password}
               
              />
              <button
              style={{width:"100%"}}
               class="btn btn-dark btn-block" 
               onClick={handleLogin}
               type="submit"
              >Login</button>
            </div>
          </div>
          {/* <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          > */}
            {/* <div class="form px-4">
              <input
                type="text"
                name=""
                class="form-control"
                placeholder="Name"
              />
              <input
                type="text"
                name=""
                class="form-control"
                placeholder="Email"
              />
              <input
                type="text"
                name=""
                class="form-control"
                placeholder="Phone"
              />
              <input
                type="text"
                name=""
                class="form-control"
                placeholder="Password"
              />
              <button class="btn btn-dark btn-block">Signup</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>

    //     <div style={{ backgroundColor:"gray", height:"100vh", width:"100%" }} >
    //        <Container>
    //          <Row >
    //           <Col className="mx-auto" xs={5}

    //           >

    //           <Card.Body style={{marginTop:"50px"}}>
    //           <Card.Title style={{textAlign:"center"}}><h2 style={{marginTop:"72px"}}>Garion_TV</h2></Card.Title>
    //             <Card.Title>Please Login</Card.Title>
    //             <Stack direction="vertical" gap={2}
    //            >
    //               <input
    //               border="dark"
    //                 className="bg-light border mt-10"
    //                 type="text"
    //                 placeholder="username"
    //                 onChange={handleUser}
    //                 label="username"
    //                 name="username"
    //                 value={user.username}
    //               />

    //               <input

    //                 className="bg-light border mt-10"
    //                 type="password"
    //                 placeholder="password"
    //                 onChange={handleUser}
    //                 label="password"
    //                 name="password"
    //                 value={user.password}
    //               />
    //               <br/>
    //             </Stack>
    //             <Stack gap={1} className="col-md-5 mx-auto rounded-pill">
    //               <Button variant="dark" onClick={handleLogin} type="submit">
    //                 Login
    //               </Button>
    //             </Stack>
    // <div style={{textAlign:"center", marginTop:"4px"}}>
    // <a href="/Register" style={{color:"green"}} >
    //               Register
    //             </a>
    //             </div>

    //           </Card.Body>
    //           </Col>
    //           </Row>
    //       </Container>

    //     </div>
  );
}
export default Login;
