import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddPaymentModalPage = ({ show, onClose, onSave }) => {
  const [amount, setAmount] = useState('');
  const [receipt, setReceipt] = useState('');

  const handleSave = () => {
    onSave(amount, receipt);
    setAmount('');
    setReceipt('');
  };

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    const numericAmount = inputAmount.replace(/[^0-9.]/g, ''); // Remove non-numeric characters except decimal point
    setAmount(numericAmount);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={handleAmountChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formReceipt">
            <Form.Label>Receipt</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter receipt"
              value={receipt}
              onChange={(e) => setReceipt(e.target.value)}
              required
           />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPaymentModalPage;
