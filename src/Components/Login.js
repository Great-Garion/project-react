import { useState, useEffect, useContext } from "react";
import { Button, Card, Stack, Row, Container, Col } from "react-bootstrap";
import { traverseTwoPhase } from "react-dom/test-utils";
import { useHistory } from "react-router";
import { UserContext } from "../Context/UserProvider";
import "../Components/Login.css";
import GoogleLogin from "react-google-login";

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
    <div style={{ marginTop: "10rem" }}>
      <div className="login ">
        <h3 style={{ textAlign: "center" }}>Silahkan Login</h3>
        <Container>
          <form class="container-fluid"
          style={{width:"60%"}}
          >
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
                style={{margin:"7px 0px 7px 0px"}}
              />
              {/* <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i> </span> */}
            </div>
            <button class="btnRegis"
             style={{width:"100%"}}
             onClick={handleLogin}
             type="submit"
            >login</button>
            <p
            style={{display:"flex",justifyContent:"center"}}
            >
            <button class="cta">
            <span class="hover-underline-animation"> <a href="/Register" style={{textDecoration:"none"}} >Register Now  </a></span>
            <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
              <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
            </svg>
          </button></p>
          </form>
        </Container>
      </div>
    </div>

    // <div  class="d-flex justify-content-center align-items-center mt-5">
    //   <div class="card"
    //   style={{marginTop:"10rem"}}
    //   >
    //     <ul  class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    //       <li class="nav-item text-center">
    //         <a
    //         style={{backgroundColor:"#06101f",color:"#fff"}}
    //           class="nav-link active btl"
    //           id="pills-home-tab"
    //           data-toggle="pill"
    //           href="/login"
    //           role="tab"
    //           aria-controls="pills-home"
    //           aria-selected="true"
    //         >
    //           Login
    //         </a>
    //       </li>
    //       <li class="nav-item text-center">
    //         <a
    //           class="nav-link btr"
    //           id="pills-profile-tab"
    //           data-toggle="pill"
    //           href="/Register"
    //           role="tab"
    //           aria-controls="pills-profile"
    //           aria-selected="false"
    //         >
    //           Register
    //         </a>
    //       </li>
    //     </ul>
    //     <div class="tab-content" id="pills-tabContent">
    //       <div
    //         class="tab-pane fade show active"
    //         id="pills-home"
    //         role="tabpanel"
    //         aria-labelledby="pills-home-tab"
    //       >
    //         <div class="form px-4 pt-5">
    //           <input
    //             type="text"
    //             name="username"
    //             class="form-control"
    //             placeholder="username"
    //             onChange={handleUser}
    //             label="username"
    //             value={user.username}
    //             />

    //           <input
    //             type="password"
    //             name="password"
    //             label="password"
    //             class="form-control"
    //             placeholder="Password"
    //             onChange={handleUser}
    //             value={user.password}

    //           />
    //           <button
    //           style={{width:"100%"}}
    //            class="btn btn-dark btn-block"
    //            onClick={handleLogin}
    //            type="submit"
    //           >Login</button>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
    //batas
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
