import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import portfolioData from "../../portfolio.json";

function Projects() {
  const { projects } = portfolioData;
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map(
            ({ title, description, img, github_link, demo_link }) => (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={img}
                  isBlog={false}
                  title={title}
                  description={description}
                  ghLink={github_link}
                  demoLink={demo_link}
                />
              </Col>
            )
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
