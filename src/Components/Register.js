import { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Button, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router";
import axios from "axios";
import { UserContext } from "../Context/UserProvider";

function Register() {
  let history = useHistory();
  let {isReg, setIsReg} = useContext(UserContext)
  let [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    birthdate: "",
    gender: "",
    address: "",
  });

  let [dataApiRegis, setDataApiRegis] = useState([]);

  const handleChangeRegister = (event) => {
    const { name, value } = event.target;
    setUser((dataUser) => ({
      ...dataUser,
      [name]: value,
    }));
  };

  const submitData = () => {
    // console.log(user);
    axios
      .post("https://618e643350e24d0017ce1267.mockapi.io/user", user)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setDataApiRegis(res);
      });
    history.push("/Login");
    setIsReg(true)
  };

  const handleChangebutton = (e) => {
    e.preventDefault();
    // const userJSON = JSON.stringify(user);
    // console.log(userJSON);
    // localStorage.setItem("user", userJSON);
    // console.log(user);
    submitData();
  };
  // console.log(dataApiRegis)
  return (
    <div className="Register">
      <h3>Halaman Register</h3>
      <Container>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              FirstName
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="First name"
                value={user.firstName}
                name="firstName"
                onChange={handleChangeRegister}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              LastName
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Last name"
                value={user.lastName}
                name="lastName"
                onChange={handleChangeRegister}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Masukan username Anda"
                value={user.username}
                name="username"
                onChange={handleChangeRegister}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Masukan Email Anda"
                value={user.email}
                name="email"
                onChange={handleChangeRegister}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                value={user.password}
                name="password"
                onChange={handleChangeRegister}
                placeholder="Tambahkan Password"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Address
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="textarea"
                value={user.address}
                name="address"
                onChange={handleChangeRegister}
                placeholder="Tambahkan Address"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Birthdate
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="date"
                value={user.birthdate}
                name="birthdate"
                onChange={handleChangeRegister}
                placeholder="Tambahkan Birthdate"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Gender
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Laki-laki"
                value="Laki-laki"
                name="gender"
                placeholder="gender"
                onChange={handleChangeRegister}
              />

              <Form.Check
                type="radio"
                label="Perempuan"
                value="Perempuan"
                name="gender"
                placeholder="gender"
                onChange={handleChangeRegister}
              />
            </Col>
          </Form.Group>

          <Button onClick={handleChangebutton}>Daftar</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
