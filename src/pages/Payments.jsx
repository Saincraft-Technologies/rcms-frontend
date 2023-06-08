import React, { useState } from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import AddPaymentModalPage from '../components/PayModal';
import Navbar from '../components/Navbar';

const payments = [
  {
    id: 1,
    date: '2023-05-01',
    amount: 100,
    status: 'Success',
  },
  {
    id: 2,
    date: '2023-05-03',
    amount: 75,
    status: 'Pending',
  },
  // Add more payments here...
];

const PaymentTile = ({ payment }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Payment #{payment.id}</Card.Title>
        <Card.Subtitle>Date: {payment.date}</Card.Subtitle>
        <Card.Text>
          Amount: ${payment.amount}
          <br />
          Status:{' '}
          <Badge
            pill
            bg={payment.status === 'Success' ? 'success' : 'warning'}
          >
            {payment.status}
          </Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const PaymentsLogPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSavePayment = (amount) => {
    // Logic to save the payment with the given amount
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Payments Log</h2>
          <Button variant="primary" onClick={handleShowModal}>
            Add Payment
          </Button>
        </div>
        <div className="row mt-4">
          {payments.map((payment) => (
            <div key={payment.id} className="col-md-6">
              <PaymentTile payment={payment} />
            </div>
          ))}
        </div>
      </div>
      <AddPaymentModalPage
        show={showModal}
        onClose={handleCloseModal}
        onSave={handleSavePayment}
      />
    </>
  );
};

export default PaymentsLogPage;
