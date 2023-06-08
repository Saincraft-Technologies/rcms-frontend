import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar';

const RegisterPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
    <Navbar/> 
    <div className="container mt-4">
      <h2>Register New Business</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Business Name</Form.Label>
          <Form.Control type="text" placeholder="Enter business name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter location" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email address" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
    </>
  );
};

export default RegisterPage;
