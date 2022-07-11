import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import doctor from "../../Assets/Projects/doctor.png";
import Resto from "../../Assets/Projects/Resto.jpg";

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doctor}
              isBlog={false}
              title="DokTalk"
              description="Online Health Consultation System using MySQL, Php and Bootstrap and JavScript"
              ghLink="https://github.com/vikipedia2k/doktalk.github.io"
              demoLink="https://doktalk.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resto}
              isBlog={false}
              title="Restaurant Management System"
              description="Simple Restaurant Management System using HTML,CSS,JS,SQL and Bootstrap"
              ghLink="https://github.com/vikipedia2k/Sampoorn-Resto"
              demoLink="#"
            />
          </Col>    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
