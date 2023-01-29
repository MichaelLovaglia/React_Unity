import React from "react";

import "./SocialIcon.css";

const SocialIcon = ({ icon, link, style }) => {
  const Icon = icon;
  return (
    <span className="social" style={style}>
      <a href={link}>
        <Icon />
      </a>
    </span>
  );
};

export default SocialIcon;
