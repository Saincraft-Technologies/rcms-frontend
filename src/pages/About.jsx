import React, { useState } from 'react';
import { Card, Badge, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const BusinessProfilePage = () => {
  const [tin, setTIN] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [providerType, setProviderType] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const business = {
    name: 'Business A',
    location: 'City A',
    phone: '123-456-7890',
    email: 'businessA@example.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum, diam nec iaculis consequat, ante sem gravida justo, id tincidunt enim nisl ac est.',
    // Add more details here...
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your submission logic here
    console.log('Submitted!');
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4 mb-5">
        <div className="d-flex justify-content-end mb-3">
          <Link to="/payments" className="text-decoration-none">
            <Button variant="primary">
              Payments
              <Badge pill bg="secondary" className="ms-2">
                4
              </Badge>
            </Button>
          </Link>
        </div>
        <Card className="profile-card">
          <Card.Body>
            <Card.Title>{business.name}</Card.Title>
            <div className="details">
              <div>
                <i className="bi bi-geo-alt"></i> {business.location}
              </div>
              <div>
                <i className="bi bi-phone"></i> {business.phone}
              </div>
              <div>
                <i className="bi bi-envelope"></i> {business.email}
              </div>
            </div>
            <Card.Text>{business.description}</Card.Text>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="tin">
                <Form.Label>TIN</Form.Label>
                <Form.Control type="text" value={tin} onChange={(e) => setTIN(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="businessType" className="mt-2">
                <Form.Label>Business Type</Form.Label>
                <Form.Control type="text" value={businessType} onChange={(e) => setBusinessType(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="providerType" className="mt-2">
                <Form.Label>Provider Type</Form.Label>
                <Form.Control type="text" value={providerType} onChange={(e) => setProviderType(e.target.value)} />
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label>Payment Method</Form.Label>
                <Form.Check
                  type="radio"
                  id="card"
                  label="Card"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={handlePaymentMethodChange}
                />
                <Form.Check
                  type="radio"
                  id="cash"
                  label="Cash"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={handlePaymentMethodChange}
                />
              </Form.Group>
              <Button variant="primary mt-3" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default BusinessProfilePage;
