import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    return (
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
    );
}

export default BasicExample;

{/* <div class="container">
  <h1>FormSubmit Demo</h1>
  <form target="_blank" action="https://formsubmit.co/tyler.dins88@gmail.com" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required>
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required>
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div> */}