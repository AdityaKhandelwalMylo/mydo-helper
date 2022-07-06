import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import FieldInput from "../FieldInput/FieldInput";
import "./MydoForm.css";

const MydoForm = () => {
  const [fieldCount, setFieldCount] = useState(0);

  const handleFieldCountChange = (e) => {
    setFieldCount(e.target.value);
  };

  return (
    <Container>
      <Form>
        <Row className="my-4">
          <Col sm={12}>
            <h1 className="text-center">Mydo Code Generator</h1>
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            <Form.Group className="mb-3" controlId="baseNameId">
              <Form.Label>Base Name For Ids</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>

          <Col md={6} sm={12}>
            <Form.Group className="mb-3" controlId="baseNameId">
              <Form.Label>SQL Table Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>

          <Col sm={12}>
            <Form.Group className="mb-5" controlId="fieldCount">
              <Form.Label>No. of Fields</Form.Label>
              <Form.Control
                type="text"
                value={fieldCount}
                onChange={handleFieldCountChange}
              />
            </Form.Group>
          </Col>

          {Number(fieldCount) && Number(fieldCount) >= 0
            ? [...new Array(Number(fieldCount)).keys()].map((element) => (
                <FieldInput key={element} index={element} />
              ))
            : null}
        </Row>
      </Form>
    </Container>
  );
};

export default MydoForm;
