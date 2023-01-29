import React from "react";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import template from "../template";

import "./Gallery.css";

const Gallery = ({ images }) => {
  const imageItems = images.map((image, index) => (
    <img
      src={image}
      key={index}
      className="galleryImage"
      alt={`gameplay screenshoot ${index}`}
    />
  ));
  return (
    <Container fluid className="p-0 m-0 bg-light">
      <h2 className="display-4 p-4 text-center">{template.galleryTitle}</h2>
      <div className=" d-flex flex-wrap justify-content-center text-decoration-underline align-items-stretch w-100">
        <Fade cascade>{imageItems}</Fade>
      </div>
    </Container>
  );
};

export default Gallery;
