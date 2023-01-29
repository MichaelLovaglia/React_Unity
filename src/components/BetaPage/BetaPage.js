import React, { Component } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import Unity, { UnityContent } from "react-unity-webgl";
import Button from "react-bootstrap/Button";

import "./BetaPage.css";

class BetaPage extends Component {
  unityContent = new UnityContent(
    "unity/build/WebGL/WebGL/Build/WebGL.json",
    "unity/build/WebGL/WebGL/Build/UnityLoader.js"
  );

  render() {
    return (
      <div className="w-100 bg-secondary">
        <div className="unity">
          <Unity unityContent={this.unityContent} />
          <div className="w-100 d-flex justify-content-end">
            <Button
              style={{
                backgroundColor: "rgb(221, 102, 53)",
                outline: "none",
                borderWidth: "0px",
              }}
              onClick={() => {
                this.unityContent.setFullscreen(true);
              }}
            >
              <AiOutlineFullscreen />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default BetaPage;
