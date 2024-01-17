import React, { useState, useEffect } from "react";
import "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export const Contact = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <div>
      <hi>To: pauldinb@gmail.com</hi>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>From:</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="subject" placeholder="Subject" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button
          style={{ backgroundColor: "#326e2e" }}
          type="submit"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? "Submitting…" : "Submit"}
        </Button>
      </Form>
    </div>
  );
};
