import React, { useState, useEffect } from 'react';
import {Badge } from 'react-bootstrap';
// import { fetchSuppliers } from '../../api';

const Suppliers = () => {
  const [expandedSupplierId, setExpandedSupplierId] = useState(null);

  const handleCardClick = (supplierId) => {
    setExpandedSupplierId((prevExpandedSupplierId) =>
      prevExpandedSupplierId === supplierId ? null : supplierId
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
            <button className="btn btn-primary">New Deposit</button>

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
                  <div className="card-body">
                    <h5 className="card-title">{supplier.amount}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {supplier.date || 'Supplier Email'}
                    </h6>
                    <small className="card-text">Reciept:{" "}
                    {/* ITALIC */}
                    <span style={{fontStyle: "italic"}}>
                    {supplier.receipt}</span></small>
                    
                    <p className="card-text mb-1">Account Name: {supplier.account_name}</p>
                    <p className="card-text">Method: {supplier.method}</p>
                  </div>
                    <div className="additionalcard">
                      <p>Additional Info: {supplier.additional_info}</p>
                      <button className="btn btn-primary">Action 1</button>
                      <button className="btn btn-secondary">Action 2</button>
                    </div>
                  
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Suppliers;
