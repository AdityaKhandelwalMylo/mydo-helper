import React from "react";
import { Col, Form } from "react-bootstrap";

const FieldInput = () => {
  return (
    <>
      <Col md={6} sm={12}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Label Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Col>

      <Col md={6} sm={12}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Column size</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Col>
    </>
  );
};

export default FieldInput;
