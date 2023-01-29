import React from "react";
import Hero from "../Hero";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Features from "../Features/Features";
import template from "../template";

const HomePage = () => (
  <div>
    <Hero />
   <Features />
    <About />
    <Gallery images={template.galleryImages} />
  </div>
);

export default HomePage;
