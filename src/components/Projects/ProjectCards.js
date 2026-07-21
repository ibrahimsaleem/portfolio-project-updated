import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import { FaSitemap } from "react-icons/fa";

function ProjectCards(props) {
  const isInternal = props.link && props.link.startsWith("/");

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {isInternal ? (
          <Button as={Link} variant="primary" to={props.link}>
            <FaSitemap /> &nbsp;View Case Study
          </Button>
        ) : (
          <Button variant="primary" href={props.link} target="_blank">
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? "View Blog" : "View Project"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
