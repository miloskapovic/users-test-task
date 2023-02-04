import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function GoHomeButton() {
  return (
    <Container className="position-absolute m-5 t-5 s-0">
      <Link to="/">
        <i class="bi bi-house-fill text-dark h2"></i>
      </Link>
    </Container>
  );
}

export default GoHomeButton;
