import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/connection">Forms</Nav.Link>
            <Nav.Link href="/user">User Details</Nav.Link>
            <Nav.Link href="/productTable">Products </Nav.Link>
            <Nav.Link href="/login">Login </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default Home;
