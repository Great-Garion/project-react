import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Button, Row, Container } from "react-bootstrap";

function Register() {
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

  const handleChangeLogin = (event) => {
    const { name, value } = event.target;
    setUser((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  };
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
                onChange={handleChangeLogin}
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
                value={user.firstName}
                name="lastName"
                onChange={handleChangeLogin}
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
                name="firstName"
                onChange={handleChangeLogin}
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
                onChange={handleChangeLogin}
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
                onChange={handleChangeLogin}
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
                onChange={handleChangeLogin}
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
                onChange={handleChangeLogin}
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
                onChange={handleChangeLogin}
              />

              <Form.Check
                type="radio"
                label="Perempuan"
                value="Perempuan"
                name="gender"
                placeholder="gender"
                onChange={handleChangeLogin}
              />
            </Col>
          </Form.Group>

          <Button>Daftar</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
