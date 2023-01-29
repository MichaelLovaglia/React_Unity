import React from "react";
import { FaGithub } from "react-icons/fa";
import SocialIcon from "./SocialIcon/SocialIcon";
import template from "./template";

const Footer = () => (
  <footer className="bg-dark medium text-center text-white-50">
    <SocialIcon
      style={{ fontSize: "2.5em" }}
      icon={FaGithub}
      link={template.githubLink}
    />

    <div className="p-3">Copyright &copy; 2020 {template.brandName} </div>
  </footer>
);

export default Footer;
