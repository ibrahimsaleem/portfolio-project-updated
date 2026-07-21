import React from "react";
import Card from "react-bootstrap/Card";
import { FaShieldAlt } from "react-icons/fa";

function CertificateCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath ? (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      ) : (
        <div
          style={{
            height: 194,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,255,65,0.05)",
          }}
        >
          <FaShieldAlt style={{ fontSize: "3.2em", color: "var(--matrix-green)", filter: "drop-shadow(0 0 8px rgba(0,255,65,0.5))" }} />
        </div>
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}
export default CertificateCards;
