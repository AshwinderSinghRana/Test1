import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav style={{ gap: "10px" }}>
            <NavLink to="/connection">Forms</NavLink>
            <NavLink to="/user">User Details</NavLink>
            <NavLink to="/productTable">Products </NavLink>
            <NavLink to="/captcha">Captcha </NavLink>
            <NavLink className="ms-5" to="/login">
              Login
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default Home;
