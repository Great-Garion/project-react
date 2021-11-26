import { useContext } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { UserContext } from "../Context/UserProvider";

import Logo from "../logo.png";

function Navigasi() {
  const history = useHistory();
  let { isLogin, setIsLogin } = useContext(UserContext);

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
      <Container fluid>
        <Navbar.Brand className="logo">
          <img src={Logo} style={{ width: "5rem" }} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {/* movie */}
            <Nav.Link>
              {isLogin && (
                <Link
                  to="/movie"
                  className="fs-4"
                  style={{
                    textDecoration: "none",
                    color: "blue",
                    padding: "0 10vw",
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
                    padding: "0 10vw",
                  }}
                >
                  Series
                </Link>
              )}
            </Nav.Link>
          </Nav>

          <Button
            variant="danger"
            className="justify-content-end"
            onClick={loginLogout}
          >
            {isLogin ? "Keluar" : "Masuk"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
