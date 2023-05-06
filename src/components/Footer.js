import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import portfolioData from "../portfolio.json";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const { github, linked_in, instagram, twitter } = portfolioData;
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Soumyajit Behera</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {github && (
              <li className="social-icons">
                <a
                  href={github}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
            )}
            {twitter && (
              <li className="social-icons">
                <a
                  href={twitter}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            )}
            {linked_in && (
              <li className="social-icons">
                <a
                  href={linked_in}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            )}
            {instagram && (
              <li className="social-icons">
                <a
                  href={instagram}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
