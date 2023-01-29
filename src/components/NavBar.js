import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import template from "./template";


const NavBar = () => (
  <Navbar variant="dark" bg="dark" expand="md" style={{ fontWeight: "300" }}>
    <Navbar.Brand>
      <Link to="/" className="nav-link p-0 text-white ">
        <Container>
          <img alt="" src={template.brandLogo} style={{ width: "4em" }} />{" "}
          <div
            className="ml-auto"
            style={{ fontSize: "1.5em", lineHeight: "80%" }}
          >
            {template.brandName.split(" ").map((element, index) => (
              <Row key={index}>
                <Col className="p-0">{element}</Col>
              </Row>
            ))}
          </div>
        </Container>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav
        className="ml-auto text-uppercase"
        style={{ fontSize: "1.5em", lineHeight: "80%" }}
      >
        {template.navLinks.map((element, index) => (
          <Link
            key={index}
            to={element.link}
            className="nav-link text-white m-3"
          >
            {element.title}
          </Link>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
