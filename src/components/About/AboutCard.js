import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import portfolioData from "../../portfolio.json";

function AboutCard() {
  const { name, location, work_or_education, other_activities, moto } =
    portfolioData;
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">{name}</span> from{" "}
            <span className="purple"> {location}</span>
            <br />
            {work_or_education}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {other_activities.map((activity) => (
              <li className="about-activity">
                <ImPointRight />
                {activity}
              </li>
            ))}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>{moto} </p>
          <footer className="blockquote-footer">{name}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
