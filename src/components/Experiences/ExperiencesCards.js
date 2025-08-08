import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2">{props.organization}</Card.Subtitle>
        <Card.Text className="date">{props.date}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        {props.documentLink && (
          <Button 
            variant="primary" 
            href={props.documentLink} 
            target="_blank" 
            rel="noopener noreferrer"
            size="sm"
          >
            <FaExternalLinkAlt /> View Certificate
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;