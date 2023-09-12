import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <>
      <div className="contactme">
        <h5>email me at: tyler.dins88@gmail.com</h5>
        <p>or contact me directly below:</p>
      </div>
      <Form target="_blank" action="https://formsubmit.co/22f6a854605d1d7f65de5591cb289db4" method="POST" id="form" style={{ width: '60vw' }}>
        <Form.Group className="mb-3">
          <Form.Label>name:</Form.Label>
          <Form.Control type="name" placeholder="enter name here." />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>email:</Form.Label>
          <Form.Control type="email" placeholder="enter email here." />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>let me know your thoughts:</Form.Label>
          <Form.Control style={{ height: '80px' }} type="message" placeholder="enter message here." />
        </Form.Group>
        <Button variant="primary" type="submit">
          send.
        </Button>
      </Form>
    </>
  );
}

export default BasicExample;