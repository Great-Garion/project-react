import { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { UserContext } from "../Context/UserProvider";

import Logo from "../logo.png";

function Navigasi() {
  const history = useHistory();
  let { isLogin, setIsLogin } = useContext(UserContext);
  console.log(isLogin);

  console.log(history);

  function loginLogout() {
    if (isLogin) {
      // melakukan logout
      setIsLogin(false);
      localStorage["isLogin"] = false;
    } else {
      // pindah ke halaman login
      history.push("/login");
    }
  }

  return (
    <Navbar expand="lg" style={{ backgroundColor: "#93B5C6" }}>
      {/* <Container> */}
      <Navbar.Brand className="logo">
        <img src={Logo} style={{ width: "5rem" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {/* movie */}

          <Nav.Link>
            {isLogin && (
              <Link
                to="/movie"
                className="fs-4"
                style={{
                  textDecoration: "none",
                  color: "blue",
                  // paddingRight: "200px",
                }}
              >
                Movie
              </Link>
            )}
          </Nav.Link>

          {/* serries */}
          <Nav.Link>
            {isLogin && (
              <Link
                to="/series"
                className="fs-4"
                style={{
                  textDecoration: "none",
                  color: "blue",
                  marginLeft: "300px",
                }}
              >
                Series
              </Link>
            )}
          </Nav.Link>

          {/* keluar */}
          <Nav.Link>
            <Button
              variant="danger"
              className="justify-content-end"
              style={{ marginLeft: "300px" }}
              onClick={loginLogout}
            >
              {isLogin ? "Keluar" : "Masuk"}
            </Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default Navigasi;
