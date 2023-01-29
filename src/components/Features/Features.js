import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Zoom from 'react-reveal/Zoom';
import FTP from "../../assets/images/FTP.png"
import PAP from "../../assets/images/PAP.png"
import logo from "../../assets/images/logo_transparent.png"

// rgb(72, 2, 2)
const Features = () => (
<Container  fluid className="bg-light">
    <Row >
      <Col
        xs={12}
        md={5}
        className="d-inline-flex align-items-center justify-content-center"
      >
        <Zoom >
        <div className="w-50 m-5 bg-dark" >
            <img src={FTP} className="img-fluid" alt="free to play" />
        </div></Zoom>
      </Col>
      <Col
        xs={4}
        md={2}
        className="d-inline-flex align-items-center justify-content-center m-auto"
      >
      
        <div className="m-auto" >
            <img src={logo} className="img-fluid" alt="logo" />
        </div>
      </Col>
      <Col
        xs={12}
        md={5}
        className="d-inline-flex justify-content-center align-items-center p-0 p-md-4 p-lg-4 p-xl-0"
      >  <Zoom >
        <div  className="w-50 m-5 bg-dark" >
            <img src={PAP} className="img-fluid" alt="plug and play" />
         
        </div></Zoom>
      </Col>
    </Row>
  </Container>

   
);

export default Features;
//  <div style={{
//         backgroundImage:`url(${s5})`,
//         width:"100%",
//         height: "320px",
//         backgroundPosition: 'center',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat'
//       }}>1</div>