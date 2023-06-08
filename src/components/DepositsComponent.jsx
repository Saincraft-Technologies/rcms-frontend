import React, { useState, useEffect } from 'react';
import {Badge } from 'react-bootstrap';
// import { fetchSuppliers } from '../../api';
import DepositModal from './DepositModal';

const Suppliers = () => {
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

  
  const [expandedSupplierId, setExpandedSupplierId] = useState(null);

  const handleCardClick = (supplierId) => {
    setExpandedSupplierId((prevExpandedSupplierId) =>
      prevExpandedSupplierId === supplierId ? null : null
    );
  };

  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

// demo data
    const demoSuppliers = [
        {
            id: 1,
            amount: '100,000/-',
            date: '6/6/2023',
            receipt: '#asad7868sad',
            account_name: 'Zahab',
            method: 'Mobile Transfer - MPESA',
        },
        {
            id: 2,
            amount: '200,000/-',
            date: '6/6/2023',
            receipt: '#asad7868sad',
            account_name: 'Rays',
            method: 'Bank Transfer - CRDB',
        }
    ];

    useEffect(() => {
        setSuppliers(demoSuppliers);
        setLoading(false);
    }, []);



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-3">
            {/* new deposit button */}
            <div className='btn btn-primary' onClick={handleShowModal}>
            Add Deposit
          </div>
          <DepositModal
        show={showModal}
        onClose={handleCloseModal}
        onSave={handleSavePayment}
      />

          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {loading && (
              <div className="text-center">
                <div className="spinner-border text-primary mt-5" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {error && <p className="text-center mt-5">Error...</p>}
            {suppliers
              .filter((supplier) => {
                if (search === '') {
                  return supplier;
                } else if (supplier.amount.toLowerCase().includes(search.toLowerCase())) {
                  return supplier;
                }
                return false;
              })
              .map((supplier) => (
                <div
                  key={supplier.id}
                  className={`card mt-2 ${supplier.id === expandedSupplierId ? 'expanded' : ''}`}
                  onClick={() => handleCardClick(supplier.id)}
                >
                  {/* badge */}     
                  <div className="badge-container position-absolute top-0 end-0 "
                  style={{
                    marginTop: "10px",
                    marginRight: "10px",
                  }}
                  >
                  
                      <Badge  bg="success custom-badge" className="notification-badge" >
                    {/* tick icon */}
                    <i className="fas fa-check"></i>
                      </Badge>
                  </div>
                  <div className="card-body mb-1">
                    <h5 className="card-title">{supplier.amount}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {supplier.date || 'Supplier Email'}
                    </h6>
                    <small className="card-text ">Reciept:{" "}
                    {/* ITALIC */}
                    <span style={{fontStyle: "italic"}}>
                    {supplier.receipt}</span></small>
                    
                    <p className="card-text mt-1 mb-1">Method: {supplier.method}</p>
                    {/* <p className="card-text">Account Name: {supplier.account_name}</p> */}
                  </div>
                  {/* IF EXPANDED */}
                  {supplier.id === expandedSupplierId && (
                  <div className="additionalcard p-4 ">
                      <p>
                        Additional Info:  {supplier.supplier_city}
                      </p>
                      
                      {/* <button className="btn btn-primary mx-4">Accept Payment</button> */}
                      <button className="btn btn-secondary">Paid Receipt</button>
                      


                  </div>
)}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Suppliers;
