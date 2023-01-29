import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import template from "./template";
import { Link } from "react-scroll";
import { Parallax } from "react-parallax";
import Slide from "react-reveal/Slide";

const Hero = () => (
  <Parallax bgImage={template.heroImage} bgImageAlt="the cat" strength={500}>
    <div
      style={{
        height: "95vh",
      }}
      className="m-0"
    >
      <Row className="h-75 align-items-center text-center text-white text-md-left text-center justify-content-center justify-content-md-start ">
        <Col xs="auto" md={{ span: 4, offset: 1 }}>
          {Object.keys(template.homeTitle).map((element, index) => {
            if (element === "top" || element === "bottom") {
              return (
                <h1
                  key={index}
                  className="display-2"
                  style={{ fontWeight: "900", lineHeight: "50%" }}
                >
                  {template.homeTitle[element]}
                </h1>
              );
            }
            return (
              <h1
                key={index}
                className="display-2"
                style={{ fontWeight: "900" }}
              >
                {template.homeTitle[element]}
              </h1>
            );
          })}
          <Slide right>
            <h4
              className="my-4"
              style={{ fontWeight: "300", fontSize: "1.7em" }}
            >
              <mark className="bg-dark text-white">
                {template.homeSubtitle}
              </mark>
            </h4>{" "}
          </Slide>
          <Link to="about" smooth={true} duration={600}>
            <Button
              variant="light"
              size="lg"
              style={{
                backgroundColor: "rgb(255, 122, 68)",
                outline: "none",
                borderWidth: "0px",
                fontSize: "1.5em",
                color: "white",
              }}
              className="my-auto "
            >
              {template.homeButton}
            </Button>
          </Link>
        </Col>
      </Row>
    </div>{" "}
  </Parallax>
);

export default Hero;
