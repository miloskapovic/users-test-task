import React from "react";
import { Form } from "react-bootstrap";

function BasicInput({ defaultValue, name, label, placeholder, type }) {
  return (
    <Form.Group className="mb-3 col-12 col-md-6" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue || ""}
        name={name}
      />
    </Form.Group>
  );
}

export default BasicInput;
