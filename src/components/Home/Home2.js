import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/flower3.jpeg"; // home image 2
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            An aspiring Virtual Reality enthusiast, currently pursuing Bachelors in Artificial Intelligence and Data Science.
              <br />
              <br />I am learning
                <b className="blue"> ReactJS, unity now. </b>
              
              <br />
              <br />
              I am curious about AR & VR Technologies.
              <br />
              <br />
              <b className="yellow">Singing songs and Photography are my passions.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/balavedhaa/the_portfolio.git"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/balavedhaa-s-078588226"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
