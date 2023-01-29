import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Fade from "react-reveal/Fade";

import template from "../template";
import "./About.css";

const About = () => (
  <Container name="about" fluid>
    <Row>
      <Col
        xs={12}
        lg={6}
        className="text-center text-lg-left d-inline-flex flex-column align-items-center my-5"
      >
        <div className=" w-75">
          <h2 className="mb-4 display-4">{template.aboutTitle}</h2>
          <p className="lead" style={{ fontSize: "1.5em" }}>
            <Fade cascade> {template.aboutContent} </Fade>
          </p>
        </div>
      </Col>
      <Col
        xs={12}
        lg={6}
        className="p-0 d-inline-flex flex-column justify-content-center align-items-center p-0 p-md-4 p-lg-4 p-xl-0"
      >
        <div className="video embed-responsive embed-responsive-16by9">
          <iframe
            title="Game trailer"
            className="embed-responsive-item"
            src={template.homeVideo}
            allowFullScreen
          ></iframe>
        </div>
      </Col>
    </Row>
  </Container>
);

export default About;
