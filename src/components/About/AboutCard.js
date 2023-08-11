import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, Myself <span className="blue">Balavedhaa S</span>
            <span className="blue"> from Coimbatore, TamilNadu, India.</span>
            <br /><span className="purple">An aspiring Virtual Reality enthusiast, currently pursuing Bachelors in Artificial Intelligence and Data Science</span>
            <br />
            Additionally, now I am learning ReactJS and Unity.
            <br />
            <br />
           And also learning basics in unity.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing song
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
          </ul>

          <p style={{ color: "rgb(126, 155, 172)" }}>
            "You are your home"{" "}
          </p>
          <footer className="blockquote-footer">Balavedhaa S</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
